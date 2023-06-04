
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import audioStartup from './audioStartup';
import playSounds from './playSounds';
const { abridgeData, quantiseData } = require('./processTubeData');

const dataBlockDuration = 30; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
let instruments = {}; // object to hold Tone instruments, intialised w global scope to allow access from playSounds.js

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [fadeState, setFadeState] = React.useState(true);
  const renderCount = useRef(1)

  const elementToFade = "g250238";
  const fadeElement = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (fadeState === true) {
      console.log("Fade out");
      element.style.animation = "fade-out 0.5s forwards";
      setFadeState(false);
    } else if (fadeState === false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      setFadeState(true);
    }
  }

  const fetchData = () => {
    axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
      .then(response => {
        const data = response.data;
        const filteredData = data
          .filter(item => item.timeToStation < dataBlockDuration)
          .map(item => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation
          }));
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        const abridgedData = abridgeData(sortedData);
        const quantisedData = quantiseData(abridgedData);
        // localStorage.setItem('quantisedData', JSON.stringify(quantisedData, null, 2)); // FOR DATA COLLECTION ONLY
        console.log(quantisedData);
        playSounds(quantisedData, instruments);
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  };

  const soundOn = async () => {
    setIsPlaying(true);
    instruments = await audioStartup()
    console.log('tone started')
    fetchData(); // initial fetch as setInterval only exectues after first interval
    setInterval(fetchData, dataBlockDuration * 1000);
    // Following block provides a looping pedal note:
    setInterval(() => {
      instruments.Pedal.triggerAttackRelease('C4', '1n');
    }, (dataBlockDuration / 60) * 2000);
  }

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('renderCount', renderCount.current)
  })    

  // TEST to trigger arrival effect on Holborn station
  const arrivalPoint = "g250238"; // Holborn
  const arrivalPointInner = "path250234"; // white centre of Holborn
  // const arrivalPointOuter = "path250236"; // balck outer of Holborn
  const arrivalEffectTransform = (elementId) => {
    const centreEl = document.getElementById(arrivalPointInner);
    // const outerEl = document.getElementById(arrivalPointOuter);
    //add the class of "active" to the element
    centreEl.classList.add("arrivalInner");
    // outerEl.classList.add("arrivalOuter");

    //remove the class of "active" after 1 second
    setTimeout(function () {
      centreEl.classList.remove("arrivalInner");
      // outerEl.classList.remove("arrivalOuter");
    }, 1500);
    console.log(centreEl.id);
  }

  const burntOak = "rect247013";
  // TEST to get location of SVG element
  const arrivalEffectCreate = (elementId) => {
    const element = document.getElementById(elementId);
    const rect = element.getBoundingClientRect();
  
    // Get the position and dimensions of section element with a class of "map-and-buttons"
    const mapAndButtons = document.querySelector(".map-and-buttons");
    // const svg = document.querySelector("svg");
    const svgRect = mapAndButtons.getBoundingClientRect();
  
    // Calculate the center position of the circle within the SVG canvas
    const centerX = rect.left - svgRect.left + rect.width / 2;
    const centerY = rect.top - svgRect.top + rect.height / 2;
  
    // Use the center coordinates to position the circle element
    const arrival = document.createElement("div");
    arrival.style.width = "5px";
    arrival.style.height = "5px";
    // arrival.style.backgroundColor = "rgba(255, 0, 0, 0.4";
    arrival.style.borderRadius = "50%";
    arrival.style.position = "absolute";
    arrival.style.transform = "translate(-50%, -50%) scale(1)";
    arrival.style.top = `${centerY}px`;
    arrival.style.left = `${centerX}px`;
    arrival.style.zIndex = "1000";
    arrival.classList.add("createArrival");
  
    // Append the circle element to the parent container
    const container = document.querySelector(".map-and-buttons");
    container.appendChild(arrival);

    let arrival2;
    // create a duplicate element in the same place after 0.1 seconds
    setTimeout(() => {
      const arrival2 = document.createElement("div");
      arrival2.style.width = "5px";
      arrival2.style.height = "5px";
      // arrival2.style.backgroundColor = "rgba(255, 0, 0, 0.4";
      arrival2.style.borderRadius = "50%";
      arrival2.style.position = "absolute";
      arrival2.style.transform = "translate(-50%, -50%) scale(1)";
      arrival2.style.top = `${centerY}px`;
      arrival2.style.left = `${centerX}px`;
      arrival2.style.zIndex = "1000";
      arrival2.classList.add("createArrivalAfterShock");
      container.appendChild(arrival2);
    }, 100);

    // remove both elements after 1 second
    setTimeout(() => {
      arrival.remove();
      if (arrival2) {
        arrival2.remove(); // Check if arrival2 exists before removing it
      }
    }, 2000);
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'Now Playing LUSO Live' : "Sound On"}</button>
        <p>{`This Page has rendered ${renderCount.current} times`}</p>
      </header>
      <section className="map-and-buttons">
        <button type="button" onClick={() => fadeElement(`${elementToFade}`)}>{fadeState ? `Destroy ${elementToFade} Line` : `Rebuild ${elementToFade} Line`}</button>
        <button type="button" onClick={() => arrivalEffectTransform(`${arrivalPoint}`)}>{`Transform at ${elementToFade}`}</button>
        <button type="button" onClick={() => arrivalEffectCreate(`${arrivalPointInner}`)}>{`Create at ${elementToFade}`}</button>
        <button type="button" onClick={() => arrivalEffectCreate(`${burntOak}`)}>{`Create at ${burntOak}`}</button>
        <TubeMap/>
      </section>
    </div>
  );
}

export default App;


import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import audioStartup from './audioStartup';
import playSounds from './playSounds';
const { abridgeData, quantiseData } = require('./processTubeData');
const { arrivalEffectTransform, arrivalEffectCreate } = require('./arrivalEffects');

const dataBlockDuration = 30; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
let instruments = {}; // object to hold Tone instruments, intialised w global scope to allow access from playSounds.js

// TEST points for viusal effects including fade and arrival effects
// const arrivalPoint = "g250238"; // Holborn station (whole station)
const arrivalPointInner = "path250234"; // white centre of Holborn
const burntOak = "rect247013"; // Burnt Oak station
const hendonCentral = "g249286"; // Hendon Central station
const elementToFade = "Northern";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [fadeState, setFadeState] = useState(true);
  const renderCount = useRef(1)
  
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

  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'LUSO Live' : "SOUND ON"}</button>
        <p>{`This Page has rendered ${renderCount.current} times`}</p>
      </header>
      <section className="map-and-buttons">
        <button type="button" onClick={() => fadeElement(`${elementToFade}`)}>{fadeState ? `Destroy ${elementToFade} Line` : `Rebuild ${elementToFade} Line`}</button>
        <button type="button" onClick={() => arrivalEffectTransform(`${arrivalPointInner}`)}>{`Transform at ${arrivalPointInner}`}</button>
        <button type="button" onClick={() => arrivalEffectCreate(`${arrivalPointInner}`)}>{`Holborn`}</button>
        <button type="button" onClick={() => arrivalEffectCreate(`${burntOak}`)}>{`Burnt Oak`}</button>
        <button type="button" onClick={() => arrivalEffectCreate(`${hendonCentral}`)}>{`Hendon`}</button>
        <TubeMap/>
      </section>
    </div>
  );
}

export default App;

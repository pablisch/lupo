
import React, { useState, useRef, useEffect } from "react";
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import audioStartup from './audioStartup';
import playSounds from './playSounds';
const { abridgeData, quantiseData } = require('./processTubeData');

const dataBlockDuration = 30; // seconds between fetch from TFL

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [fadeState, setFadeState] = React.useState(true);
  const renderCount = useRef(1)

  const lineToFade = "Northern";
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

  const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
  let instruments = {}; // object to hold Tone instruments, intialised w global scope

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
        <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'Now Playing LUSO Live' : "Sound On"}</button>
        <p>{`This Page has rendered ${renderCount.current} times`}</p>
      </header>
      <button type="button" onClick={() => fadeElement(`${lineToFade}`)}>{fadeState ? `Destroy ${lineToFade} Line` : 'Rebuild Northern Line'}</button>
      <TubeMap/>
    </div>
  );
}

export default App;

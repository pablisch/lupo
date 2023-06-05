import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import logo from '../../logo.svg';
import './App.css';
import TubeMap from '../TubeMap/TubeMap.js';
import audioStartup from '../../audioStartup';
import playSounds from '../../playSounds';
import DataVisualiser from '../DataVisualiser/DataVisualiser.js';
import { Routes, Route, Link } from "react-router-dom";
import { separateDataIntoLines, fudgeData, abridgeData, quantiseData } from '../../processTubeData';
import { arrivalEffectTransform, arrivalEffectCreate } from '../../arrivalEffects';


const dataBlockDuration = 30; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
let instruments = {}; // object to hold Tone instruments, intialised w global scope

// TEST points for viusal effects including fade and arrival effects
// const arrivalPoint = "g250238"; // Holborn station (whole station)
const arrivalPointInner = "path250234"; // white centre of Holborn
const burntOak = "rect247013"; // Burnt Oak station
const hendonCentral = "g249286"; // Hendon Central station

function App() {
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true); // added for data visualiser
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0); // added for data visualiser
  const [visualData, setVisualData] = useState([]); // added for data visualiser
  const [isPlaying, setIsPlaying] = useState(false);
  const renderCount = useRef(1)

  const [fadeCentralState, setFadeCentralState] = useState(true);
  const [fadeNorthernState, setFadeNorthernState] = useState(true);

  const fadeElement = (elementId, state, setState) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (state === true) {
      console.log("Fade out");
      element.style.animation = "fade-out 1s forwards";
      setState(false);
    } else if (state === false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      setState(true);
    }
  }


  const fetchData = () => {
    axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
      .then(response => {
        const filteredData = response.data
          .filter(item => item.timeToStation < dataBlockDuration)
          .map(item => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation
          }));
          const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
          // STEP 1: remove unnecessary text, whitespace, and apostrophes.
          const abridgedData = abridgeData(sortedData);
          // STEP 2: separate data into individual lines.
          const separatedData = separateDataIntoLines(abridgedData);
          // STEP 3: process data where all same line events occur simultaneously.
          const fudgedData = fudgeData(separatedData, dataBlockDuration);
          // STEP 4: quantise data to noteInterval
          const quantisedData = quantiseData(fudgedData);
          console.log('quantisedData =', quantisedData);
          setVisualData(quantisedData);
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

  const toggleVisualiseEventsOnly = () => {
    setVisualiseEventsOnly(!visualiseEventsOnly);
    setDataVisualiserKey((prevKey) => prevKey + 1);
    console.log(visualiseEventsOnly)
    setTimeout(() => {
      setVisualiseEventsOnly(visualiseEventsOnly);
      setDataVisualiserKey((prevKey) => prevKey + 1);
      console.log(visualiseEventsOnly)
    }, 1000);
  };
  
  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('renderCount', renderCount.current)
  })     

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h2>LUSO</h2>
        <Link to="/">Home</Link>
        <Link to="/data">Data</Link>
        <Link to="/landing">Logo</Link>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path='/data' element={
            <>
              <button onClick={toggleVisualiseEventsOnly}> {visualiseEventsOnly ? 'Include All intervals' : 'Events Only'} </button>
              <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
            </>
          }/>
          <Route path='/' element={
            <div className="container">

              <aside className="sidebar sidebar-left">
                <h2>Left Sidebar</h2>
                <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'LUSO Live' : "SOUND ON"}</button>
                <button type="button" onClick={() => fadeElement("Central", fadeCentralState, setFadeCentralState)}>{fadeCentralState ? `Destroy Central Line` : `Rebuild Central Line`}</button>
                <button type="button" onClick={() => fadeElement("Northern", fadeNorthernState, setFadeNorthernState)}>{fadeNorthernState ? `Destroy Northern Line` : `Rebuild Northern Line`}</button>
              </aside>

              <main className='arrival-effect'>
                <TubeMap/>
              </main>

              <aside className="sidebar sidebar-right">
                <h2>Right Sidebar</h2> 
                <button type="button" onClick={() => arrivalEffectTransform(`${arrivalPointInner}`)}>{`Transform at ${arrivalPointInner}`}</button>
                <button type="button" onClick={() => arrivalEffectCreate(`${arrivalPointInner}`)}>{`Holborn`}</button>
                <button type="button" onClick={() => arrivalEffectCreate(`${burntOak}`)}>{`Burnt Oak`}</button>
                <button type="button" onClick={() => arrivalEffectCreate(`${hendonCentral}`)}>{`Hendon`}</button>
              </aside>

            </div> 
          }/>
          <Route path='/landing' element={
            <div className="App">
            <header className="App-header">
              <h2>LUSO</h2>
              <img src={logo} className="App-logo" alt="logo" />
              
              <p>{`This Page has rendered ${renderCount.current} times`}</p>
            </header>
            <section className="map-and-buttons">
            </section>
          </div>
          }/>
        </Routes>
    </div>
  );
}

export default App;


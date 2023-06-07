import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import logo from '../../logo.svg';
import './App.css';
import TubeMap from '../TubeMap/TubeMap.js';
import audioStartup from '../../audioStartup';
import triggerAudioVisuals from '../../triggerAudioVisuals';
import DataVisualiser from '../DataVisualiser/DataVisualiser.js';
import { Routes, Route, Link } from "react-router-dom";
import processTubeData from '../../processTubeData';
import { arrivalEffectTransform, arrivalEffectCreate } from '../../arrivalEffects';
import allStations from '../../stations';
import TIMEOUTS from '../../timeouts';


const dataBlockDuration = 30; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
let instruments = {}; // object to hold Tone instruments, intialised w global scope
const arrivals = []; // array to hold arrival elements, intialised w global scope
let mainLooper;

// TEST points for viusal effects including fade and arrival effects
// const arrivalPoint = "g250238"; // Holborn station (whole station)
const arrivalPointInner = "Holbornx"; // white centre of Holborn
const marbleArch = "MarbleArchx"; // white centre of Holborn
// const arrivalPointInner = "path250234"; // white centre of Holborn
const burntOak = "rect247013"; // Burnt Oak station
const hendonCentral = "g249286"; // Hendon Central station

function App() {
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true); // added for data visualiser
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0); // added for data visualiser
  const [visualData, setVisualData] = useState([]); // added for data visualiser
  const [isPlaying, setIsPlaying] = useState(false);
  const [arrivalEffects, setArrivalEffects] = useState(true); // added for data visualiser
  const renderCount = useRef(1)

  const [fadeBakerlooState, setFadeBakerlooState] = useState(true);
  const [fadeCentralState, setFadeCentralState] = useState(true);
  const [fadeCircleState, setFadeCircleState] = useState(true);
  const [fadeDistrictState, setFadeDistrictState] = useState(true);
  const [fadeHammersmithCityState, setFadeHammersmithCityState] = useState(true);
  const [fadeJubileeState, setFadeJubileeState] = useState(true);
  const [fadeMetropolitanState, setFadeMetropolitanState] = useState(true);
  const [fadeNorthernState, setFadeNorthernState] = useState(true);
  const [fadePiccadillyState, setFadePiccadillyState] = useState(true);
  const [fadeVictoriaState, setFadeVictoriaState] = useState(true);
  const [fadeWaterlooCityState, setFadeWaterlooCityState] = useState(true);

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

  const fadeAll = () => {
    allStations.forEach((line) => {
      line.forEach((station) => {
        console.log(station);
        document.getElementById(station
          .replace(/ *\([^)]*\) */g, "")
          .replace(/\s|\.''/g, '')
          .replace(/\./g, '')
          .replace(/'/g, '')
          .replace(/UndergroundStation/g, '')
          .replace(/-Underground/g, '')
          .replace(/&/g, '_'),)
        .style.opacity = "0%";
      });
    });
  }

  const restart = () => {
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
    soundOn();
    console.log("All timeouts cleared");
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
        const processedData = processTubeData(sortedData, dataBlockDuration);
        console.log('processedData =', processedData);
        setVisualData(processedData);
        triggerAudioVisuals(processedData, instruments, arrivalEffects, arrivals);
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  };

  const soundOn = async () => {
    setIsPlaying(true);
    fadeAll();
    instruments = await audioStartup()
    console.log('tone started')
    fetchData(); // initial fetch as setInterval only exectues after first interval
    mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
    // Following block provides a looping pedal note:
    // setInterval(() => {
    //   instruments.Pedal.triggerAttackRelease('C4', '1n');
    // }, (dataBlockDuration / 60) * 2000);
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

  // handleArrivalEffectToggle to toggle the value of arrivalEffects
  const handleArrivalEffectToggle = () => {
    setArrivalEffects(!arrivalEffects);
    console.log('arrivalEffects', arrivalEffects)
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1
    console.log('renderCount', renderCount.current)
  })     

  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <nav>
        <div className="nav-container">
          <div className="nav-logo">
            <img src="./Underground.png" alt="" className="luso-logo" />
            <h2>LUSO</h2>
          </div>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/data">Data</Link>
            <Link to="/landing">Logo</Link>
          </div>
        </div>
      </nav>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path='/data' element={
            <>
              <button onClick={toggleVisualiseEventsOnly}> {visualiseEventsOnly ? 'Include All intervals' : 'Events Only'} </button>
              <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
            </>
          }/>
          <Route path='/' element={
            <div className="container bars-and-map">

              <aside className="sidebar sidebar-left">
                <h2>Left Sidebar</h2>
                <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'LUSO Live' : "SOUND ON"}</button>
                <button  onClick={fadeAll}>Fade All</button>
                <button  onClick={restart}>restart</button>
                <button className='btn-line btn-bakerloo' type="button" onClick={() => fadeElement("Bakerloo", fadeBakerlooState, setFadeBakerlooState)}>Bakerloo</button>
                <button className='btn-line btn-central' type="button" onClick={() => fadeElement("Central", fadeCentralState, setFadeCentralState)}>Central</button>
                <button className='btn-line btn-circle' type="button" onClick={() => fadeElement("Circle", fadeCircleState, setFadeCircleState)}>Circle</button>
                <button className='btn-line btn-district' type="button" onClick={() => fadeElement("District", fadeDistrictState, setFadeDistrictState)}>District</button>
                <button className='btn-line btn-hammersmith-city' type="button" onClick={() => fadeElement("HammersmithCity", fadeHammersmithCityState, setFadeHammersmithCityState)}>Hammersmith & City</button>
                <button className='btn-line btn-jubilee' type="button" onClick={() => fadeElement("Jubilee", fadeJubileeState, setFadeJubileeState)}>Jubilee</button>
                <button className='btn-line btn-metropolitan' type="button" onClick={() => fadeElement("Metropolitan", fadeMetropolitanState, setFadeMetropolitanState)}>Metropolitan</button>
                <button className='btn-line btn-northern' type="button" onClick={() => fadeElement("Northern", fadeNorthernState, setFadeNorthernState)}>Northern</button>
                <button className='btn-line btn-piccadilly' type="button" onClick={() => fadeElement("Piccadilly", fadePiccadillyState, setFadePiccadillyState)}>Piccadilly</button>
                <button className='btn-line btn-victoria' type="button" onClick={() => fadeElement("Victoria", fadeVictoriaState, setFadeVictoriaState)}>Victoria</button>
                <button className='btn-line btn-waterloo-city' type="button" onClick={() => fadeElement("WaterlooCity", fadeWaterlooCityState, setFadeWaterlooCityState)}>Waterloo & City</button>
          
              </aside>

              <main>
                <TubeMap/>
              </main>

              <aside className="sidebar sidebar-right">
                <h2>Right Sidebar</h2> 
                <button className='btn-temp' type="button" onClick={() => arrivalEffectTransform(`${arrivalPointInner}`)}>{`Transform at ${arrivalPointInner}`}</button>
                <button className='btn-temp' type="button" onClick={() => arrivalEffectCreate(`${arrivalPointInner}`)}>{`Holborn`}</button>
                <button className='btn-temp' type="button" onClick={() => arrivalEffectCreate(`${burntOak}`)}>{`Burnt Oak`}</button>
                <button className='btn-temp' type="button" onClick={() => arrivalEffectCreate(`${hendonCentral}`)}>{`Hendon`}</button>
                <button className='btn-temp' type="button" onClick={() => arrivalEffectCreate(`${marbleArch}`)}>{`Marble Arch`}</button>
                <button className='btn-temp btn-arrival-effects' type="button" onClick={() => handleArrivalEffectToggle()}>{arrivalEffects ? 'Turn Arrival Effects ON' : 'Turn Arrival Effects OFF'}</button>
                {/* render each element of the arrivals array in a paragraph element */}
                {arrivals.flat().map((arrival, index) => {
                  console.log('arrival', arrival);
                  return <div className="arrival-item"><p key={index}>{arrival}</p></div> 
                })}
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
          </div>
          }/>
        </Routes>
    </div>
  );
}

export default App;


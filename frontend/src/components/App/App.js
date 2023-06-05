import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import TubeMap from '../TubeMap/TubeMap.js';
import audioStartup from '../../audioStartup';
import playSounds from '../../playSounds';
import DataVisualiser from '../DataVisualiser/DataVisualiser.js';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
const { abridgeData, quantiseData } = require('../../processTubeData');

const dataBlockDuration = 30; // seconds between fetch from TFL

function App() {
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true); // added for data visualiser
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0); // added for data visualiser
  const [visualData, setVisualData] = useState([]); // added for data visualiser

  var fade_state = true;
  const fadeElement = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (fade_state === true) {
      console.log("Fade out");
      element.style.animation = "fade-out 1s forwards";
      fade_state = false;
    } else if (fade_state === false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      fade_state = true;
    }
  }

  const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
  let instruments = {}; // object to hold Tone instruments, intialised w global scope

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
        const abridgedData = abridgeData(filteredData);
        // line below was used before quantisedData was added to state for data visualiser
        const quantisedData = quantiseData(abridgedData).sort((a, b) => a.timeToStation - b.timeToStation);

        setVisualData(quantisedData); // added for data visualiser
        // setQuantisedData(quantiseData(abridgedData));
        // localStorage.setItem('quantisedData', JSON.stringify(quantisedData, null, 2)); // FOR DATA COLLECTION ONLY
        console.log("in fetchData")
        console.log(quantisedData);
        playSounds(quantisedData, instruments);
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  };

  const soundOn = async () => {
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
  

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h2>LUSO</h2>
        <Link to="/">Home </Link>
        <Link to="/data">Data</Link>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Routes>
          <Route path='/data' element={
            <>
              <button onClick={toggleVisualiseEventsOnly}> {visualiseEventsOnly ? 'Include All intervals' : 'Events Only'} </button>
              <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
            </>
          }/>
          <Route path='/' element={
            <>
              <button id="soundon" onClick={soundOn}>Sound On</button>
              <button type="button" onClick={() => fadeElement("Perivale")}>Central Fade</button>
              <TubeMap/>
            </>
          }/>
        </Routes>
    </div>
  );
}

export default App;

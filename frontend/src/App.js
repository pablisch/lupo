import React, { useState } from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import audioStartup from './audioStartup';
import playSounds from './playSounds';
import DataVisualiser from './components/DataVisualiser/DataVisualiser.js';
const { separateDataIntoLines, fudgeData, abridgeData, quantiseData } = require('./processTubeData');

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
        // STEP 1: remove unnecessary text, whitespace, and apostrophes.
        const abridgedData = abridgeData(sortedData);
        // STEP 2: separate data into individual lines.
        const separatedData = separateDataIntoLines(abridgedData);
        console.log('separated Data =', separatedData);
        // STEP 3: process data where all same line events occur simultaneously.
        const fudgedData = fudgeData(separatedData, dataBlockDuration);
        console.log('fudgedData =', fudgedData);
        // STEP 4: quantise data to noteInterval
        const quantisedData = quantiseData(fudgedData);
        console.log('quantisedData =', quantisedData);
        // setVisualData(abridgedData);
        // setVisualData(fudgedData);
        setVisualData(quantisedData);
        playSounds(abridgedData, instruments);
        // playSounds(quantisedData, instruments);
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
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button id="soundon" onClick={soundOn}>Sound On</button>
      <button onClick={toggleVisualiseEventsOnly}>
      {visualiseEventsOnly ? 'Include All intervals' : 'Events Only'}
    </button>
      <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
      {/* </header> */}
      <button type="button" onClick={() => fadeElement("Perivale")}>Central Fade</button>
      <TubeMap/>
    </div>
  );
}

export default App;

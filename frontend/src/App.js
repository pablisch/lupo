import React, { useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import * as Tone from 'tone';
import assignNoteForVictoriaLine from './note-assignments/victoria-line'
import assignNoteForJubileeLine from './note-assignments/jubilee-line'
import assignNoteForNorthernLine from './note-assignments/northern-line'
import DataVisualiser from './components/DataVisualiser/DataVisualiser.js';
const { abridgeData, quantiseData } = require('./processTubeData');

const dataBlockDuration = 30; // seconds between fetch from TFL

function App() {
  const [quantisedData, setQuantisedData] = useState([]); // added for data visualiser

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

  // let durationPassed = 0; // base time used in Arrivals.js

  const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
  let instruments = {}; // object to hold Tone instruments, intialised w global scope

  const toneStart = async () => {
    await Tone.start()

    const freeverb = new Tone.Freeverb().toDestination();
    freeverb.dampening = 1000;

    const pizzViolaSampler = new Tone.Sampler({
      urls: {
        "A3": "viola_A3_1_piano_pizz-normal.mp3",
      },
      release: 1,
      baseUrl: "/samples/",
    }).connect(freeverb);
    pizzViolaSampler.volume.value = -12

    const frenchHornSampler = new Tone.Sampler({
      urls: {
        "C4": "french-horn_C4_15_piano_normal.mp3",
      },
      release: 1,
      baseUrl: "/samples/",
    }).connect(freeverb);
    frenchHornSampler.volume.value = -6

    const doubleBassSampler = new Tone.Sampler({
      urls: {
        "A1": "double-bass_A1_05_forte_arco-normal.mp3",
      },
      release: 1,
      baseUrl: "/samples/",
    });
    doubleBassSampler.volume.value = -4
    await Tone.loaded();

    instruments = {
      Victoria: pizzViolaSampler, 
      Jubilee: frenchHornSampler,
      Northern: doubleBassSampler
    };
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
        // line below was used before quantisedData was added to state for data visualiser
        // const quantisedData = quantiseData(abridgedData);
        setQuantisedData(quantiseData(abridgedData));
        // localStorage.setItem('quantisedData', JSON.stringify(quantisedData, null, 2)); // FOR DATA COLLECTION ONLY
        console.log(quantisedData);
        playSounds(quantisedData, instruments);
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  };

  const soundOn = async () => {
    await toneStart()
    console.log('tone started')
    fetchData(); // initial fetch as setInterval only exectues after first interval
    setInterval(fetchData, dataBlockDuration * 1000);
  }

  const playSounds = (quantisedTubeData, instruments) => {
    quantisedTubeData.forEach((train) => {
      // can this be refactored into one expression for all lines?
      if (train.lineName === 'Victoria') {
        const note = assignNoteForVictoriaLine(train.stationName);
        setTimeout(() => {
          instruments.Victoria.triggerAttackRelease(note, '16n');
          console.log(`${train.stationName} on the ${train.lineName} Time To Station: ${train.timeToStation}}`);
        }, train.timeToStation * 1000);
      } else if (train.lineName === 'Jubilee') {
        const note = assignNoteForJubileeLine(train.stationName);
        setTimeout(() => {
          instruments.Jubilee.triggerAttackRelease(note, '16n');
          console.log(`${train.stationName} on the ${train.lineName} Time To Station: ${train.timeToStation}}`);
        }, train.timeToStation * 1000);
      } else if (train.lineName === 'Northern') {
        const note = assignNoteForNorthernLine(train.stationName);
        setTimeout(() => {
          instruments.Northern.triggerAttackRelease(note, '16n');
          console.log(`${train.stationName} on the ${train.lineName} Time To Station: ${train.timeToStation}}`);
        }, train.timeToStation * 1000);
      }
    })
  }

  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <h2>LUSO</h2>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <button id="soundon" onClick={soundOn}>Sound On</button>
      <DataVisualiser data={quantisedData} />
      {/* </header> */}
      <button type="button" onClick={() => fadeElement("Perivale")}>Central Fade</button>
      <TubeMap/>
    </div>
  );
}

export default App;

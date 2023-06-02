import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
// import Arrivals from './components/Arrivals';
import './App.css';
import quantiseData from './quantise-data';
import * as Tone from 'tone';
import assignNoteForVictoriaLine from './note-assignments/victoria-line'
import assignNoteForJubileeLine from './note-assignments/jubilee-line'

const dataBlockDuration = 30; // seconds

function App() {
  // const [tubeData, setTubeData] = useState([]);

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
    await Tone.loaded();

    // const synth = new Tone.Synth().toDestination();
    // synth.volume.value = -12

    const frenchHornSampler = new Tone.Sampler({
      urls: {
        "C4": "french-horn_C4_15_piano_normal.mp3",
      },
      release: 1,
      baseUrl: "/samples/",
    }).connect(freeverb);
    frenchHornSampler.volume.value = -8
    await Tone.loaded();

    instruments = {
      Victoria: pizzViolaSampler, 
      Jubilee: frenchHornSampler
    };
  }

  // useEffect(() => {
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
        // setTubeData(quantiseData(sortedData));
        const quantisedData = quantiseData(sortedData)
        // console.log(quantisedData);
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
        const note = assignNoteForJubileeLine(train.stationName)
        setTimeout(() => {
          instruments.Jubilee.triggerAttackRelease(note, '16n');
          console.log(`${train.stationName} on the ${train.lineName} Time To Station: ${train.timeToStation}}`);
        }, train.timeToStation * 1000);
      }
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <button id="soundon" onClick={soundOn}>Sound On</button>
        {/* <Arrivals tubeData={tubeData} /> */}
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';
import quantiseData from './quantise-data';
import * as Tone from 'tone';
import assignNoteForVictoriaLine from './note-assignments/victoria-line'
import assignNoteForJubileeLine from './note-assignments/jubilee-line'

const dataBlockDuration = 30; // seconds between fetch from TFL

function App() {

  var fade_state = true;
  const fadeElement = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (fade_state == true) {
      console.log("Fade out");
      element.style.animation = "fade-out 1s forwards";
      fade_state = false;
    } else if (fade_state == false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      fade_state = true;
    }
  }
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
      <header>
        <h1>LUSO</h1>
      </header>

      <div class="container">
        <aside class="sidebar sidebar-left">
          <h2>Left Sidebar</h2>
          <button type="button" onClick={() => fadeElement("Central")}>Central Fade</button>
          <button id="soundon" onClick={soundOn}>Sound On</button>
        </aside>

        <main>
          <TubeMap/>
        </main>

        <aside class="sidebar sidebar-right">
          <h2>Right Sidebar</h2>
        </aside>
      </div>    
    </div>
  );
}

export default App;

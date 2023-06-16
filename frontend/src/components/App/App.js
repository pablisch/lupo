import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import './ArrivalEffects.css';
import TubeMap from '../TubeMap/TubeMap.js';
import audioStartup from '../../audioStartup';
import triggerAudioVisuals from '../../triggerAudioVisuals';
import DataVisualiser from '../DataVisualiser/DataVisualiser.js';
import { Routes, Route } from "react-router-dom";
import processTubeData from '../../processTubeData';
// import allStations from '../../stations';
import TIMEOUTS from '../../timeouts';
import SideBarLeft from '../SideBarLeft/SideBarLeft';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import logo from '../../logo.svg';
import * as Tone from 'tone';
import fadeAllStations from '../../fadeAllStations';

const dataBlockDuration = 90; // seconds between fetch from TFL
const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";
const arrivals = []; // array to hold arrival elements, intialised w global scope
let mainLooper;

function App() {
  const [currentInstrument, setCurrentInstrument] = useState("orchestra")
  const [visualiseEventsOnly, setVisualiseEventsOnly] = useState(true);
  const [dataVisualiserKey, setDataVisualiserKey] = useState(0);
  const [visualData, setVisualData] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [arrivalEffectsToggle, setArrivalEffectsToggle] = useState(true);
  const [instruments, setInstruments] = useState(null);
  const [tapInVisible, setTapInVisible] = useState(true);
  const [muted, setMuted] = useState(false);
  const renderCount = useRef(1)

  const soundOn = async () => {
    console.log('SOUND ON');
    setTapInVisible(false);
    setIsPlaying(true); // controls the visibility of the soundon button
    fadeAllStations();
    const awaitedInstruments = await audioStartup(currentInstrument);
    setInstruments(awaitedInstruments);
    
    // Following block provides a looping pedal note:
    // setInterval(() => {
    //   instruments.Pedal.triggerAttackRelease('C4', '1n');
    // }, (dataBlockDuration / 60) * 2000);
  }

  const stop = () => {
    console.log("STOP");
    TIMEOUTS.clearAllTimeouts();
    clearTimeout(mainLooper);
    setIsPlaying(false);
  }

  const restart = async () => {
    console.log("RESTART");
    stop();
    soundOn();
  }

  const fetchData = () => {
    // axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
    //   .then(response => {
    //     const filteredData = response.data
    //       .filter(item => item.timeToStation < dataBlockDuration)
    //       .map(item => ({
    //         id: item.id,
    //         stationName: item.stationName,
    //         lineName: item.lineName,
    //         timeToStation: item.timeToStation
    //       }));

    // get data from frontend/sampleData/sortedDataSample2.json
    axios.get('./data.json')
      .then(response => {
        const filteredData = response.data;
        console.log('filteredData =', filteredData);
          
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        // save sortedData to local storage
        localStorage.setItem('sortedData', JSON.stringify(sortedData));
        const processedData = processTubeData(sortedData, dataBlockDuration);
        console.log('processedData =', processedData);
        setVisualData(processedData);
        console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalEffectsToggle, arrivals);
      })
      .catch(error => {
        console.error("Error fetching TFL's dodgy tube data:", error);
      });
  };

  // To trigger the first fetch after instruments 
  useEffect(() => {
    if(!isPlaying) {return;}
    // console.log('used effect')

    if(instruments) { 
      console.log('instruments:', instruments)
      fetchData()  // initial fetch as setInterval only exectues after first interval
      mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
    }
  // eslint-disable-next-line
  }, [instruments])

  const toggleVisualiseEventsOnly = () => {
    setVisualiseEventsOnly(!visualiseEventsOnly);
    setDataVisualiserKey((prevKey) => prevKey + 1);
    console.log(visualiseEventsOnly)
    setTimeout(() => {
      setVisualiseEventsOnly(visualiseEventsOnly);
      setDataVisualiserKey((prevKey) => prevKey + 1);
      console.log(visualiseEventsOnly)
    }, 3000);
  };

  // handleArrivalEffectToggle to toggle the value of arrivalEffectsToggle
  const handleArrivalEffectToggle = () => {
    console.log('arrivalEffectsToggle: '+ arrivalEffectsToggle);
    setArrivalEffectsToggle(current => !current);
    restart();
  };

  useEffect(() => {
    if(!isPlaying) {return;}
    renderCount.current = renderCount.current + 1
    // console.log('renderCount', renderCount.current)
  })

  useEffect(() => {
    if(!isPlaying) {return;}
    (async () => {
      await restart();
    })();

    return () => {};
  // eslint-disable-next-line
  }, [currentInstrument])
  
  const changeCurrentInstrument = (change) => {
    console.log("Change Current Instrument to :" + change);
    setCurrentInstrument(change);
  }

  const handleMuteButtonClick = () => {
    if (muted) {
      Tone.Destination.mute = false;
      console.log('unmuted')
    } else {
      Tone.Destination.mute = true;
      console.log('muted')
    }
    setMuted(() => !muted);
  }

  return (
    <div className="App">
      
      <Routes>
        <Route path='/data' element={<>
          <Navbar stop={stop}/>
          <button id="btn-data" className='btn-data-chart' onClick={toggleVisualiseEventsOnly}> {visualiseEventsOnly ? 'Include second intervals where no events occur' : 'Button will reset in 3 seconds'} </button>
          <DataVisualiser key={dataVisualiserKey} data={visualData} duration={dataBlockDuration} visualiseEventsOnly={visualiseEventsOnly} />
        </>} />
        
        <Route path='/sounds-of-the-underground' element={<>
            {tapInVisible && <img src={logo} id="tap-in" className="App-logo" alt="sound on" onClick={soundOn} style={{ cursor: 'pointer' }}/>}
            {/* <img src={logo} id="tap-in" className="App-logo" alt="sound on" /> */}
            <Navbar stop={stop} setTapInVisible={setTapInVisible}/>
            <div className="container bars-and-map">
              <SideBarLeft setTapInVisible={setTapInVisible} arrivalEffectsToggle={arrivalEffectsToggle} handleArrivalEffectToggle={handleArrivalEffectToggle} currentInstrument={currentInstrument} restart={restart} soundOn={soundOn} isPlaying={isPlaying} instruments={instruments} changeCurrentInstrument={changeCurrentInstrument} muted={muted} handleMuteButtonClick={handleMuteButtonClick}/>
              <TubeMap/>
            </div> 
          </>
        } />
        
        <Route path='/' element={
          <Landing renderCount={renderCount} />
        }/>
      </Routes>
    </div>
  );
}

export default App;


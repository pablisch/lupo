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
import TIMEOUTS from '../../timeouts';
import SideBarLeft from '../SideBarLeft/SideBarLeft';
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
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
  const [arrivalFlareEffectsToggle, setarrivalFlareEffectsToggle] = useState(true);
  const [instruments, setInstruments] = useState(null);
  const [muted, setMuted] = useState(false);
  const [specialServiceToggle, setSpecialServiceToggle] = useState(true);
  const renderCount = useRef(1)
  const [samplers, setSamplers] = useState(null);

  // soundOn => isPlaying to TRUE, fade station names, await audioStartup, setInstruments
  const soundOn = async () => {
    console.log('SOUND ON');
    if (!isPlaying) { 
      console.log('samplers not yet set')
      fadeAllStations();
    }
    setIsPlaying(true); // controls the visibility of the soundon button
    const { awaitedInstruments, samplersObject } = await audioStartup(currentInstrument, samplers);
    console.log("in soundOn, samplersObject:", samplersObject, "instruments:", awaitedInstruments)
    setInstruments(awaitedInstruments);
    setSamplers(samplersObject);
  }

  const start = () => {
    setTimeout(() => {
      soundOn();
    }, 0)
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
        if (sortedData.length > 260) {
          localStorage.setItem('sortedData', JSON.stringify(sortedData));
          console.log(`sortedData.length = ${sortedData.length}, saved to localStorage`)
        } else {
          console.log(`sortedData.length = ${sortedData.length}, NOT saved to localStorage`)
        }
        const processedData = processTubeData(sortedData, dataBlockDuration);
        // console.log('processedData =', processedData);
        setVisualData(processedData);
        // console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalFlareEffectsToggle, arrivals)
      })
      .catch(error => {
        console.error("Error fetching TFL's dodgy tube data:", error);
      });
  };

  const fetchSpecialServiceData = () => {
    axios.get('/sampleData3.json')
      .then(response => {
        const filteredData = response.data;
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        const processedData = processTubeData(sortedData, dataBlockDuration);
        console.log('sortedData =', sortedData)
        console.log('processedData =', processedData)
        console.log('RUNNING SPECIAL SERVICE')
        setVisualData(processedData);
        console.log("fetchdata instruments", instruments)
        triggerAudioVisuals(processedData, instruments, arrivalFlareEffectsToggle, arrivals);
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
      if (specialServiceToggle) {
        fetchSpecialServiceData();
        mainLooper = setInterval(fetchSpecialServiceData, dataBlockDuration * 1000);
      } else {
        fetchData()  // initial fetch as setInterval only exectues after first interval
        mainLooper = setInterval(fetchData, dataBlockDuration * 1000);
      }
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

  // handleArrivalEffectToggle to toggle the value of arrivalFlareEffectsToggle
  const handleArrivalEffectToggle = () => {
    console.log('arrivalFlareEffectsToggle: '+ arrivalFlareEffectsToggle);
    setarrivalFlareEffectsToggle(current => !current);
    restart();
  };
  
  // handleSpecialServiceToggle to toggle the value of specialServiceToggle
  const handleSpecialServiceToggle = () => {
    console.log('specialServiceToggle: '+ specialServiceToggle);
    setSpecialServiceToggle(current => !current);
    restart();
  };

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
            <Navbar stop={stop}/>
            <div className="container bars-and-map">
              <SideBarLeft arrivalFlareEffectsToggle={arrivalFlareEffectsToggle} handleArrivalEffectToggle={handleArrivalEffectToggle} currentInstrument={currentInstrument} restart={restart} soundOn={soundOn} isPlaying={isPlaying} instruments={instruments} changeCurrentInstrument={changeCurrentInstrument} muted={muted} handleMuteButtonClick={handleMuteButtonClick} handleSpecialServiceToggle={handleSpecialServiceToggle} specialServiceToggle={specialServiceToggle} />
              <TubeMap/>
            </div> 
          </>
        } />
        
        <Route path='/' element={
          <Landing renderCount={renderCount} start={start} />
        }/>
      </Routes>
    </div>
  );
}

export default App;


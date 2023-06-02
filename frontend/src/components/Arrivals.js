import React, { useEffect } from 'react';
import './Arrivals.css';
import * as Tone from 'tone';
import assignNoteForVictoriaLine from '../note-assignments/victoria-line'
import assignNoteForJubileeLine from '../note-assignments/jubilee-line'

// below are the combined varibles for transforming timeToStation into sub-second intervals
// ONLY set the BPM. Do NOT change the other variables.
const bpm = 60; 
const noteInterval = 60 / (bpm * 4); // for 1/16th note in seconds
const randomIntervalMultiplier = 1 / noteInterval;

const Arrivals = ({ tubeData }) => {
  
  const soundOn = async () => {
    await Tone.start()
  }

  const victoriaLineSynth = new Tone.Synth().toDestination();
  victoriaLineSynth.volume.value = -12
  const jubileeLineSynth = new Tone.AMSynth().toDestination();
  jubileeLineSynth.volume.value = -12;

  useEffect(() => {
    if (tubeData.length > 0) {
    addIntervals();
    }
  }, [tubeData]);

  const addIntervals = () => {
    const quantisedData = tubeData.map((train) => {
      const randomInterval = (Math.floor(Math.random() * randomIntervalMultiplier))/randomIntervalMultiplier;
      // console.log(randomInterval)
      return {
        ...train,
        timeToStation: train.timeToStation + randomInterval
      };
    });
    console.log(quantisedData);
    // save quantisedData to localStorage
    localStorage.setItem('quantisedData', JSON.stringify(quantisedData, null, 2));
    // return quantisedData;

    let note = '';

    quantisedData.forEach((train) => {
      if (train.lineName === 'Victoria') {
        note = assignNoteForVictoriaLine(train.stationName);
        setTimeout(() => {victoriaLineSynth.triggerAttackRelease(note, '16n')}, train.timeToStation * 1000);
      } else if (train.lineName === 'Jubilee') {
        note = assignNoteForJubileeLine(train.stationName)
        setTimeout(() => {jubileeLineSynth.triggerAttackRelease(note, '16n')}, train.timeToStation * 1000);
      }
    })
  };

  return (
    <div>
      <button id="soundon" onClick={soundOn}>Sound On</button>
    </div>
  );
};

export default Arrivals;


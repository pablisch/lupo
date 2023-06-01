import React, { useState, useEffect, useRef } from 'react';
import './Arrivals.css';
import * as Tone from 'tone';
import * as assignNoteForVictoriaLine from '../note-assignments/victoria-line'
import * as assignNoteForJubileeLine from '../note-assignments/jubilee-line'

const Arrivals = ({ tubeData, durationPassed }) => {
  const [newArrival, setNewArrival] = useState('');
  const durationPassedRef = useRef(durationPassed);
  
  const soundOn = async () => {
    await Tone.start()
  }

  const victoriaLineSynth = new Tone.Synth().toDestination();
  victoriaLineSynth.volume.value = -12
  const jubileeLineSynth = new Tone.AMSynth().toDestination();
  jubileeLineSynth.volume.value = -12;

  useEffect(() => {
    
    const scheduleTrains = () => {
      const trainData = tubeData;
      const arrivingNext = [];
      if (trainData.length > 0) { 
        if (durationPassedRef.current > trainData[0].timeToStation) {
          // setNewArrival(trainData[0].stationName);
          arrivingNext.push(trainData.shift());
          // if a train has been added to arrivingNext...
          while (trainData.length > 0 && !arrivingNext.some(obj => obj.lineName === trainData[0].lineName) && durationPassedRef.current > trainData[0].timeToStation) {
            // setNewArrival(trainData[0].stationName);
            arrivingNext.push(trainData.shift());
          }
        }
      }
      // console.log(arrivingNext);
      durationPassedRef.current += 0.15;
      
      arrivingNext.forEach(train => {
        console.log(`${train.lineName} : ${train.stationName}`)
        setNewArrival(train.stationName);
      });
      console.log('-')

      let note = '';

      arrivingNext.forEach((train) => {
        if (train.lineName === 'Victoria') {
          note = assignNoteForVictoriaLine(train.stationName);
          victoriaLineSynth.triggerAttackRelease(note, '16n')
        } else if (train.lineName === 'Jubilee') {
          note = assignNoteForJubileeLine(train.stationName)
          jubileeLineSynth.triggerAttackRelease(note, '16n');
        }
      })
    };

    // run scheduleTrains every 150ms
    const sixteenthInterval = setInterval(scheduleTrains, 150);

    // Clean up the interval on component unmount
    return () => clearInterval(sixteenthInterval);
  }, [tubeData]);

  return (
    <div>
      <p cy-data='arrival-info'>{tubeData.length > 0 && newArrival}</p>
      <button id="soundon" onClick={soundOn}>Sound On</button>
    </div>
  );
};

export default Arrivals;


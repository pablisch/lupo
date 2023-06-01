import React, { useState, useEffect, useRef } from 'react';
import './Arrivals.css';
import * as Tone from 'tone';

const Arrivals = ({ tubeData, durationPassed }) => {
  const [newArrival, setNewArrival] = useState('');
  const durationPassedRef = useRef(durationPassed);
  
  const soundOn = async () => {
    await Tone.start()
  }

  const victoriaLineSynth = new Tone.Synth().toDestination();

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
          switch(train.stationName) {
            case 'Walthamstow Central Underground Station':
              note = 'C5';
              break;
            case 'Blackhorse Road Underground Station':
              note = 'A5';
              break;
            case 'Tottenham Hale Underground Station':
              note = 'G4';
              break;
            case 'Seven Sisters Underground Station':
              note = 'E4';
              break;
            case 'Finsbury Park Underground Station':
              note = 'D4';
              break;
            case 'Highbury & Islington Underground Station':
              note = 'C4';
              break;
            case "King's Cross St. Pancras Underground Station":
              note = 'A4';
              break;
            case 'Euston Underground Station':
              note = 'G3';
              break;
            case 'Warren Street Underground Station':
              note = 'E3';
              break;
            case 'Oxford Circus Underground Station':
              note = 'D3';
              break;
            case 'Green Park Underground Station':
              note = 'C3';
              break;
            case 'Victoria Underground Station':
              note = 'A3';
              break;
            case 'Pimlico Underground Station':
              note = 'G2';
              break;
            case  'Vauxhall Underground Station':
              note = 'E2';
              break;
            case 'Stockwell Underground Station':
              note = 'D2';
              break;
            case 'Brixton Underground Station':
              note = 'C2';
              break;
            default:
          }
          victoriaLineSynth.triggerAttackRelease(note, '16n')
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

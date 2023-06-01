import React, { useState, useEffect, useRef } from 'react';
import './Arrivals.css';

const Arrivals = ({ tubeData, durationPassed }) => {
  const [newArrival, setNewArrival] = useState('');
  const durationPassedRef = useRef(durationPassed);
  const timeInterval = 125;
  
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
      durationPassedRef.current += (timeInterval / 1000);
      
      arrivingNext.forEach(train => {
        console.log(`${train.lineName} : ${train.stationName}`)
        setNewArrival(train.stationName);
      });
      console.log('-')
    };

    // run scheduleTrains every 150ms
    const sixteenthInterval = setInterval(scheduleTrains, timeInterval);

    // Clean up the interval on component unmount
    return () => clearInterval(sixteenthInterval);
  }, [tubeData]);

  return (
    <div>
      <p cy-data='arrival-info'>{tubeData.length > 0 && newArrival}</p>
    </div>
  );
};

export default Arrivals;

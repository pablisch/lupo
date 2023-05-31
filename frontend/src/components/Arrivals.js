import React, { useState, useEffect, useRef } from 'react';
import './Arrivals.css';

const Arrivals = ({ tubeData, dataBlockDuration, durationPassed }) => {
  const [newArrival, setNewArrival] = useState('');
  const [stationCounter, setStationCounter] = useState(0); // Use useState for stationCounter
  const durationPassedRef = useRef(durationPassed);

  useEffect(() => {
    if (tubeData.length > 0) { // If tubeData is not empty
      tubeData.forEach(item => {
        if (durationPassedRef.current < item.timeToStation) { // If the train has not arrived yet
          setStationCounter(prevCount => prevCount + 1); // Update stationCounter using setStationCounter function
          const timeout = setTimeout(() => { // Set a timeout until the train arrives
            console.log(item.stationName);
            setNewArrival(item.stationName);
            durationPassedRef.current += (item.timeToStation - durationPassedRef.current);
          }, (item.timeToStation - durationPassedRef.current) * 1000);

          return () => clearTimeout(timeout); // Clean up the timeout on component unmount or when the tubeData changes
        } else {
          setStationCounter(prevCount => prevCount + 1); // Update stationCounter using setStationCounter function
        }
      });
    }
  }, [tubeData]);

  return (
    <div>
      <p>{ `Station number ${stationCounter}` }</p>
      <p>{tubeData.length > 0 && newArrival}</p>
      <p>{`${durationPassedRef.current} seconds passed in this data block`}</p>
    </div>
  );
};

export default Arrivals;

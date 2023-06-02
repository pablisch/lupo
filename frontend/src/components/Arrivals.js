import React, { useEffect } from 'react';
import './Arrivals.css';

// below are the combined varibles for transforming timeToStation into sub-second intervals
// ONLY set the BPM. Do NOT change the other variables.
const bpm = 60; 
const noteInterval = 60 / (bpm * 4); // for 1/16th note in seconds
const randomIntervalMultiplier = 1 / noteInterval;

const Arrivals = ({ tubeData }) => {
  
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
    return quantisedData;
  };

  return (
    <div>
    </div>
  );
};

export default Arrivals;

// below are the combined varibles for transforming timeToStation into sub-second intervals
// ONLY set the BPM. Do NOT change the other variables.
const bpm = 60; 
const noteInterval = 60 / (bpm * 4); // for 1/16th note in seconds
const randomIntervalMultiplier = 1 / noteInterval;

function quantiseData (tubeData) {
  if (tubeData.length > 0) {
    const abridgedData = tubeData.map(obj => {
      // Modify properties by removing whitespace, apostrophes, and "Underground Station"
      return {
        id: obj.id,
    stationName: obj.stationName
            .replace(/\s|\.''/g, '')
            .replace(/\./g, '')
            .replace(/'/g, '')
            .replace(/UndergroundStation/g, ''),
    lineName: obj.lineName.replace(/\s/g, '').replace(/'/g, ''),
    timeToStation: obj.timeToStation
      };
    });
    const quantisedData = abridgedData.map((train) => {
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
  }
}

module.exports = quantiseData;
  
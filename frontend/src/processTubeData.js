// below are the combined varibles for transforming timeToStation into sub-second intervals
// ONLY set the BPM. Do NOT change the other variables.
const bpm = 60; 
const noteInterval = 60 / (bpm * 4); // for 1/16th note in seconds
const randomIntervalMultiplier = 1 / noteInterval;

// remove whitespace, apostrophes, and "Underground Station" from stationName and lineName
function abridgeData (tubeData) {
  if (tubeData.length > 0) {
    const abridgedData = tubeData.map(obj => {
      return {
        lineName: obj.lineName.replace(/\s/g, '').replace(/'/g, ''),
        timeToStation: obj.timeToStation,
        stationName: obj.stationName
            .replace(/\s|\.''/g, '')
            .replace(/\./g, '')
            .replace(/'/g, '')
            .replace(/UndergroundStation/g, ''),
      };
    });
    return abridgedData;
  }
}

// quantise timeToStation by adding a random number of 1/16th notes intervals
function quantiseData (abridgedData) {
  if (abridgedData.length > 0) {
    const quantisedData = abridgedData.map((train) => {
      const randomInterval = (Math.floor(Math.random() * randomIntervalMultiplier))/randomIntervalMultiplier;
      return {
        ...train,
        timeToStation: train.timeToStation + randomInterval
      };
    });
    return quantisedData;
  }
}

module.exports = {
  abridgeData,
  quantiseData
};
  
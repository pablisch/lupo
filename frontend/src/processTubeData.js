// below are the combined varibles for transforming timeToStation into sub-second intervals
// ONLY set the BPM. Do NOT change the other variables.
const bpm = 60; 
const noteInterval = 60 / (bpm * 4); // for 1/16th note in seconds
const randomIntervalMultiplier = 1 / noteInterval;
const spreadNewData = true; // if true, spread new data across timeToStation values

// separate the data into an array of objects for each train line
function separateDataIntoLines(tubeData) {
  if (tubeData.length > 0) {
    const separatedData = tubeData.reduce((acc, obj) => { // acc = accumulator
      // the accumulator is an object with keys for each lineName
      const lineName = obj.lineName; 
      if (!acc[lineName]) {
        acc[lineName] = [];
      } 
      acc[lineName].push(obj);
      return acc;
    }, {});
    return separatedData;
  }
}

// declare the spreadData function to iterate through each array in separatedData calling dataWithClumps on each array and return the result
function spreadData(separatedData, dataBlockDuration) {
  if (Object.keys(separatedData).length > 0) {
    const spreadedDataArray = [];
    Object.values(separatedData).forEach((array) => {
      const result = processDataClumps(array, dataBlockDuration);
      spreadedDataArray.push(result);
    });
    const spreadedData = spreadedDataArray.flat();
    return spreadedData;
  } else {
    console.log("No data");
  }
}

// The dataWithClumps function looks at the timeToStation of each object in the array and copies some objects to other timeToStation values where there are more than three objects within a second interval
function processDataClumps(array, dataBlockDuration) {
  if (array.length > 0) {
    const dataWithClumps = array.reduce((acc, obj) => { // separate the data into arrays for each timeToStation
      const timeToStation = obj.timeToStation; 
      if (!acc[timeToStation]) { // if there is no key for this timeToStation, create one and set its value to an empty array
        acc[timeToStation] = [];
      }
      acc[timeToStation].push(obj);
      return acc;
    }, {});
    const dataWithClumpsArray = Object.values(dataWithClumps); // convert the object into an array of arrays

    const lineDataSortedBySeconds = dataWithClumpsArray.flatMap((innerArray) => { // look for arrays with more than three objects
      if (innerArray.length > 2) {
        const clumpedDataForProcessing = innerArray.map((obj) => {
          const midpoint = dataBlockDuration / 2;
          // create a new timeToStation value which:
          // must always be an integer
          // if the original timeToStation is less than the midpoint, is a random number between 0 and the original timeToStation
          // if the original timeToStation is greater than the midpoint, is a random number between the original timeToStation and the dataBlockDuration
          const newTimeToStation = Math.floor(
            obj.timeToStation < midpoint
              ? obj.timeToStation + Math.random() * (dataBlockDuration - obj.timeToStation)
              : Math.random() * obj.timeToStation
          );

          if (spreadNewData) {
            // copy existing data to new time locations
          const newObj = {
            ...obj,
            timeToStation: newTimeToStation
          };
            return [obj, newObj]; // Return an array with both the old object and the new object
          } else {
            // spread existing data to new time locations
            return {
              ...obj,
              timeToStation: newTimeToStation
            };
          }
      });
        return clumpedDataForProcessing;
      } else {
        return innerArray;
      }
    });
    const processedDataClumps = lineDataSortedBySeconds.flat();
    return processedDataClumps;
  }
}

// remove whitespace, apostrophes, and "Underground Station" from stationName and lineName
function abridgeData (tubeData) {
  if (tubeData.length > 0) {
    const abridgedData = tubeData.map(obj => {
      return {
        lineName: obj.lineName.replace(/\s/g, '').replace(/'/g, '').replace(/&/g, ''),
        timeToStation: obj.timeToStation,
        stationName: obj.stationName
            .replace(/\s|\.''/g, '')
            .replace(/\./g, '')
            .replace(/'/g, '')
            .replace(/UndergroundStation/g, '')
            .replace(/&/g, '_')
            .replace(/BatterseaPowerStation/g, 'MorningtonCrescent')
            .replace(/NineElms/g, 'Vauxhall')
            .replace(/Victoria/g, 'VictoriaSt'),
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

function processTubeData(tubeData, dataBlockDuration) {
  // STEP 1: remove unnecessary text, whitespace, and apostrophes.
  const abridgedData = abridgeData(tubeData);
  // STEP 2: separate data into individual lines.
  const separatedData = separateDataIntoLines(abridgedData);
  // STEP 3: process data where all same line events occur simultaneously.
  const spreadedData = spreadData(separatedData, dataBlockDuration);
  // STEP 4: quantise data to noteInterval
  const quantisedData = quantiseData(spreadedData);
  return quantisedData;
}

export default processTubeData;
  

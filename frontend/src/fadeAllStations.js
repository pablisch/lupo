import allStations from './stations';

const fadeAllStations = () => {
  console.log('fade all stations')
  allStations.forEach((line) => {
    line.forEach((station) => {
      document.getElementById(station
        .replace(/ *\([^)]*\) */g, "")
        .replace(/\s|\.''/g, '')
        .replace(/\./g, '')
        .replace(/'/g, '')
        .replace(/UndergroundStation/g, '')
        .replace(/-Underground/g, '')
        .replace(/&/g, '_'),)
      .style.opacity = "0%";
    });
  });
}

export default fadeAllStations;
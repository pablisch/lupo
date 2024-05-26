import allStations from './stations';

const fadeAllStations = () => {
  console.log('fade all stations');
  allStations.forEach((line) => {
    line.forEach((station) => {
      const stationId = station
        .replace(/ *\([^)]*\) */g, "")
        .replace(/\s|\.''/g, '')
        .replace(/\./g, '')
        .replace(/'/g, '')
        .replace(/UndergroundStation/g, '')
        .replace(/-Underground/g, '')
        .replace(/&/g, '_');

      const element = document.getElementById(stationId);
      if (element) {
        element.classList.add('fade-out');
        element.style.opacity = '0%';
      }
    });
  });
}

export default fadeAllStations;
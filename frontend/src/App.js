import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [tubeData, setTubeData] = useState([]);

  const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";

  useEffect(() => {
    axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
      .then(response => {
        const data = response.data;
        const filteredData = data
          .filter(item => item.timeToStation < 60)
          .map(item => ({
            id: item.id,
            stationName: item.stationName,
            lineName: item.lineName,
            timeToStation: item.timeToStation
          }));
        const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
        setTubeData(sortedData);
        // Display tube data
        console.log(sortedData);
        // Save sortedData to localStorage
        // localStorage.setItem('sortedData', JSON.stringify(sortedData));
      })
      .catch(error => {
        console.error('Error fetching tube data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>London Underground</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Nil-harmonic Orchestra</h2>
      </header>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import Arrivals from './components/Arrivals';
import './App.css';

const dataBlockDuration = 30; // seconds

function App() {
  const [tubeData, setTubeData] = useState([]);

  const lines = "bakerloo,central,circle,district,hammersmith-city,jubilee,metropolitan,northern,piccadilly,victoria,waterloo-city";

  useEffect(() => {
    const fetchData = () => {
      axios.get(`https://api.tfl.gov.uk/Line/${lines}/Arrivals?`)
        .then(response => {
          const data = response.data;
          const filteredData = data
            .filter(item => item.timeToStation < dataBlockDuration)
            .map(item => ({
              id: item.id,
              stationName: item.stationName,
              lineName: item.lineName,
              timeToStation: item.timeToStation
            }));
          const sortedData = filteredData.sort((a, b) => a.timeToStation - b.timeToStation);
          setTubeData(sortedData);
          // Save sortedData to localStorage
          // localStorage.setItem('sortedData', JSON.stringify(sortedData));
        })
        .catch(error => {
          console.error('Error fetching tube data:', error);
        });
    };

    // Fetch data on first render
    fetchData();

    // Fetch data every <dataBlockDuration> seconds
    const interval = setInterval(fetchData, (dataBlockDuration * 1000));

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {  // Display tube data whenever it changes
    // console.log(tubeData);
  }, [tubeData]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <Arrivals tubeData={tubeData} />
      </header>
    </div>
  );
}

export default App;

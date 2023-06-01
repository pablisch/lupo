import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import TubeMap from './components/TubeMap/TubeMap.js';

const dataBlockDuration = 5; // seconds

function App() {

  var fade_state = true;
  const fadeElement = (elementId) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (fade_state == true) {
      console.log("Fade out");
      element.style.animation = "fade-out 1s forwards";
      fade_state = false;
    } else if (fade_state == false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      fade_state = true;
    }
  }

  return (
    <div >
      <button type="button" onClick={() => fadeElement("Central")}>Central Fade</button>
      <TubeMap/>
    </div>
  );
}

export default App;

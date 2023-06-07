import React, { useState } from 'react';
import './SideBarLeft.css'


const SideBarLeft = ({restart, fadeAll, soundOn, isPlaying}) => {
  const [fadeBakerlooState, setFadeBakerlooState] = useState(true);
  const [fadeCentralState, setFadeCentralState] = useState(true);
  const [fadeCircleState, setFadeCircleState] = useState(true);
  const [fadeDistrictState, setFadeDistrictState] = useState(true);
  const [fadeHammersmithCityState, setFadeHammersmithCityState] = useState(true);
  const [fadeJubileeState, setFadeJubileeState] = useState(true);
  const [fadeMetropolitanState, setFadeMetropolitanState] = useState(true);
  const [fadeNorthernState, setFadeNorthernState] = useState(true);
  const [fadePiccadillyState, setFadePiccadillyState] = useState(true);
  const [fadeVictoriaState, setFadeVictoriaState] = useState(true);
  const [fadeWaterlooCityState, setFadeWaterlooCityState] = useState(true);
  console.log(soundOn)

  const fadeLine = (elementId, state, setState) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (state === true) {
      console.log("Fade out");
      element.style.animation = "fade-out 1s forwards";
      setState(false);
    } else if (state === false) {
      console.log("Fade In");
      element.style.animation = "fade-in 1s forwards";
      setState(true);
    }
  }

  return (
    <aside className="sidebar sidebar-left">
      <h2>Left Sidebar</h2>
      <button id="soundon" onClick={soundOn} disabled={isPlaying}>{isPlaying ? 'LUSO Live' : "SOUND ON"}</button>
      <button className='btn-temp-left' onClick={fadeAll}>Fade All</button>
      <button className='btn-temp-left' onClick={restart}>Restart</button>
      <button className='btn-line btn-bakerloo' type="button" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)}>Bakerloo</button>
      <button className='btn-line btn-central' type="button" onClick={() => fadeLine("Central", fadeCentralState, setFadeCentralState)}>Central</button>
      <button className='btn-line btn-circle' type="button" onClick={() => fadeLine("Circle", fadeCircleState, setFadeCircleState)}>Circle</button>
      <button className='btn-line btn-district' type="button" onClick={() => fadeLine("District", fadeDistrictState, setFadeDistrictState)}>District</button>
      <button className='btn-line btn-hammersmith-city' type="button" onClick={() => fadeLine("HammersmithCity", fadeHammersmithCityState, setFadeHammersmithCityState)}>Hammersmith & City</button>
      <button className='btn-line btn-jubilee' type="button" onClick={() => fadeLine("Jubilee", fadeJubileeState, setFadeJubileeState)}>Jubilee</button>
      <button className='btn-line btn-metropolitan' type="button" onClick={() => fadeLine("Metropolitan", fadeMetropolitanState, setFadeMetropolitanState)}>Metropolitan</button>
      <button className='btn-line btn-northern' type="button" onClick={() => fadeLine("Northern", fadeNorthernState, setFadeNorthernState)}>Northern</button>
      <button className='btn-line btn-piccadilly' type="button" onClick={() => fadeLine("Piccadilly", fadePiccadillyState, setFadePiccadillyState)}>Piccadilly</button>
      <button className='btn-line btn-victoria' type="button" onClick={() => fadeLine("Victoria", fadeVictoriaState, setFadeVictoriaState)}>Victoria</button>
      <button className='btn-line btn-waterloo-city' type="button" onClick={() => fadeLine("WaterlooCity", fadeWaterlooCityState, setFadeWaterlooCityState)}>Waterloo & City</button>
    </aside>
  );
}
export default SideBarLeft;
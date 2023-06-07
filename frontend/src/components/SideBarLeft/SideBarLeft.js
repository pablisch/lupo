import React, { useState, useContext } from 'react';
import { InstrumentContext } from '../InstrumentProvider/InstrumentProvider';

import './SideBarLeft.css'
import lineNames from '../../lineNames';
import Slider from '../Slider/Slider';


const SideBarLeft = ({restart, soundOn, isPlaying, instruments, changeCurrentInstrument}) => {
  const {setCurrentInstrument} = useContext(InstrumentContext)

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

  const [bakerlooControlToggle, setBakerlooControlToggle] = useState(false);
  const [centralControlToggle, setCentralControlToggle] = useState(false);
  const [circleControlToggle, setCircleControlToggle] = useState(false);
  const [districtControlToggle, setDistrictControlToggle] = useState(false);
  const [hammersmithCityControlToggle, setHammersmithCityControlToggle] = useState(false);
  const [jubileeControlToggle, setJubileeControlToggle] = useState(false);
  const [metropolitanControlToggle, setMetropolitanControlToggle] = useState(false);
  const [northernControlToggle, setNorthernControlToggle] = useState(false);
  const [piccadillyControlToggle, setPiccadillyControlToggle] = useState(false);
  const [victoriaControlToggle, setVictoriaControlToggle] = useState(false);
  const [waterlooCityControlToggle, setWaterlooCityControlToggle] = useState(false);

  const fadeLine = (elementId, state, setState) => {
    const element = document.getElementById(elementId);
    console.log(element.id);
    if (state === true) {
      element.style.animation = "fade-out 1s forwards";
      setState(false);
    } else if (state === false) {
      element.style.animation = "fade-in 1s forwards";
      setState(true);
    }
  }

  // handleLineControlToggle takes a line name as an argument and toggles the state of the corresponding line state, e.g. bakerlooControlToggle
  const handleLineControlToggle = (lineName) => {
    switch (lineName) {
      case "Bakerloo":
        setBakerlooControlToggle(!bakerlooControlToggle);
        console.log('Bakerloo toggle', bakerlooControlToggle);
        break;
      default:
        break;
    }
  }

  return (
    <aside className="sidebar sidebar-left">
      <h2>Line Status</h2>
      <button id="soundon" onClick={() => soundOn()} disabled={isPlaying}>{isPlaying ? 'Good Service' : "Suspended"}</button>
      { lineNames.map((line, index) => {
        return <Slider lineName={line} instruments={instruments} key={index} />
      }) }
      <button id="marimba" onClick={() => changeCurrentInstrument("marimba")}>Marimba</button>
      <button id="strings" onClick={() => changeCurrentInstrument("strings")}>Strings</button>
      {/* <button className='btn-line btn-bakerloo' type="button" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)}>Bakerloo</button> */}
      <button className='btn-line btn-bakerloo' type="button" onClick={() => handleLineControlToggle("Bakerloo")}>Bakerloo</button>
      {bakerlooControlToggle && <><div className="mute">
        <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} />
        {/* <button className='btn-mute btn-mute-bakerloo' type="button" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)}>Mute</button> */}
        <Slider lineName="Bakerloo" instruments={instruments} key="Bakerloo" />
        
      </div>
      <div className="underline-bakerloo"></div></>}
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
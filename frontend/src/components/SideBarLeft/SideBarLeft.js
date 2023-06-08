import React, { useState, useContext } from 'react';
import { InstrumentContext } from '../InstrumentProvider/InstrumentProvider';

import './SideBarLeft.css'
import lineNames from '../../lineNames';
import Slider from '../Slider/Slider';


const SideBarLeft = ({restart, soundOn, isPlaying, instruments, changeOpacity, changeCurrentInstrument}) => {
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
      case "Central":
        setCentralControlToggle(!centralControlToggle);
        console.log('Central toggle', centralControlToggle);
        break;
      case "Circle":
        setCircleControlToggle(!circleControlToggle);
        console.log('Circle toggle', circleControlToggle);
        break;
      case "District":
        setDistrictControlToggle(!districtControlToggle);
        console.log('Circle toggle', districtControlToggle);
        break;
      case "HammersmithCity":
        setHammersmithCityControlToggle(!hammersmithCityControlToggle);
        console.log('HammersmithCity toggle', hammersmithCityControlToggle);
        break;
      case "Jubilee":
        setJubileeControlToggle(!jubileeControlToggle);
        console.log('Jubilee toggle', hammersmithCityControlToggle);
        break;
      case "Metropolitan":
        setMetropolitanControlToggle(!metropolitanControlToggle);
        console.log('metropolitan toggle', metropolitanControlToggle);
        break;
      case "Northern":
        setNorthernControlToggle(!northernControlToggle);
        console.log('Northern toggle', northernControlToggle);
        break;
      case "Piccadilly":
        setPiccadillyControlToggle(!piccadillyControlToggle);
        console.log('Piccadilly toggle', piccadillyControlToggle);
        break;
      case "Victoria":
        setVictoriaControlToggle(!victoriaControlToggle);
        console.log('Victoria toggle', victoriaControlToggle);
        break;
      case "WaterlooCity":
        setWaterlooCityControlToggle(!waterlooCityControlToggle);
        console.log('WaterlooCity toggle', waterlooCityControlToggle);
        break;
      default:
        break;
    }
  }
  return (
    <aside className="sidebar sidebar-left">
      <h2>Line Status</h2>
      <button id="soundon" onClick={() => soundOn()} disabled={isPlaying}>{isPlaying ? 'Good Service' : "Suspended"}</button>
      {/* { lineNames.map((line, index) => {
                    return <Slider 
                    lineName={line} 
                    instruments={instruments} 
                    changeOpacity={changeOpacity}
                    key={index} />
                  }) } */}
      <button id="marimba" onClick={() => changeCurrentInstrument("marimba")}>Marimba</button>
      <button id="strings" onClick={() => changeCurrentInstrument("strings")}>Strings</button>
      <button className='btn-line btn-bakerloo' type="button" onClick={() => handleLineControlToggle("Bakerloo")}>Bakerloo</button>
      {bakerlooControlToggle && <>
      <div className={`mute ${bakerlooControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Bakerloo" instruments={instruments} changeOpacity={changeOpacity} key="Bakerloo" />
      </div>
      </>}

      <button className='btn-line btn-central' type="button" onClick={() => handleLineControlToggle("Central")}>Central</button>
      {centralControlToggle && <>
      <div className={`mute ${centralControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Central" instruments={instruments} changeOpacity={changeOpacity} key="Central" />
      </div>
      </>}

      <button className='btn-line btn-circle' type="button" onClick={() => handleLineControlToggle("Circle")}>Circle</button>
      {circleControlToggle && <>
      <div className={`mute ${circleControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Circle" instruments={instruments} changeOpacity={changeOpacity} key="Circle" />
      </div>
      </>}

      <button className='btn-line btn-district' type="button" onClick={() => handleLineControlToggle("District")}>District</button>
      {districtControlToggle && <>
      <div className={`mute ${districtControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="District" instruments={instruments} changeOpacity={changeOpacity} key="District" />
      </div>
      </>}

      <button className='btn-line btn-hammersmith-city' type="button" onClick={() => handleLineControlToggle("HammersmithCity")}>Hammersmith & City</button>
      {hammersmithCityControlToggle && <>
      <div className={`mute ${hammersmithCityControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="HammersmithCity" instruments={instruments} changeOpacity={changeOpacity} key="HammersmithCity" />
      </div>
      </>}

      <button className='btn-line btn-jubilee' type="button" onClick={() => handleLineControlToggle("Jubilee")}>Jubilee</button>
      {jubileeControlToggle && <>
      <div className={`mute ${jubileeControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Jubilee" instruments={instruments} changeOpacity={changeOpacity} key="Jubilee" />
      </div>
      </>}
      
      <button className='btn-line btn-metropolitan' type="button" onClick={() => handleLineControlToggle("Metropolitan")}>Metropolitan</button>
      {metropolitanControlToggle && <>
      <div className={`mute ${metropolitanControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Metropolitan" instruments={instruments} changeOpacity={changeOpacity} key="Metropolitan" />
      </div>
      </>}

      <button className='btn-line btn-northern' type="button" onClick={() => handleLineControlToggle("Northern")}>Northern</button>
      {northernControlToggle && <>
      <div className={`mute ${northernControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Northern" instruments={instruments} changeOpacity={changeOpacity} key="Northern" />
      </div>
      </>}
      
      <button className='btn-line btn-piccadilly' type="button" onClick={() => handleLineControlToggle("Piccadilly")}>Piccadilly</button>
      {piccadillyControlToggle && <>
      <div className={`mute ${piccadillyControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Piccadilly" instruments={instruments} changeOpacity={changeOpacity} key="Piccadilly" />
      </div>
      </>}
      
      <button className='btn-line btn-victoria' type="button" onClick={() => handleLineControlToggle("Victoria")}>Victoria</button>
      {victoriaControlToggle && <>
      <div className={`mute ${victoriaControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="Victoria" instruments={instruments} changeOpacity={changeOpacity} key="Victoria" />
      </div>
      </>}

      <button className='btn-line btn-waterloo-city' type="button" onClick={() => handleLineControlToggle("WaterlooCity")}>WaterlooCity</button>
      {waterlooCityControlToggle && <>
      <div className={`mute ${waterlooCityControlToggle ? 'open' : ''}`}>
        {/* <img className='mute-icon' src="./mute.png" alt="mute" onClick={() => fadeLine("Bakerloo", fadeBakerlooState, setFadeBakerlooState)} /> */}
        <Slider lineName="WaterlooCity" instruments={instruments} changeOpacity={changeOpacity} key="WaterlooCity" />
      </div>
      </>}
    </aside>
  );
}
export default SideBarLeft;
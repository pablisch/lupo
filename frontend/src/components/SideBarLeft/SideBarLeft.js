import React, { useEffect, useState } from 'react';
import './SideBarLeft.css'
import Slider from '../Slider/Slider';


const SideBarLeft = ({ stop, setTapInVisible ,arrivalEffectsToggle, handleArrivalEffectToggle,currentInstrument, soundOn, isPlaying, instruments, changeCurrentInstrument, muted, handleMuteButtonClick}) => {

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

  const bakerlooMaxVolumeScaledUp = instruments ? instruments["Bakerloo"].maxVolume + 100 : 94
  const [bakerlooSliderValue, setBakerlooSliderValue] = useState(bakerlooMaxVolumeScaledUp)

  const centralMaxVolumeScaledUp = instruments ? instruments["Central"].maxVolume + 100 : 94
  const [centralSliderValue, setCentralSliderValue] = useState(centralMaxVolumeScaledUp)

  const circleMaxVolumeScaledUp = instruments ? instruments["Circle"].maxVolume + 100 : 94
  const [circleSliderValue, setCircleSliderValue] = useState(circleMaxVolumeScaledUp)

  const districtMaxVolumeScaledUp = instruments ? instruments["District"].maxVolume + 100 : 94
  const [districtSliderValue, setDistrictSliderValue] = useState(districtMaxVolumeScaledUp)

  const hammersmithCityMaxVolumeScaledUp = instruments ? instruments["HammersmithCity"].maxVolume + 100 : 94
  const [hammersmithCitySliderValue, setHammersmithCitySliderValue] = useState(hammersmithCityMaxVolumeScaledUp)

  const jubileeMaxVolumeScaledUp = instruments ? instruments["Jubilee"].maxVolume + 100 : 94
  const [jubileeSliderValue, setJubileeSliderValue] = useState(jubileeMaxVolumeScaledUp)

  const metropolitanMaxVolumeScaledUp = instruments ? instruments["Metropolitan"].maxVolume + 100 : 94
  const [metropolitanSliderValue, setMetropolitanSliderValue] = useState(metropolitanMaxVolumeScaledUp)

  const northernMaxVolumeScaledUp = instruments ? instruments["Northern"].maxVolume + 100 : 94
  const [northernSliderValue, setNorthernSliderValue] = useState(northernMaxVolumeScaledUp)

  const piccadillyMaxVolumeScaledUp = instruments ? instruments["Piccadilly"].maxVolume + 100 : 94
  const [piccadillySliderValue, setPiccadillySliderValue] = useState(piccadillyMaxVolumeScaledUp)

  const victoriaMaxVolumeScaledUp = instruments ? instruments["Victoria"].maxVolume + 100 : 94
  const [victoriaSliderValue, setVictoriaSliderValue] = useState(victoriaMaxVolumeScaledUp)

  const waterlooCityMaxVolumeScaledUp = instruments ? instruments["WaterlooCity"].maxVolume + 100 : 94
  const [waterlooCitySliderValue, setWaterlooCitySliderValue] = useState(waterlooCityMaxVolumeScaledUp)

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
        console.log('District toggle', districtControlToggle);
        break;
      case "HammersmithCity":
        setHammersmithCityControlToggle(!hammersmithCityControlToggle);
        console.log('HammersmithCity toggle', hammersmithCityControlToggle);
        break;
      case "Jubilee":
        setJubileeControlToggle(!jubileeControlToggle);
        console.log('Jubilee toggle', jubileeControlToggle);
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
      <button id="soundon" onClick={() => soundOn()} disabled={isPlaying}>{isPlaying ? 'Good Service' : "Suspended"}</button><br />
      <button className={`instrumentButton arrival-effects ${arrivalEffectsToggle ? 'greenButton' : 'redButton'}`} onClick={() => handleArrivalEffectToggle()}>
        {arrivalEffectsToggle ? 'Turn Flares OFF' : 'Turn Flares ON'}
      </button>

      {/* <button className="instrumentButton" onClick={() => {stop(); setTapInVisible(true);}}>STOP</button><br /><br /> */}
      <button className={`instrumentButton ${muted ? 'redButton' : 'greenButton'}`} id="mute" onClick={() => handleMuteButtonClick()}> {muted ? 'Unmute' : 'Mute'} </button>

      <button className="instrumentButton" id="tubeDrums" onClick={() => changeCurrentInstrument("tubeDrums")} disabled={currentInstrument === "tubeDrums"}>Tube Drums</button><br />
      <button className="instrumentButton" id="strings" onClick={() => changeCurrentInstrument("strings")} disabled={currentInstrument === "strings"}>Strings</button><br />
      <button className="instrumentButton" id="marimba" onClick={() => changeCurrentInstrument("marimba")} disabled={currentInstrument === "marimba"}>Marimba</button><br />
      <button className="instrumentButton" id="orchestra" onClick={() => changeCurrentInstrument("orchestra")} disabled={currentInstrument === "orchestra"}>Orchestra</button><br />
      <button className='btn-line btn-bakerloo' type="button" onClick={() => handleLineControlToggle("Bakerloo")}>Bakerloo</button>
      {bakerlooControlToggle && <>
      <div className={`mute ${bakerlooControlToggle ? 'open' : ''}`}>
        <Slider lineName="Bakerloo" instruments={instruments} key="Bakerloo" 
          maxVolumeScaledUp={bakerlooMaxVolumeScaledUp} sliderValue={bakerlooSliderValue} setSliderValue={setBakerlooSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-central' type="button" onClick={() => handleLineControlToggle("Central")}>Central</button>
      {centralControlToggle && <>
      <div className={`mute ${centralControlToggle ? 'open' : ''}`}>
        <Slider lineName="Central" instruments={instruments} key="Central" 
          maxVolumeScaledUp={centralMaxVolumeScaledUp} sliderValue={centralSliderValue} setSliderValue={setCentralSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-circle' type="button" onClick={() => handleLineControlToggle("Circle")}>Circle</button>
      {circleControlToggle && <>
      <div className={`mute ${circleControlToggle ? 'open' : ''}`}>
        <Slider lineName="Circle" instruments={instruments} key="Circle" 
          maxVolumeScaledUp={circleMaxVolumeScaledUp} sliderValue={circleSliderValue} setSliderValue={setCircleSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-district' type="button" onClick={() => handleLineControlToggle("District")}>District</button>
      {districtControlToggle && <>
      <div className={`mute ${districtControlToggle ? 'open' : ''}`}>
        <Slider lineName="District" instruments={instruments} key="District" 
          maxVolumeScaledUp={districtMaxVolumeScaledUp} sliderValue={districtSliderValue} setSliderValue={setDistrictSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-hammersmith-city' type="button" onClick={() => handleLineControlToggle("HammersmithCity")}>Hammersmith & City</button>
      {hammersmithCityControlToggle && <>
      <div className={`mute ${hammersmithCityControlToggle ? 'open' : ''}`}>
        <Slider lineName="HammersmithCity" instruments={instruments} key="HammersmithCity" 
          maxVolumeScaledUp={hammersmithCityMaxVolumeScaledUp} sliderValue={hammersmithCitySliderValue} setSliderValue={setHammersmithCitySliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-jubilee' type="button" onClick={() => handleLineControlToggle("Jubilee")}>Jubilee</button>
      {jubileeControlToggle && <>
      <div className={`mute ${jubileeControlToggle ? 'open' : ''}`}>
        <Slider lineName="Jubilee" instruments={instruments} key="Jubilee" 
          maxVolumeScaledUp={jubileeMaxVolumeScaledUp} sliderValue={jubileeSliderValue} setSliderValue={setJubileeSliderValue}/>
      </div>
      </>}
      
      <button className='btn-line btn-metropolitan' type="button" onClick={() => handleLineControlToggle("Metropolitan")}>Metropolitan</button>
      {metropolitanControlToggle && <>
      <div className={`mute ${metropolitanControlToggle ? 'open' : ''}`}>
        <Slider lineName="Metropolitan" instruments={instruments} key="Metropolitan" 
          maxVolumeScaledUp={metropolitanMaxVolumeScaledUp} sliderValue={metropolitanSliderValue} setSliderValue={setMetropolitanSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-northern' type="button" onClick={() => handleLineControlToggle("Northern")}>Northern</button>
      {northernControlToggle && <>
      <div className={`mute ${northernControlToggle ? 'open' : ''}`}>
        <Slider lineName="Northern" instruments={instruments} key="Northern" 
          maxVolumeScaledUp={northernMaxVolumeScaledUp} sliderValue={northernSliderValue} setSliderValue={setNorthernSliderValue}/>
      </div>
      </>}
      
      <button className='btn-line btn-piccadilly' type="button" onClick={() => handleLineControlToggle("Piccadilly")}>Piccadilly</button>
      {piccadillyControlToggle && <>
      <div className={`mute ${piccadillyControlToggle ? 'open' : ''}`}>
        <Slider lineName="Piccadilly" instruments={instruments} key="Piccadilly" 
          maxVolumeScaledUp={piccadillyMaxVolumeScaledUp} sliderValue={piccadillySliderValue} setSliderValue={setPiccadillySliderValue}/>
      </div>
      </>}
      
      <button className='btn-line btn-victoria' type="button" onClick={() => handleLineControlToggle("Victoria")}>Victoria</button>
      {victoriaControlToggle && <>
      <div className={`mute ${victoriaControlToggle ? 'open' : ''}`}>
        <Slider lineName="Victoria" instruments={instruments} key="Victoria" 
          maxVolumeScaledUp={victoriaMaxVolumeScaledUp} sliderValue={victoriaSliderValue} setSliderValue={setVictoriaSliderValue}/>
      </div>
      </>}

      <button className='btn-line btn-waterloo-city' type="button" onClick={() => handleLineControlToggle("WaterlooCity")}>Waterloo & City</button>
      {waterlooCityControlToggle && <>
      <div className={`mute ${waterlooCityControlToggle ? 'open' : ''}`}>
        <Slider lineName="WaterlooCity" instruments={instruments} key="WaterlooCity" 
         maxVolumeScaledUp={waterlooCityMaxVolumeScaledUp} sliderValue={waterlooCitySliderValue} setSliderValue={setWaterlooCitySliderValue}/>
      </div>
      </>}
    </aside>
  );
}
export default SideBarLeft;
import './Slider.css';
import { useState } from 'react';

const Slider = ({ instruments, lineName, changeOpacity }) => {

  // console.log('instruments in Slider', instruments)
  // console.log(`lineName inside of handleSliderChage: ${lineName}`)
  // if(instruments) { console.log(`max volume is ${instruments[lineName].maxVolume}`) }

  const handleSliderChange = (event) => {
    // console.log(`slider value: ${event.target.value}`)
    // console.log('instrument inside of handleSliderChange', instruments[lineName])
    // console.log(`maxVolumeScaledUp is ${maxVolumeScaledUp}`)
    let negativeValue = (event.target.value - 100);
    instruments[lineName].volume.value = negativeValue;
    setSliderValue(event.target.value)

    let newOpacity = (event.target.value/100)+0.15
    if (newOpacity > 1) {
      newOpacity = 1;
    }
    changeOpacity(lineName, newOpacity);
  }

  const handleButtonClick = () => {
    if(sliderValue > 0){
      // fadeElement(lineName, true, setState);
      instruments[lineName].volume.value = -100;
      setSliderValue(0);
      changeOpacity(lineName, 0.15);

    } else {
      // fadeElement(lineName, false, setState);
      instruments[lineName].volume.value = -6;
      setSliderValue(maxVolumeScaledUp);
      changeOpacity(lineName, 1);
    }
  };

  // on first render of the component, instruments is undefined as SoundOn has not yet been called
  const maxVolumeScaledUp = instruments ? instruments[lineName].maxVolume + 100 : 94

  const [sliderValue, setSliderValue] = useState(maxVolumeScaledUp)

  return (
    <div>
      <input 
      type="range" 
      min="0" 
      max={maxVolumeScaledUp}  
      value={sliderValue} 
      className="slider" 
      onChange={handleSliderChange}>
      </input>
      <button id='button' className={lineName} onClick={handleButtonClick}>
      {lineName === 'HammersmithCity' ? 'Hammersmith & City' : lineName === 'WaterlooCity' ? 'Waterloo & City' : lineName}
      </button>
    </div>
  )
}

export default Slider;

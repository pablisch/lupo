import './Slider.css';
import { useState } from 'react';

const Slider = ({ instruments, lineName }) => {

  // console.log('instruments in Slider', instruments)
  // console.log(`lineName inside of handleSliderChage: ${lineName}`)
  // if(instruments) { console.log(`max volume is ${instruments[lineName].maxVolume}`) }

  const handleSliderChange = (event) => {
    console.log(`slider value: ${event.target.value}`)
    console.log('instrument inside of handleSliderChange', instruments[lineName])
    // console.log(`maxVolumeScaledUp is ${maxVolumeScaledUp}`)
    let negativeValue = (event.target.value - 100);
    instruments[lineName].volume.value = negativeValue;
    setSliderValue(event.target.value)
  }

  // on first render of the component, instruments is undefined as SoundOn has not yet been called
  const maxVolumeScaledUp = instruments ? instruments[lineName].maxVolume + 100 : 94

  const [sliderValue, setSliderValue] = useState(maxVolumeScaledUp)
  
  return (
    <div>
      <input type="range" min="0" max={maxVolumeScaledUp}  value={sliderValue} className="slider" onChange={handleSliderChange}></input>
    </div>
  )
}

export default Slider;

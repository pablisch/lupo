import './Slider.css';

const Slider = ({ instruments, lineName }) => {

  console.log('instruments in Slider', instruments)
  console.log(`lineName inside of handleSliderChage: ${lineName}`)

  const handleSliderChange = (event) => {
    console.log(`slider value: ${event.target.value}`)
    console.log('instrument inside of handleSliderChange', instruments[lineName])
    let negativeValue = (event.target.value - 100);
    instruments[lineName].volume.value = negativeValue;
  }
  
  return (
    <div>
      <input type="range" min="0" max="94" value="94" className="slider" onChange={handleSliderChange}></input>
      {/* <input type="range" min="0" max={instruments[lineName].maxVolume + 100} value="1" className="slider" onChange={handleSliderChange}></input> */}
    </div>
  )
}

Slider.defaultProps = {
  maxVolume: -6, 
}

export default Slider;

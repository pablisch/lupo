import './Slider.css';

const Slider = ({ instruments, lineName, maxVolumeScaledUp, sliderValue, setLineSliderValues}) => {

  const changeOpacity = (elementId, opacity) => {
    const element = document.getElementById(elementId);
    element.style.opacity = opacity;
  }

  const handleSliderChange = (event) => {
    let negativeValue = (event.target.value - 100);
    instruments[lineName].volume.value = negativeValue;
    setLineSliderValues((prevState) => {
      return {
        ...prevState,
        [lineName]: event.target.value // square brackets are used to evaluate the variable lineName
      }
    })

    let newOpacity = (event.target.value/100)+0.15
    if (newOpacity > 1) {
      newOpacity = 1;
    }
    changeOpacity(lineName, newOpacity);
  }

  const handleButtonClick = () => {
    if(sliderValue > 0){
      instruments[lineName].volume.value = -100;
      setLineSliderValues((prevState) => {
        return {
          ...prevState,
          [lineName]: 0 // set the slider value for this line to 0
        }})
      changeOpacity(lineName, 0.15);

    } else {
      instruments[lineName].volume.value = -6;
      setLineSliderValues((prevState) => {
        return {
          ...prevState,
          [lineName]: maxVolumeScaledUp
        }})
      changeOpacity(lineName, 1);
    }
  };

  return (
    <div className="dropdownContainer">
      <img className='mute-icon' src={sliderValue===0 ? "./mute.png" : "./unmute.png"} alt="mute" onClick={handleButtonClick} />
      <input 
      type="range" 
      min="0" 
      max={maxVolumeScaledUp}  
      value={sliderValue} 
      className={`slider ${lineName}`}
      onChange={handleSliderChange}>
      </input>
      
    </div>
  )
}

export default Slider;

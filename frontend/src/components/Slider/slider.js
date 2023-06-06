import React from 'react'

const slider = ({ lineName }) => {
  
  return (
    <div>
      <input type="range" min="0" max="1" value="1" className="slider"></input>
    </div>
  )
}

export default slider;

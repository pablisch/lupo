import React from 'react';
import { arrivalEffectTransform, arrivalEffectCreate } from '../../arrivalEffects';
import './SideBarRight.css'


// TEST points for viusal effects including fade and arrival effects
// const arrivalPoint = "g250238"; // Holborn station (whole station)
const arrivalPointInner = "Holbornx"; // white centre of Holborn
const marbleArch = "MarbleArchx"; // white centre of Holborn
// const arrivalPointInner = "path250234"; // white centre of Holborn
const burntOak = "rect247013"; // Burnt Oak station
const hendonCentral = "g249286"; // Hendon Central station

const SideBarRight = ({arrivals, arrivalEffects, handleArrivalEffectToggle}) => {
  return (
    <aside className="sidebar sidebar-right">
      <h2>Right Sidebar</h2> 
      <button className='btn-temp-right' type="button" onClick={() => arrivalEffectTransform(`${arrivalPointInner}`)}>{`Transform at ${arrivalPointInner}`}</button>
      <button className='btn-temp-right' type="button" onClick={() => arrivalEffectCreate(`${arrivalPointInner}`)}>{`Holborn`}</button>
      <button className='btn-temp-right' type="button" onClick={() => arrivalEffectCreate(`${burntOak}`)}>{`Burnt Oak`}</button>
      <button className='btn-temp-right' type="button" onClick={() => arrivalEffectCreate(`${hendonCentral}`)}>{`Hendon`}</button>
      <button className='btn-temp-right' type="button" onClick={() => arrivalEffectCreate(`${marbleArch}`)}>{`Marble Arch`}</button>
      <button className='btn-temp-right btn-arrival-effects' type="button" onClick={() => handleArrivalEffectToggle()}>{arrivalEffects ? 'Turn Arrival Effects ON' : 'Turn Arrival Effects OFF'}</button>
      {/* render each element of the arrivals array in a paragraph element */}
      {arrivals.length > 0 && arrivals.flat().map((arrival, index) => {
        console.log('arrival', arrival);
        return <div className="arrival-item"><p key={index}>{arrival}</p></div> 
      })}
      
    </aside>
  );
}
export default SideBarRight;
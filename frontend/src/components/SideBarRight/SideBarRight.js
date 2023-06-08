import './SideBarRight.css'



const SideBarRight = ({arrivals, arrivalEffectsToggle, handleArrivalEffectToggle, stop, setTapInVisible}) => {

  return (
    <aside className="sidebar sidebar-right">
      <h2>Effects button</h2> 
      <button className='btn-temp-right btn-arrival-effects' type="button" onClick={() => handleArrivalEffectToggle()}>{arrivalEffectsToggle ? 'Turn Arrival Effects OFF' : 'Turn Arrival Effects ON'}</button>
      <button className='btn-temp-right btn-arrival-effects' type="button" onClick={() => {stop(); setTapInVisible(true);}}>STOP</button>
      {/* render each element of the arrivals array in a paragraph element */}
      {/* {arrivals.length > 0 && arrivals.flat().map((arrival, index) => {
        // console.log('arrival', arrival);
        return <div className="arrival-item"><p key={index}>{arrival}</p></div> 
      })} */}
      
    </aside>
  );
}
export default SideBarRight;
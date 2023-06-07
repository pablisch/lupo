import React from 'react';
import logo from '../../logo.svg';
import { Link } from "react-router-dom";

const Landing = ({renderCount, soundOn}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>{`This Page has rendered ${renderCount.current} times`}</p>
        <Link to="/sounds-of-the-underground">
          <button id="soundon" >Click to listen to the music</button>
        </Link>
        
      </header>
    </div>
  );
}
export default Landing;



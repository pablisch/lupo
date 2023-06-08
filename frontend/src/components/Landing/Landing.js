// import React from 'react';
// import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = ({renderCount, soundOn}) => {
  return (
    <div className="App">
      <div className="app-nav">
        <h2>LONDON UNDERGROUND ORCHESTRA</h2>
      </div>
      <div className="blue-break"></div>
      <header className="App-header">
        <div className="landing-page">
          {/* <p>{`This Page has rendered ${renderCount.current} times`}</p> */}
          <Link to="/sounds-of-the-underground">
            <img src="./underground-to-trains2.png" className="App-logo" alt="logo"/>
            {/* <button id="soundon" >Click to listen to the music</button> */}
          </Link>
        </div>
      </header>
      <div className="blue-break"></div>
      <section className='blurb'>
        <div className="landing-page">
          <p className='top-text'>Click on the logo above to enter the London Underground music map.</p>
          <p>The London Underground Orchestra is powered by the TFL Unified API which provides a stream of dubious data about train arrivals throughout the entire
            London tube, train, bus and river bus network.</p>
          <p className='bottom-text'>In this app, each tube train arrival triggers a audio/visual event.</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;



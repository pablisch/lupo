import React from 'react';
import logo from '../../logo.svg';

const Landing = ({renderCount}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>LUSO</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <p>{`This Page has rendered ${renderCount.current} times`}</p>
      </header>
    </div>
  );
}
export default Landing;
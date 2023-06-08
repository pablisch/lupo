import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = ({stop, setTapInVisible}) => {
  const navigateAway = () => {
    stop();
    setTapInVisible(true);
  }
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./Underground.png" alt="" className="luso-logo" />
          <h2>LONDON UNDERGROUND ORCHESTRA</h2>
          <img src="./Underground.png" alt="" className="luso-logo" />
        </div>
        <div className="nav-links">
          {/data/.test(window.location.href) && <Link to="/sounds-of-the-underground">Map</Link>}
          {/sounds/.test(window.location.href) && <Link to="/data">Data</Link>}
          <Link to="/" onClick={navigateAway}>Exit</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

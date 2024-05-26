import './Navbar.css'
import { Link } from "react-router-dom";
import fadeAllStations from '../../fadeAllStations';

const Navbar = ({stop}) => {
  const navigateAway = () => {
    stop();
  }

  const fadeStationsWhenReturningToMap = () => {
    setTimeout(() => {
      fadeAllStations();
    }, 0);
  }

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./underground2.png" alt="" className="luso-logo" />
          <h2 id="long-title">LONDON UNDERGROUND PHONY ORCHESTRA</h2>
          <h2 id="short-title">LUPO</h2>
          <img src="./underground2.png" alt="" className="luso-logo second-logo" />
        </div>
        <div className="nav-links">
          {/data/.test(window.location.href) && <div onClick={fadeStationsWhenReturningToMap} className="map-link link-btn"><Link to="/sounds-of-the-underground">Map</Link></div>}
          {/sounds/.test(window.location.href) && <div className="data-link link-btn"><Link to="/data">Data</Link></div>}
          <div className="exit-link link-btn">
            <Link to="/" onClick={navigateAway}>Exit
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

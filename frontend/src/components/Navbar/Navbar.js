import './Navbar.css'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-logo">
          <img src="./Underground.png" alt="" className="luso-logo" />
          <h2>LUSO</h2>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/data">Data</Link>
          <Link to="/landing">Logo</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/space-logo2.png';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <li className="logo-left">
          <img src={logo} alt="Space Travellers logo" />
          <h2>Space Travellers Hub</h2>
        </li>
        <li className="navlink-right">
          <Link to="/">Rockets</Link>
        </li>
        <li className="navlink-right">
          <Link to="Missions">Missions</Link>
        </li>
        <li className="vertical-line" />
        <li className="navlink-right">
          <Link to="MyProfile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;

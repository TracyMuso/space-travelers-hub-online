import { Routes, Route, Link } from 'react-router-dom';
import Rockets from '../Rockets/Rockets';
import Missions from '../Missions/Missions';
import MyProfile from '../MyProfile/MyProfile';
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
    <Routes>
      <Route path="/" element={<Rockets />} />
      <Route path="Missions" element={<Missions />} />
      <Route path="MyProfile" element={<MyProfile />} />
    </Routes>
  </>
);

export default Navbar;

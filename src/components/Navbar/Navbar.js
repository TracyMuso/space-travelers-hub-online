import { NavLink } from 'react-router-dom';
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
          <NavLink to="Rockets" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Rockets</NavLink>
        </li>
        <li className="navlink-right">
          <NavLink to="Missions" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>Missions</NavLink>
        </li>
        <li className="vertical-line" />
        <li className="navlink-right">
          <NavLink to="MyProfile" className={({ isActive }) => (isActive ? 'link-active' : 'link')}>My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </>
);

export default Navbar;

import Navbar from 'react-bootstrap/Navbar';
import logoTwo from '../assets/space-logo2.png';

const Header = () => (
  <header>
    <img src={logoTwo} alt="logo" className="logo" />
    <Navbar bg="light" variant="light" />
  </header>
);

export default Header;

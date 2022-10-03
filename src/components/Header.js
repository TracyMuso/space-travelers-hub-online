import Navbar from 'react-bootstrap/Navbar';
import logoTwo from './assets/space-logo2.png';

const Header = () => (
  <header>
    <div className="logo-container">
      <img src={logoTwo} alt="logo" className="logo" />
      <h2 className="logo-text">Space Travelers&apos; Hub</h2>
    </div>
    <Navbar bg="light" variant="light" />
  </header>
);

export default Header;

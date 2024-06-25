import React from 'react';
import './Navbar.css';
import './Ripple.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import nurenailogo from '../../assets/nurenailogo.jpeg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [showRipple, setShowRipple] = React.useState(false);

  const handleButtonClick = () => {
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 500); // Duration of the ripple animation
  };

  return (
    <nav className="navbar">
      {showRipple && <div className="ripple-animation"></div>}
      <div className="navbar-brand">
        <img height="55px" width="55px" src={nurenailogo} alt="NUREN AI logo" />
        <h1>NUREN AI</h1>
      </div>
      <div className="navbar-links">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">Home</Link>
        <Link activeClass="active" to="features" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">Features</Link>
        <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">Solutions</Link>
        <Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">About Us</Link>
        <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">Pricing</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link">Contact</Link>
      </div>
      <div className="navbar-actions">
        <NavLink to="/Org">
          <Button
            variant="contained"
            color="primary"
            className="navbar-button"
            style={{ marginRight: '30px', backgroundColor: '#6D31ED', borderRadius: '2rem' }}
            onClick={handleButtonClick}
          >
            Sign Up
          </Button>
        </NavLink>
      </div>
      <div className="navbar-toggle">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';
import './Ripple.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import nurenailogo from '../../assets/nurenailogo.jpeg';
import { NavLink } from 'react-router-dom';
import { trackEvent } from '../../Ga';

const Navbar = () => {
  const [showRipple, setShowRipple] = React.useState(false);

  const handleButtonClick = () => {
    setShowRipple(true);
    setTimeout(() => setShowRipple(false), 500); // Duration of the ripple animation
    trackEvent('Button', 'Sign Up button clicked'); // Track button click event
  };

  const handleLinkClick = (section) => {
    trackEvent('Navbar Link', `${section} link clicked`);
  };

  const handleLogoClick = () => {
    trackEvent('Logo', 'Logo clicked');
  };

  return (
    <nav className="navbar">
      {showRipple && <div className="ripple-animation"></div>}
      <div className="navbar-brand" onClick={handleLogoClick}>
        <img height="55px" width="55px" src={nurenailogo} alt="NUREN AI logo" />
        <h1>NUREN AI</h1>
      </div>
      <div className="navbar-links">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('Home')}>Home</Link>
        <Link activeClass="active" to="features" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('Features')}>Features</Link>
        <Link activeClass="active" to="solutions" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('Solutions')}>Solutions</Link>
        <Link activeClass="active" to="about-us" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('About Us')}>About Us</Link>
        <Link activeClass="active" to="pricing" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('Pricing')}>Pricing</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="navbar-link" onClick={() => handleLinkClick('Contact')}>Contact</Link>
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

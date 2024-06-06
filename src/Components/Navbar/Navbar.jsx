import React from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import nurenailogo from '../../assets/nurenailogo.jpeg'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img height='55px' width="55px" src={nurenailogo} alt="" />
      </div>
      <div className="navbar-links">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="features"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Features
        </Link>
        <Link
          activeClass="active"
          to="solutions"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Solutions
        </Link>
        <Link
          activeClass="active"
          to="about-us"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="pricing"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Pricing
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-link"
        >
          Contact
        </Link>
      </div>
      <div className="navbar-actions">
        {/* <Button
          variant="contained"
          color="primary"
          className="navbar-button"
          style={{ marginRight: '30px', backgroundColor: '#6D31ED', borderRadius: '2rem' }}
        >
          Sign Up
        </Button> */}
      </div>
      <div className="navbar-toggle">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default Navbar;

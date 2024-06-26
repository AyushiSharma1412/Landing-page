// src/components/Navbar2.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar2.css';
import logo from '../../assets/nurenailogo.png'; // Adjust the path as needed

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar2">
      {/* <button className="back-button" onClick={() => navigate(-1)}>
        &lt; 
      </button> */}
      <div className="nav-logo-container">
        <img src={logo} alt="Logo" className="nav-logo" />
        <span className="nav-logo-title">Nuren AI</span>
      </div>
    </div>
  );
};

export default Navbar2;

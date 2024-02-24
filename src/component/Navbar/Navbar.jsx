import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Logo</div>
        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#resume">Resume</a>
          <a href="#certificates">Certificates</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

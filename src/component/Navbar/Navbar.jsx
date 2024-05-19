import React, { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import LogoImg from '../../assets/logo-no-background.png';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src= {LogoImg}/>
        </div>
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div
          className={`navbar-links ${showNavbar ? "show" : ""}`}
          onClick={toggleNavbar}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          {/* <a href="#resume">Resume</a> */}
          <a href="#certificate">Certificate</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

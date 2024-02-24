import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <div className="home-title">HEY, I'M SHAURYA</div>
        <div className="home-description">
          Experienced full-stack developer adept at crafting intricate Low-Level
          Design (LLD) and High-Level Design (HLD) systems, dedicated to
          architecting robust solutions that push the boundaries of innovation.
        </div>
        <div className="home-tech-stack">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
          <a href="https://redux.js.org" target="_blank" rel="noreferrer">
            {" "}
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
              alt="redux"
              width="40"
              height="40"
            />{" "}
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;

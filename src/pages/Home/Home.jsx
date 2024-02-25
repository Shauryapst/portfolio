import React, {useEffect} from "react";
import "./Home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="home-container" data-aos="fade-left" >
      <div className="home-wrapper">
        <div className="home-title">HEY, I'M SHAURYA</div>
        <div className="home-description">
          Experienced full-stack developer adept at crafting intricate Low-Level
          Design (LLD) and High-Level Design (HLD) systems, dedicated to
          architecting robust solutions that push the boundaries of innovation.
        </div>
        
      </div>
    </div>
  );
};

export default Home;

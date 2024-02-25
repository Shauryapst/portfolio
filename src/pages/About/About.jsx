import React from "react";
import "./About.css";
import s1 from "../../assets/gifs/s1.gif";
import s2 from "../../assets/gifs/s2.gif";
import Icons from "../../component/Tech-Icons/Icons";
const About = () => {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-introduction">
          <div className="about-gif">
            <img src={s1} alt="adsfa" />
          </div>
          <div className="about-content">
            Hey there! I'm a{" "}
            <span class="animated-word">full stack developer</span> who loves
            creating cool stuff with code. I graduated from{" "}
            <span class="animated-word">IIT MANDI</span>, where I learned all
            about computers and coding. On the backend, I work with{" "}
            <span class="animated-word">
              Node.js, Express.js, Java, and Spring Boot
            </span>
            , while on the frontend, I'm all about{" "}
            <span class="animated-word">React.js and Next.js</span>. I enjoy
            building websites and apps that are easy to use and look great. I'm
            always up for a challenge and love learning new things to make my
            projects even better. Let's create something awesome together!
          </div>
        </div>
        <div className="about-icons">
            <Icons/>
        </div>
      </div>
    </div>
  );
};

export default About;

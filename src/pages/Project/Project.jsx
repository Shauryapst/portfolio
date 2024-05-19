import React from "react";
import "./Project.css";
import ProjectCard from "../../component/ProjectCard/ProjectCard";
import ChatterImg from "../../assets/projects/chatter.png";
import FakeStoreImg from '../../assets/projects/fake store ui.gif';
import SnowRunnerImg from '../../assets/projects/snowrunner.png';
import { Carousel } from 'react-responsive-carousel';
const Project = () => {
  const projectList = [
    {
    
      name: "Chatter",
      tech: ["NodeJs", "SocketIO"],
      github: "https://github.com/Shauryapst/videochat",
      live: null,
      imageUrl: ChatterImg  || "https://i.pinimg.com/originals/0e/76/a3/0e76a3bdb9a5f816879b8275dfd7238b.gif",
      description:
        "Designed a Discord-like app with the Redux + MERN stack, leveraging Redis cache alongside WebRTC and Socket.IO for optimized performance in video calling and messaging, supporting up to 4 simultaneous users on video call.",
    },
    {
      name: "Fake Store",
      tech: ["ReactJs", "Redux"],
      github: "https://github.com/Shauryapst/shopping",
      live: "https://shopping-gray-five.vercel.app/",
      imageUrl:FakeStoreImg  ||  "https://i.pinimg.com/originals/0e/76/a3/0e76a3bdb9a5f816879b8275dfd7238b.gif",
      description:
        "An online shopping platform available at Fake Store App. This application, built using React.js and Redux, integrates real-time product data from a simulated store website to provide a seamless and interactive shopping experience. By utilizing Redux for state management.",
    },
    {
      name: "Netflix Clone",
      tech: ["ReactJs"],
      github: null,
      live: null,
      imageUrl: "https://i.pinimg.com/originals/0e/76/a3/0e76a3bdb9a5f816879b8275dfd7238b.gif",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget diam quis tellus dictum lobortis a sit amet dui. Sed lacus mi, convallis nec laoreet et, pellentesque a augue. Sed pulvinar ante sed gravida condimentum. Praesent fringilla velit eget aliquet vehicula. Etiam lacus ex, volutpat quis accumsan et, pharetra vel nisi. Ut hendrerit nunc in maximus egestas. Morbi in augue tellus. Morbi varius viverra lectus ac maximus.",
    },
    {
      name: "Snow Runner",
      tech: ["C#", "Unity"],
      github: "https://github.com/Shauryapst/Snow_runner",
      live: null,
      imageUrl: SnowRunnerImg || "https://i.pinimg.com/originals/0e/76/a3/0e76a3bdb9a5f816879b8275dfd7238b.gif",
      description:
        "Santa Fun Run, an endless 2D runner game built in Unity using C#. In this festive game, players guide Santa through dynamically spawning obstacles by right-clicking to jump. The game features high-quality sprites from gameart2d.com, an endlessly scrolling background, and smooth animations. Score tracking keeps players engaged by counting the number of obstacles successfully jumped. When Santa hits an obstacle, a charming dead animation plays, ending the game. Santa Fun Run offers a visually appealing and engaging holiday gaming experience.",
    },
  ];
  return (
    <div className="project-container">
      <div className="project-wrapper">
        <div className="project-grid-container">
          
          {projectList.map((pj) => {
            return (
              <ProjectCard
                name={pj.name}
                description={pj.description}
                tech={pj.tech}
                github={pj.github}
                live={pj.live}
                imageUrl={pj.imageUrl}
                
              />
            );
          })}
          {/* {projectList.map((pj) => {
            return <div className="project-grid-item">{pj.name}</div>;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default Project;

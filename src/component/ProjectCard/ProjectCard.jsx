import React from "react";
import "./ProjectCard.css";
const ProjectCard = (props) => {
  const handleClick = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };
  return (
    <div className="product-card-wrapper">
      <div className="product-card-img">
        <img src={props.imageUrl} alt="demo" />
      </div>
      <div className="product-card-content">
        <div className="product-card-title">{props.name}</div>
        <div className="product-card-description">{props.description}</div>
        <div className="product-card-actions">
          <button
            className={`product-card-github ${!props.github ? "disabled" : ""}`}
            onClick={props.github ? (e) => handleClick(e, props.github) : null}
            disabled={props.github ? false : true}
          >
            GitHub Repo
          </button>
          <button
            className={`product-card-live ${!props.live ? "disabled" : ""}`}
            onClick={props.live ? (e) => handleClick(e, props.live) : null}
            disabled={props.live ? false: true}
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

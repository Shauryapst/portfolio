import React from 'react';
import './ProjectCard.css';
const ProjectCard = (props) => {
    const handleClick = (event, url) =>{
        // window.location.href = url;
    }
  return (
    <div className="product-card-wrapper">
        <div className="product-card-img">
            <img src={props.imageUrl} alt="demo"/>
        </div>
        <div className='product-card-content'>
            <div className="product-card-title">
                {props.name}
            </div>
            <div className='product-card-description'>
                {props.description}
            </div>
            <div className='product-card-actions'>
                <button className="product-card-github" onClick={handleClick(props.github)}>
                    GitHub Repo
                </button>
                <button className="product-card-live" onClick={handleClick(props.live)}>
                    Live Demo
                </button>

            </div>
        </div>
    </div>
  )
}

export default ProjectCard
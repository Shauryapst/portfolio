import React from 'react';
import './Icons.css';

const Icons = () => {
  const icons = [
    { category: 'Framework/Library', name: 'React', url: 'https://reactjs.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' },
    { category: 'Framework/Library', name: 'Next.js', url: 'https://nextjs.org/', icon: 'https://img.icons8.com/?size=64&id=AU6Wc7r56Fxz&format=png' }, 
    { category: 'Framework/Library',name: 'Redux', url: 'https://redux.js.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' }, 
    { category: 'Framework/Library',name: 'Spring', url: 'https://spring.io/', icon: 'https://www.vectorlogo.zone/logos/springio/springio-icon.svg' },
    // { category: 'Framework/Library',name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot', icon: 'fab fa-spring' },
    { category: 'Framework/Library',name: 'Node.js', url: 'https://nodejs.org/', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' },
    { category: 'Framework/Library',name: 'Express.js', url: 'https://expressjs.com/', icon: 'https://img.icons8.com/?size=64&id=2ZOaTclOqD4q&format=png' }, 
];

  return (
    <div>

      <div className="icon-container">
        {icons.map((icon, index) => (
          <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer">
            <img
                    className="icon"
                  src={icon.icon}
                  alt={icon.name}
                  width="60"
                  height="60"
                />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Icons;
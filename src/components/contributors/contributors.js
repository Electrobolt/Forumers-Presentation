import React from 'react';
import './contributors.css';

const Contributors = () => {
  const contributorsData = [
    {
      name: "Maxime CHEMI",
      role: "Team Leader & Backend Developer",
      image: "/Maxime.jpg",
      description: "Specialized in building the backend system for the Forumers API.",
      description2: "#",
      description3: "#",
      linkedin: "#",
      github: "https://github.com/Arhychem"
    },
    {
      name: "Pharell EDO",
      role: "Second & Frontend Developer",
      image: "/Nicolas.jpg",
      description: "Focused on creating intuitive user interfaces for the Forumers default platform.",
      description2: "#",
      description3: "#",
      linkedin: "#",
      github: "https://github.com/Electrobolt"
    },
    {
      name: "Nelda KWABOU",
      role: "Documentation Provider",
      image: "/Nelda2.jpg",
      description: "Focused on User experience and documentation",
      description2: "#",
      description3: "#",
      linkedin: "#",
      github: "#"
    },
    {
      name: "Ulrich TAKOU",
      role: "",
      image: "/users.png",
      description: "Melvis TEUGUEM",
      description2: "Hilaire NKODO",
      description3: "Jovani OSSOMBE",
      linkedin: "#",
      github: "#"
    }
  ];

  return (
    <div className="contributors-page">
      <div className="contributors-header">
        <h1 className="section-title">
          Meet Our <span className="title-highlight">Contributors</span>
        </h1>
        <p className="section-subtitle">
          The talented team behind the Forumers API, dedicated to building a seamless forum management experience.
        </p>
      </div>
      
      <div className="contributors-grid">
        {contributorsData.map((contributor, index) => (
          <div key={index} className="contributor-card">
            <div className="contributor-image-container">
              <img 
                src={contributor.image} 
                alt={contributor.name} 
                className="contributor-image"
              />
            </div>
            <div className="contributor-info">
              <h3 className="contributor-name">{contributor.name}</h3>
              <p className="contributor-role">{contributor.role}</p>
              <p className="contributor-description">{contributor.description}</p>
                {contributor.description2 !== "#" && (
                  <p className="contributor-description">{contributor.description2}</p>
                )}
                {contributor.description3 !== "#" && (
                  <p className="contributor-description">{contributor.description3}</p>
                )}
              <div className="contributor-socials">
                {contributor.linkedin !== "#" && (
                  <a href={contributor.linkedin} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                )}
                {contributor.github !== "#" && (
                  <a href={contributor.github} className="social-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contributors;
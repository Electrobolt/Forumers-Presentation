import React from 'react';
import { LuGoal } from "react-icons/lu";
import { IoTelescope, IoRocket } from "react-icons/io5";
import './about.css';

const About = () => {
  const aboutSections = [
    {
      title: "Our Mission",
      icon: LuGoal,
      paragraphs: [
        "Forumers is dedicated to empowering developers with tools to build and manage thriving communities.",
        "Our mission is to simplify forum management and foster meaningful interactions.",
      ],
    },
    {
      title: "Our Vision",
      icon: IoTelescope,
      paragraphs: [
        "We envision a world where communities are seamlessly integrated into applications, fostering collaboration and engagement.",
        "Forumers aims to be the go-to solution for forum management.",
      ],
    },
    {
      title: "Our Strengths",
      icon: IoRocket,
      paragraphs: [
        "Customizable categories and user interactions.",
        "Scalable and reliable API.",
        "Dedicated support for developers.",
      ],
    },
  ];

  return (
    <div className="about-section">
      <div className="about-header">
        <h2 className="section-title">
          About <span className="title-highlight">Forumers</span>
        </h2>
        <p className="section-subtitle">
          Empowering Communicaties, One Post at a Time
        </p>
      </div>
      
      <div className="about-grid">
        {aboutSections.map((section, index) => (
          <div key={index} className="about-card">
            <div className="about-icon-container"><section.icon size={'50px'}/></div>
            <div className="about-content">
              <h3 className="about-title">{section.title}</h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="about-paragraph">{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
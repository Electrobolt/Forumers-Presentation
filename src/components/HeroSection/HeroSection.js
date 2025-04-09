import React from "react";
import { FaBook, FaUsers, FaComments, FaQuestionCircle, FaShareAlt } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { Showcase } from './Showcase'
import "./HeroSection.css";

const HeroSection = () => {
  const openDocumentation = () => {
    window.open('https://forumers-documentation.vercel.app', '_blank');
  };
  const StartDocumentation = () => {
    window.open('https://forumers-documentation.vercel.app/docs/welcome/get-started', '_blank');
  };
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-logo-title">
            <img src="/Forumers-512.png" alt="Forumers Logo" className="hero-logo" />
            <h1 className="title">
              <span className="title-highlight">Forumers</span> <br />
              <span className="title-slogan">Your forum, your way!</span>
            </h1>
          </div>
          <p className="subtitle">
            Seamlessly integrate forum functionalities into your application. Build, manage, and engage communities with ease.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={StartDocumentation}>
              <IoRocket className="btn-icon" />
              Get Started
            </button>
            <button className="btn btn-secondary" onClick={openDocumentation}>
              <FaBook className="btn-icon" />
              Learn More
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">+500</span>
              <span className="stat-label">Communities Created</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Uptime</span>
            </div>
          </div>
        </div>
        <Showcase />
      </div>
    </section>
  );
};

export default HeroSection;
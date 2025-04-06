import React from "react";
import { FaGithub, FaBook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div style={{display:'flex', justifyContent:'space-between'}}>
          <div>
            <div className="footer-brand">
              <h2 className="footer-logo">
                <img src="/Forumers-128.png" alt="Forumers Logo" className="footer-logo-img" style={{ height: '80px' }} /> &nbsp; &nbsp;
                <span className="logo-main">Forumers</span>
              </h2>
              <p className="footer-description">
                Build and manage thriving communities with Forumers API.
              </p>
              <div className="social-links">
                <a href='https://github.com/Electrobolt/Forumers-Presentation' className="social-icon" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://forumers-documentation.vercel.app" className="social-icon" title="Documentation">
                  <FaBook />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-column">
              <h3>Devs</h3>
              <a href="https://forumers-documentation.vercel.app/docs/welcome/get-started">Getting Started</a>
              <a href="https://forumers-documentation.vercel.app">API Docs</a>
              <a href="#">Exemples</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright ©{new Date().getFullYear()} Forumers, Inc. ENSPY GI2025</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
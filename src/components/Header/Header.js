import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFeaturesScroll = (e) => {
    e.preventDefault();
    const featuresSection = document.querySelector('.features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSignIn = () => {
    navigate('/signin');
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo">
            <img src="/Forumers-128.png" alt="Forumers Logo" className="footer-logo-img" style={{height:'50px'}}/> &nbsp;
            <span className="logo-main">Forumers</span>
          </h1>
        </div>
        
        <nav className={`navigation ${isMenuOpen ? 'menu-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={toggleMenu}>Welcome</Link></li>
            <li><a href="#features" onClick={(e) => { handleFeaturesScroll(e); toggleMenu(); }}>Features</a></li>
          </ul>
        </nav>
        
        <div className="auth-buttons">
          <button className="btn btn-signup" onClick={handleSignUp}> Sign Up </button>
          <button className="btn btn-login" onClick={handleSignIn}> Log In </button>
        </div>
        <div className="mobile-menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

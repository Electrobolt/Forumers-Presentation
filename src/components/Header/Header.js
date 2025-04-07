import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
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
            <li><Link to="/contributors" onClick={toggleMenu}>Contributors</Link></li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button className="btn-h btn-signup" onClick={handleSignUp}>
            <FaUserPlus className="auth-icon" /> <span className="auth-text">Sign Up</span>
          </button>
          <button className="btn-h btn-login" onClick={handleSignIn}>
            <FaSignInAlt className="auth-icon" /> <span className="auth-text">Log In</span>
          </button>

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

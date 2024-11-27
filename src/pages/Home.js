// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="home">
      <div className="home-banner">
        <h1>Welcome to BuildCorp</h1>
        <p>Your Trusted Partner in Construction</p>
        <button className="cta-button" onClick={handleExploreClick}>
          Explore Our Work
        </button>
      </div>
    </div>
  );
};

export default Home;

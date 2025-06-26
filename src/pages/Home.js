// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col text-center">
          <h1 className="display-3 fw-bold mb-3">Welcome to BuildCorp</h1>
          <p className="lead mb-4">Your Trusted Partner in Construction</p>
          <button className="btn btn-primary btn-lg px-5" onClick={handleExploreClick}>
            Explore Our Work
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

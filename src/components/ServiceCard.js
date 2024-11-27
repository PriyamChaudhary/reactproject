// src/components/ServiceCard.js
import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="service-btn">Learn More</button>
    </div>
  );
};

export default ServiceCard;

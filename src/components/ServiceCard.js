// src/components/ServiceCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="card h-100 shadow-sm text-center">
      <div className="card-body">
        <div className="mb-3" style={{ fontSize: '2rem' }}>{icon}</div>
        <h3 className="card-title mb-2">{title}</h3>
        <p className="card-text mb-3">{description}</p>
        <button className="btn btn-outline-primary">Learn More</button>
      </div>
    </div>
  );
};

export default ServiceCard;

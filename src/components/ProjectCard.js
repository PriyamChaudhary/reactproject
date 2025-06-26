// src/components/ProjectCard.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ name, description, image }) => (
  <div className="card h-100 shadow-sm">
    <img src={image} alt={name} className="card-img-top" />
    <div className="card-body">
      <h3 className="card-title">{name}</h3>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default ProjectCard;

// src/components/ProjectCard.js
import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ name, description, image }) => (
  <div className="project-card">
    <img src={image} alt={name} className="project-image" />
    <h3>{name}</h3>
    <p>{description}</p>
  </div>
);

export default ProjectCard;

// src/pages/Projects.js
import React from 'react';
import ProjectCard from '../components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const Projects = () => {
  const projects = [
    {
      name: 'Residential Building A',
      description: 'Completed in 2021, this 15-story residential building features modern apartments with state-of-the-art interiors, eco-friendly design, and spacious living areas. Equipped with rooftop gardens, energy-efficient windows, and communal spaces.',
      image: '/images/project-a.jpg'
    },
    {
      name: 'Office Complex B',
      description: 'A commercial project completed in 2022, this high-rise office complex includes over 20 floors with dedicated coworking spaces, conference rooms, and a large cafeteria. Designed for optimal natural lighting, sustainable materials, and with cutting-edge security systems.',
      image: '/images/project-b.jpg'
    },
    {
      name: 'Urban Park Renovation C',
      description: 'A community-driven urban renovation completed in 2023, transforming an underutilized space into a vibrant park with walking trails, green landscaping, public seating, and art installations. It’s a showcase of sustainable landscaping and modern urban design.',
      image: '/images/project-c.jpg'
    }
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Our Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div className="col-md-4 d-flex" key={index}>
            <ProjectCard
              name={project.name}
              description={project.description}
              image={project.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

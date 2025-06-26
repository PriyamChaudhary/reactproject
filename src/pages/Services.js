import React from 'react';
import { Home, Building, PenToolIcon as Tool, Paintbrush, ClipboardList, TreesIcon as Tree, Phone } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceCard = ({ icon: Icon, title, description, details }) => (
  <div className="card h-100 shadow-sm text-center">
    <div className="card-body">
      <div className="mb-3" style={{ fontSize: '2rem' }}><Icon /></div>
      <h3 className="card-title mb-2">{title}</h3>
      <p className="card-text mb-3">{description}</p>
      <ul className="list-unstyled mb-3">
        {details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      <button className="btn btn-outline-primary">Learn More</button>
    </div>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Residential Construction',
      description: 'High-quality homes built to last.',
      details: [
        'Custom home design and build',
        'Energy-efficient construction',
        'Smart home integration',
        'Sustainable materials usage'
      ]
    },
    {
      icon: Building,
      title: 'Commercial Construction',
      description: 'Professional structures for businesses.',
      details: [
        'Office buildings and complexes',
        'Retail spaces and shopping centers',
        'Industrial facilities',
        'Green building certifications'
      ]
    },
    {
      icon: Tool,
      title: 'Renovation',
      description: 'Giving new life to old spaces.',
      details: [
        'Kitchen and bathroom remodeling',
        'Home additions and extensions',
        'Historical building restoration',
        'Accessibility modifications'
      ]
    },
    {
      icon: Paintbrush,
      title: 'Interior Design',
      description: 'Creative solutions for beautiful interiors.',
      details: [
        'Space planning and layout optimization',
        'Color scheme and material selection',
        'Custom furniture design',
        '3D visualization and rendering'
      ]
    },
    {
      icon: ClipboardList,
      title: 'Project Management',
      description: 'Efficiently overseeing construction projects.',
      details: [
        'Budget planning and cost control',
        'Schedule management and optimization',
        'Quality assurance and inspections',
        'Subcontractor coordination'
      ]
    },
    {
      icon: Tree,
      title: 'Landscaping',
      description: 'Designing and maintaining outdoor spaces.',
      details: [
        'Landscape design and planning',
        'Hardscape installation (patios, walkways)',
        'Water feature design and installation',
        'Sustainable and native plant selection'
      ]
    }
  ];

  return (
    <div className="services-page">
      <section className="py-5 bg-light text-center mb-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">Our Premium Services</h1>
          <p className="lead mb-0">Explore the top-notch services we provide to bring your vision to life.</p>
        </div>
      </section>

      <section className="mb-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div className="col-md-4 d-flex" key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  details={service.details}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white text-center">
        <div className="container">
          <h2 className="mb-3">Ready to Start Your Project?</h2>
          <p className="mb-4">Our team of experts is here to help you bring your vision to life.</p>
          <a href="/contact" className="btn btn-light btn-lg">
            <Phone className="me-2" />
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
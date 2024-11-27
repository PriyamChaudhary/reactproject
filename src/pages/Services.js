import React from 'react';
import { Home, Building, PenToolIcon as Tool, Paintbrush, ClipboardList, TreesIcon as Tree, Phone } from 'lucide-react';
import './Services.css';

const ServiceCard = ({ icon: Icon, title, description, details }) => (
  <div className="service-card">
    <Icon className="service-icon" />
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <ul className="service-details">
      {details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
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
      <section className="services-hero">
        <div className="container">
          <h1 className="services-title">Our Premium Services</h1>
          <p className="services-subtitle">Explore the top-notch services we provide to bring your vision to life.</p>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              details={service.details}
            />
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Our team of experts is here to help you bring your vision to life.</p>
          <a href="/contact" className="cta-button">
            <Phone className="icon" />
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
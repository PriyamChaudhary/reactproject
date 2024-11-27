// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserButton } from '@clerk/clerk-react';

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">BuildCorp</div>
    <div className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/services" className="nav-link">Services</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <UserButton></UserButton>
    </div>
  </nav>
);

export default Navbar;

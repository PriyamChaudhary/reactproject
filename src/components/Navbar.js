// src/components/Navbar.js
import { Link } from 'react-router-dom';
import './Navbar.css';
import { UserButton } from '@clerk/clerk-react';
import { FaHardHat } from 'react-icons/fa';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg custom-navbar animate-navbar">
    <div className="container">
      <Link className="navbar-brand d-flex align-items-center animate-brand" to="/">
        <FaHardHat className="me-2 brand-icon" />
        BuildCorp
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link animate-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link animate-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link animate-link" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link animate-link" to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link animate-link" to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="d-flex align-items-center">
          <UserButton />
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;

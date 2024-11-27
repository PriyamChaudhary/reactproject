import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/contact', {
        name,
        email,
        message,
      });

      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send the message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Feel free to reach out with any questions or project inquiries.</p>
      </div>
      <div className="contact-info">
        <div className="info-item">
          <FaPhone className="contact-icon" />
          <span>+1 123 456 7890</span>
        </div>
        <div className="info-item">
          <FaEnvelope className="contact-icon" />
          <span>info@construction-site.com</span>
        </div>
        <div className="info-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>1234 Building, Mumbai, MH 414110</span>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Your Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>
        <label>
          Email Address
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>
        <label>
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows="5"
            required
          ></textarea>
        </label>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default Contact;

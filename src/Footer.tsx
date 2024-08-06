import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';

const Footer: React.FC = () => {
  const handleScrollToUp = (event: React.MouseEvent) => {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>We are a team of passionate individuals dedicated to bringing you the best culinary experiences.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" className='link'>Home</Link></li>
            <li><a href="#" onClick={handleScrollToUp}>Destination</a></li>
            <li><Link to="/" className='link'>Blog</Link></li>
            <li><Link to="/" className='link'>Attractions</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: Your email</p>
          <p>Phone: Your Phone number</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-media">
            <a href="#" className="social-icon">Linkedin</a>
            <a href="#" className="social-icon">Whatsapp</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Facebook</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Culinary Site. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

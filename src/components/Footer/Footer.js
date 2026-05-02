import React from 'react';
import './Footer.css';
import { FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Muhammad Farooq</h3>
            <p>Software Engineer | Backend Developer</p>
            <p>Lahore, Pakistan</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="mailto:alifarroq745@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
                <FaEnvelope />
              </a>
              <a href="tel:+923104139825" title="Phone">
                <FaPhone />
              </a>
              <a href="https://github.com/muhammadFarooq001" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Muhammad Farooq. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;

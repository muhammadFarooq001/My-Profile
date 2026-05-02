import React from 'react';
import './Hero.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm Muhammad Farooq
            </h1>
            <p className="hero-subtitle">
              Software Engineering Student | Backend Developer | AI & ML Enthusiast
            </p>
            <p className="hero-description">
              Building robust web applications with modern technologies. Passionate about solving
              complex problems and creating efficient Web Applications.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>
            <div className="social-links">
              <a href="https://github.com/muhammadFarooq001" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="mailto:alifarroq745@gmail.com" className="social-icon">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

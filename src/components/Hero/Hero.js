import React from 'react';
import './Hero.css';
import { FaGithub, FaEnvelope } from 'react-icons/fa';
import myPhoto from './myphoto.png';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          {/* Left Side: Text */}
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Muhammad Farooq</h1>

            <p className="hero-subtitle">
              Software Engineering Student | Backend Developer | AI & ML Enthusiast
            </p>

            <p className="hero-description">
              Building robust web applications with modern technologies. Passionate about solving
              complex problems and creating efficient web applications.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
              <a href="#projects" className="btn btn-secondary">View My Work</a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/muhammadFarooq001"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:alifarroq745@gmail.com"
                className="social-icon"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="hero-image">
            <img src={myPhoto} alt="Muhammad Farooq" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
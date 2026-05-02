import React from 'react';
import './About.css';
import { FaCode, FaDatabase, FaRocket } from 'react-icons/fa';

function About() {
  return (
    <section id="about" className="about light-bg">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a Software Engineering undergraduate at PUCIT with a strong foundation in backend 
              development and a passion for crafting elegant solutions to complex problems.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaCode />
                </div>
                <h3>Backend Development</h3>
                <p>Building scalable web applications with Django OR ASP.NET Core</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaDatabase />
                </div>
                <h3>Database Design</h3>
                <p>Designing normalized relational databases with SQL Server and Oracle</p>
              </div>

              <div className="highlight-card">
                <div className="highlight-icon">
                  <FaRocket />
                </div>
                <h3>Full Stack</h3>
                <p>Creating complete web solutions combining backend APIs with React frontends</p>
              </div>
            </div>

            <div className="about-details">
              <h3>My Journey</h3>
              <p>
                Currently in my 6th semester at PUCIT with a CGPA of 3.10/4.00, I have practical 
                experience building database-driven web applications and RESTful APIs. My interests 
                extend beyond web development to include Artificial Intelligence and Machine Learning, 
                which I'm actively exploring alongside my core backend development skills.
              </p>
              
            </div>
          </div>

          <div className="about-stats">
            <div className="stat">
              <h4>4+</h4>
              <p>Programming Languages</p>
            </div>
            <div className="stat">
              <h4>3</h4>
              <p>Major Projects</p>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

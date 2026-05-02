import React from 'react';
import './Education.css';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

function Education() {
  return (
    <section id="education" className="education light-bg">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>

        <div className="education-card">
          <div className="education-header">
            <div className="education-icon">
              <FaGraduationCap />
            </div>
            <div className="education-info">
              <h3>Bachelor of Science in Software Engineering</h3>
              <p className="university">Punjab University College of Information Technology (PUCIT)</p>
              <div className="education-meta">
                <div className="meta-item">
                  <FaCalendarAlt />
                  <span>2023 - 2027</span>
                </div>
                <div className="meta-item">
                  <FaMapMarkerAlt />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

         

          

          <div className="education-highlights">
            <h4>Key Learning Areas</h4>
            <div className="highlights-grid">
              <div className="education-highlight">Object-Oriented Programming</div>
              <div className="education-highlight">Database Design & Management</div>
              <div className="education-highlight">Web Application Development</div>
              <div className="education-highlight">Software Design Patterns</div>
              <div className="education-highlight">Data Structures & Algorithms</div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;

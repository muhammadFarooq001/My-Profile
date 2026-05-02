import React from 'react';
import './Skills.css';
import { FaCode, FaDatabase, FaTools, FaUsers } from 'react-icons/fa';

function Skills() {
  const skillsData = [
    {
      category: 'Programming Languages',
      icon: <FaCode />,
      skills: ['C#', 'C++', 'Python', 'JavaScript']
    },
    {
      category: 'Web & Backend',
      icon: <FaCode />,
      skills: ['ASP.NET Core', 'REST APIs', 'MVC Architecture', 'Web API Development']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['SQL Server', 'Oracle Database', 'SQL Queries', 'Database Design', 'Normalization']
    },
    {
      category: 'Developer Tools',
      icon: <FaTools />,
      skills: ['Git', 'GitHub', 'Visual Studio', 'VS Code', 'Postman']
    },
    {
      category: 'Frontend',
      icon: <FaCode />,
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-title">
          <h2>Skills & Expertise</h2>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-category">
              <div className="skill-header">
                <div className="skill-icon">{skillGroup.icon}</div>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default Skills;

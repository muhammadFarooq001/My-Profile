import React from 'react';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  const projectsData = [
    {
      id: 1,
      title: 'University Admission Management System',
      githubLink: 'https://github.com/muhammadFarooq001/WebSemesterProject',
      description: 'A comprehensive web-based system to automate and streamline the student admission process with complete backend logic and database integration.',
      technologies: ['C#', 'ASP.NET Core', 'SQL Server', 'RESTful API'],
      features: [
        'Automated admission workflow',
        'Student application tracking',
        'Database-driven operations',
        'Error handling and validation'
      ],
      highlights: 'Built with ASP.NET Core backend logic and SQL Server database optimization'
    },
    {
      id: 2,
      title: 'Cinema House Management System',
      githubLink: '',
      description: 'A relational database project designed to manage all aspects of a cinema house operation including shows, tickets, and seat availability.',
      technologies: ['SQL Server', 'Database Design', 'SQL Queries', 'Oracle Database'],
      features: [
        'Movie and hall management',
        'Show timing scheduling',
        'Ticket and seat tracking',
        'Booking management'
      ],
      highlights: 'Applied database normalization techniques to ensure data integrity and reduce redundancy'
    },
    {
      id: 3,
      title: 'Todo Management REST API',
      githubLink: 'https://github.com/muhammadFarooq001/Todos-Backend',
      description: 'A full-stack application featuring a robust backend API with user authentication and a responsive React frontend for task management.',
      technologies: ['ASP.NET Core Web API', 'C#', 'React', 'SQL Server', 'JWT Authentication'],
      features: [
        'User registration and secure login with JWT',
        'CRUD operations for tasks',
        'Task status tracking',
        'Persistent data storage'
      ],
      highlights: 'Implemented secure JWT authentication and RESTful API design with React integration'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-title">
          <h2>Featured Projects</h2>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                {project.githubLink && (
                  <div className="project-links">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                       className="project-link" title="View on GitHub">
                      <FaGithub />
                    </a>
                  </div>
                )}
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-highlight">
                <p>{project.highlights}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in seeing more of my work?</p>
          <a href="https://github.com/muhammadFarooq001" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit My GitHub
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;

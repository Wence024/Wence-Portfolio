import React from 'react'
import './Projects.css'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, shopping cart, and payment integration using Stripe.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
    type: 'side',
  },
  {
    id: 2,
    title: 'Real-Time Chat App',
    description: 'A real-time messaging application with WebSocket support, user presence, and group conversations.',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
    type: 'side',
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'Built during internship - a project management tool with drag-and-drop, team collaboration, and notifications.',
    tech: ['TypeScript', 'Next.js', 'Prisma', 'MySQL'],
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
    type: 'work',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing my projects and skills, deployed on Vercel.',
    tech: ['React', 'Vite', 'CSS'],
    image: null,
    github: 'https://github.com',
    live: 'https://example.com',
    type: 'side',
  },
]

function Projects() {
  const sideProjects = projects.filter(p => p.type === 'side')
  const workProjects = projects.filter(p => p.type === 'work')

  return (
    <section className="page projects">
      <h1 className="fade-in">My Projects</h1>
      <p className="subtitle fade-in fade-in-delay-1">
        A selection of things I've built and worked on
      </p>
      
      <div className="projects-section fade-in fade-in-delay-2">
        <h2>Work & Internship</h2>
        <div className="card-grid">
          {workProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="projects-section fade-in fade-in-delay-3">
        <h2>Side Projects</h2>
        <div className="card-grid">
          {sideProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="card">
      <div className="card-image">
        {project.image ? (
          <img src={project.image} alt={project.title} />
        ) : (
          <div className="placeholder-image">🚀</div>
        )}
      </div>
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="card-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link">
            GitHub
          </a>
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Projects

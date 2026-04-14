import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className="page home">
      <div className="hero fade-in">
        <div className="hero-content">
          <div className="avatar-wrapper fade-in fade-in-delay-1">
            <div className="avatar-placeholder">
              <span>👤</span>
            </div>
          </div>
          <h1 className="fade-in fade-in-delay-2">Hi, I'm <span className="gradient-text">Your Name</span></h1>
          <p className="subtitle fade-in fade-in-delay-3">
            Full-Stack Developer & Creative Problem Solver
          </p>
          <p className="bio fade-in fade-in-delay-4">
            I build modern, responsive web applications with a focus on 
            clean code and exceptional user experiences. Based in [Your City].
          </p>
          <div className="hero-actions fade-in fade-in-delay-4">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
          <div className="social-links fade-in fade-in-delay-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <NavLink to="/" className="logo" onClick={closeMobileMenu}>Portfolio</NavLink>
        <ul className="nav-links desktop-nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/skills">Skills</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMobileMenu}>About</NavLink>
        <NavLink to="/skills" onClick={closeMobileMenu}>Skills</NavLink>
        <NavLink to="/projects" onClick={closeMobileMenu}>Projects</NavLink>
        <NavLink to="/experience" onClick={closeMobileMenu}>Experience</NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Navbar

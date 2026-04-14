import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Integrate with email service (EmailJS, Formspree, etc.)
    alert('Message sent! (Placeholder - integrate with email service)')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="page contact">
      <h1 className="fade-in">Get In Touch</h1>
      <p className="subtitle fade-in fade-in-delay-1">
        Have a question or want to work together? I'd love to hear from you!
      </p>

      <div className="contact-container fade-in fade-in-delay-2">
        <div className="contact-info">
          <h2>Let's Connect</h2>
          <p>
            I'm currently open to new opportunities and collaborations.
            Feel free to reach out through any of the channels below.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link-item">
              <span className="contact-icon">📧</span>
              <div>
                <h3>Email</h3>
                <p>your.email@example.com</p>
              </div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <span className="contact-icon">💼</span>
              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/yourprofile</p>
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
              <span className="contact-icon">🐙</span>
              <div>
                <h3>GitHub</h3>
                <p>github.com/yourusername</p>
              </div>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your message..."
              rows="5"
            />
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import './About.css'

function About() {
  return (
    <section className="page about">
      <h1 className="fade-in">About Me</h1>
      <div className="about-content">
        <div className="about-text fade-in fade-in-delay-1">
          <p>
            Hello! I'm a passionate developer based in [Your City]. I love building 
            things for the web and solving complex problems with elegant solutions.
          </p>
          <p>
            My journey into software development started when [your story here]. 
            Since then, I've been constantly learning and growing, working on 
            projects that challenge me and help me improve my skills.
          </p>
          <p>
            When I'm not coding, you can find me [your hobbies/interests]. I believe 
            in continuous learning and always look for opportunities to expand my 
            knowledge and contribute to the developer community.
          </p>
        </div>
        <div className="about-stats fade-in fade-in-delay-2">
          <div className="stat-card">
            <h3>2+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>5+</h3>
            <p>Technologies Used</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

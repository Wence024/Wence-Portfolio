import './About.css'

function About() {
  return (
    <section className="page about">
      <h1>About Me</h1>
      <p>
        I'm a full-stack developer with a passion for building beautiful, 
        functional web applications. I specialize in React, Node.js, and 
        modern web technologies.
      </p>
      <div className="skills-grid">
        <span className="skill-tag">React</span>
        <span className="skill-tag">JavaScript</span>
        <span className="skill-tag">Node.js</span>
        <span className="skill-tag">CSS/SCSS</span>
        <span className="skill-tag">TypeScript</span>
        <span className="skill-tag">Git</span>
      </div>
    </section>
  )
}

export default About

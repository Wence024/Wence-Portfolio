import './Projects.css'

const projects = [
  { id: 1, title: 'Project One', description: 'A modern web application built with React and Node.js' },
  { id: 2, title: 'Project Two', description: 'An e-commerce platform with full authentication and payment integration' },
  { id: 3, title: 'Project Three', description: 'A real-time collaboration tool using WebSockets' },
]

function Projects() {
  return (
    <section className="page projects">
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on recently.</p>
      <div className="card-grid">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects

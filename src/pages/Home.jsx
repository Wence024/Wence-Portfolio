import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <section className="page home">
      <h1>Welcome to My Portfolio</h1>
      <p>
        I'm a passionate developer creating modern, responsive web applications.
        Explore my work and get in touch!
      </p>
      <Link to="/projects" className="btn">View My Work</Link>
    </section>
  )
}

export default Home

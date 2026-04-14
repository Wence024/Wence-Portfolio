import React from 'react'
import './Experience.css'

const experiences = [
  {
    id: 1,
    role: 'Junior Developer',
    company: 'Tech Company Name',
    period: 'Jan 2025 - Present',
    description: 'Working on full-stack web applications, collaborating with cross-functional teams, and implementing new features using React and Node.js.',
    type: 'work',
  },
  {
    id: 2,
    role: 'Software Engineering Intern',
    company: 'Startup Name',
    period: 'Jun 2024 - Dec 2024',
    description: 'Developed and maintained RESTful APIs, built responsive UI components, and participated in agile development processes.',
    type: 'work',
  },
  {
    id: 3,
    role: 'Freelance Developer',
    company: 'Self-Employed',
    period: '2023 - 2024',
    description: 'Built custom websites and web applications for small businesses, managing projects from concept to deployment.',
    type: 'work',
  },
  {
    id: 4,
    role: 'BS Computer Science',
    company: 'University Name',
    period: '2020 - 2024',
    description: 'Graduated with honors. Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems.',
    type: 'education',
  },
]

function Experience() {
  const workExperience = experiences.filter(e => e.type === 'work')
  const education = experiences.filter(e => e.type === 'education')

  return (
    <section className="page experience">
      <h1 className="fade-in">Experience & Education</h1>
      <p className="subtitle fade-in fade-in-delay-1">
        My professional journey and academic background
      </p>

      <div className="timeline-container">
        <div className="timeline-section fade-in fade-in-delay-2">
          <h2>Work Experience</h2>
          <div className="timeline">
            {workExperience.map((exp, index) => (
              <TimelineItem key={exp.id} item={exp} index={index} />
            ))}
          </div>
        </div>

        <div className="timeline-section fade-in fade-in-delay-3">
          <h2>Education</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <TimelineItem key={edu.id} item={edu} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="fade-in fade-in-delay-4">
        <a href="/resume.pdf" download className="btn btn-primary">
          Download Resume (PDF)
        </a>
      </div>
    </section>
  )
}

function TimelineItem({ item, index }) {
  return (
    <div className={`timeline-item fade-in fade-in-delay-${index + 2}`}>
      <div className="timeline-marker"></div>
      <div className="timeline-content">
        <div className="timeline-header">
          <h3>{item.role}</h3>
          <span className="timeline-period">{item.period}</span>
        </div>
        <p className="timeline-company">{item.company}</p>
        <p className="timeline-description">{item.description}</p>
      </div>
    </div>
  )
}

export default Experience

import React from 'react'
import './Skills.css'

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3/SASS', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git/GitHub', 'Docker', 'Vercel', 'AWS', 'CI/CD', 'Linux'],
  },
]

function Skills() {
  return (
    <section className="page skills">
      <h1 className="fade-in">Skills & Technologies</h1>
      <p className="subtitle fade-in fade-in-delay-1">
        Technologies and tools I work with
      </p>
      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div key={category.title} className={`skill-category fade-in fade-in-delay-${index + 2}`}>
            <h3>{category.title}</h3>
            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills

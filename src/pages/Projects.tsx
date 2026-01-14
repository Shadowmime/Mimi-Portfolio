type Project = {
  title: string
  description: string
}

const projects: Project[] = [
  {
    title: 'Ready Set Block',
    description:
      'Multiplayer game project with backend APIs for accounts and ranking.',
  },
  {
    title: 'Waiting Management System',
    description:
      'Full-stack university project using React, Node.js, and MongoDB.',
  },
]

export default function Projects() {
  return (
    <div className="page">
      <h1>Projects</h1>

      <div className="project-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

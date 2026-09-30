import { Link } from 'react-router'
import { projects } from '../utils/projects'
import ProjectCard from '../components/ProjectCard'

export default function Projects() {
  const [latest] = projects

  return (
    <section
      id="projects"
      className="mx-auto max-w-314 border-b-2 border-white px-7 py-12"
    >
      <div className="mb-4 flex items-end justify-between">
        <h2 className="display display-lg text-brand-yellow pb-4">
          Latest projects
        </h2>
      </div>

      <ProjectCard project={latest} compact />
    </section>
  )
}
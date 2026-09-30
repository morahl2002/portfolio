import ProjectCard from '../components/ProjectCard'
import Reveal from '../components/Reveal'
import { projects } from '../utils/projects'

export default function Projects() {
  return (
    <>
      <Reveal>
        <section className="mx-auto max-w-314 border-b-2 border-white px-7 py-12 text-center">
          <h1 className="display display-xl">Projects</h1>
        </section>
      </Reveal>

      {projects.map((project) => (
        <Reveal key={project.slug}>
          <section className="mx-auto max-w-314 border-b-2 border-white px-7 py-12">
            <ProjectCard project={project} headingLevel="h2" />
          </section>
        </Reveal>
      ))}
    </>
  )
}
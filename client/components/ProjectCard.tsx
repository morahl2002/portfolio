import type { Project } from '../../models/Project'
import ButtonLink from './ButtonLink'

interface ProjectCardProps {
  project: Project
  headingLevel?: 'h2' | 'h3'
}

export default function ProjectCard({
  project,
  headingLevel: Heading = 'h3',
}: ProjectCardProps) {
  const { title, category, description, image, imageAlt, href } = project

  return (
    <article>
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className="h-auto w-full border-2 border-white"
      />

      <Heading className="display display-lg mt-4 pt-4">
        <span className="text-brand-yellow">{title}</span> / {category}
      </Heading>

      <p className="body-mono mt-6 max-w-full">{description}</p>

      {href && <ButtonLink href={href}>Explore</ButtonLink>}
    </article>
  )
}
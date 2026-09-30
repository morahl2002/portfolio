import type { Project } from '../../models/Project'
import ButtonLink from './ButtonLink'

interface ProjectCardProps {
  project: Project
  /** Crops the image to a short banner (used on the home page) */
  compact?: boolean
  /** Match the heading level to the page's outline */
  headingLevel?: 'h2' | 'h3'
}

export default function ProjectCard({
  project,
  compact = false,
  headingLevel: Heading = 'h3',
}: ProjectCardProps) {
  const { title, category, description, image, imageAlt, href } = project

  return (
    <article>
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className={`w-full border-2 border-white object-cover object-top ${
          compact ? 'h-75' : 'h-auto'
        }`}
      />

      <Heading className="display display-lg mt-4">
        <span className="text-brand-yellow">{title}</span> / {category}
      </Heading>

      <p className="body-mono mt-6 max-w-none">{description}</p>

      {href && <ButtonLink href={href}>Explore</ButtonLink>}
    </article>
  )
}
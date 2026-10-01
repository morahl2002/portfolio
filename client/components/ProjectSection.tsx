import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface ProjectSectionProps {
  title?: string
  /** Remove side padding so content (e.g. images) spans the full width */
  flush?: boolean
  children: ReactNode
}

export default function ProjectSection({
  title,
  flush = false,
  children,
}: ProjectSectionProps) {
  return (
    <Reveal>
      <section
        className={`mx-auto max-w-314 border-b-2 border-white py-12 ${flush ? '' : 'px-7'}`}
      >
        {title && (
          <h2 className="display display-lg mb-4 text-brand-yellow">{title}</h2>
        )}
        {children}
      </section>
    </Reveal>
  )
}
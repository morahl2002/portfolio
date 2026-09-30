import type { ReactNode } from 'react'

interface ButtonLinkProps {
  href: string
  children: ReactNode
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-3 font-bold text-brand-blue"
    >
      {children} <span aria-hidden="true">→</span>
    </a>
  )
}
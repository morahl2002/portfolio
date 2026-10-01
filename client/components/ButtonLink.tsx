import type { ReactNode } from 'react'
import { Link } from 'react-router'

type ButtonLinkProps = {
  children: ReactNode
  arrow?: boolean
  className?: string
} & ({ to: string; href?: never } | { href: string; to?: never })

// `to` = internal route, `href` = external link (opens in a new tab)
export default function ButtonLink({
  children,
  arrow = true,
  className = '',
  to,
  href,
}: ButtonLinkProps) {
  const classes = `inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-3 font-bold text-brand-blue ${className}`
  const content = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={classes}>
      {content}
    </a>
  )
}
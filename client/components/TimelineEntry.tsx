import type { ReactNode } from 'react'

interface TimelineEntryProps {
  title: string
  subtitle: string
  period: string
  children?: ReactNode
}

// Period on the left, details on the right (stacked on mobile)
export default function TimelineEntry({
  title,
  subtitle,
  period,
  children,
}: TimelineEntryProps) {
  return (
    <div className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-8">
      <p className="body-mono">{period}</p>
      <div>
        <h3 className="display text-2xl">
          <span className="text-brand-yellow">{title}</span> / {subtitle}
        </h3>
        {children}
      </div>
    </div>
  )
}
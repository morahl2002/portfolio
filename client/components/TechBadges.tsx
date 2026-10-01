import type { TechBadge } from '../utils/techstack'

interface TechBadgesProps {
  badges: TechBadge[]
}

export default function TechBadges({ badges }: TechBadgesProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {badges.map((badge) => (
        <li key={badge.name}>
          <img src={badge.src} alt={badge.name} loading="lazy" className="h-8 w-auto" />
        </li>
      ))}
    </ul>
  )
}
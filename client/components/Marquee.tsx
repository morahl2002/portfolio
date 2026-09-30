import { techStack } from '../utils/techstack'

function BadgeRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center gap-4 pr-4 ${hidden ? 'marquee-dupe' : ''}`}
      aria-hidden={hidden || undefined}
    >
      {techStack.map((tech) => (
        <li key={tech.name} className="shrink-0">
          <img
            src={tech.src}
            alt={hidden ? '' : tech.name}
            loading="lazy"
            className="h-8 w-auto"
          />
        </li>
      ))}
    </ul>
  )
}

export default function Marquee() {
  return (
    <div className="overflow-hidden py-4" role="region" aria-label="Tech stack">
      {/* Two identical rows + translateX(-50%) = seamless loop */}
      <div className="marquee-track flex w-max animate-marquee">
        <BadgeRow />
        <BadgeRow hidden />
      </div>
    </div>
  )
}
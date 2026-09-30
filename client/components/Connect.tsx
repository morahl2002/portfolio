const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
  { label: 'GitHub', href: 'https://github.com/your-handle' },
  { label: 'Email', href: 'mailto:you@example.com' },
]

export default function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-314 px-7 py-24 text-center">
      <h2 className="display display-lg mb-12 text-brand-yellow">
        Let’s connect
      </h2>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="display display-lg hover:text-brand-yellow"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
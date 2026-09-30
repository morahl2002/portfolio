const links = [
  { label: 'Experience', href: '#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Connect', href: '#connect' },
]

export default function Header() {
  return (
    <header className="mx-auto max-w-314 border-b-2 border-white px-12 py-8">
      <nav className="flex items-center justify-between font-bold">
        <a href="#top">Morah Lopati | Web Developer</a>
        <ul className="flex gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-brand-yellow">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
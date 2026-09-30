const links = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cumorah-lopati/' },
  { label: 'GitHub', href: 'https://github.com/morahl2002' },
  { label: 'Email', href: 'mailto:lopaticumorah@gmail.com' },
]

export default function Connect() {
  return (
    <section id="connect" className="mx-auto max-w-314 px-7 py-24 text-center">
      <h2 className="display display-lg mb-12 text-brand-yellow">
        Let’s connect
      </h2>
      <ul className="space-y-1">
        {links.map((link) => {
          const isEmail = link.href.startsWith('mailto:');
          
          return (
            <li key={link.label}>
              <a
                href={link.href}
                className="display display-lg hover:text-brand-yellow"
                target={isEmail ? '_self' : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  )
}

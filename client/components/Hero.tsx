function Face({ src }: { src: string }) {
  return <img src={src} alt="" className="inline-face" />
}

const roles = [
  'A Daughter',
  'A Sister',
  'Kiiiinda Hungry',
  'A Superhero Enthusiast',
  'A Bowlcut Victim',
  'A Creative',
  'A Nerd',
]

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-314 border-b-2 border-white px-4 py-12 text-center"
    >
      <h1 className="display display-xl">
        Kia ora, <Face src="/images/kid-1.png" /> Talofa,{' '}
        <Face src="/images/kid-2.png" /> Fakaalofa lahi atu. I’m{' '}
        <span className="text-brand-yellow">Morah</span>,{' '}
        <Face src="/images/kid-3.png" /> and I am…
      </h1>

      <p className="mx-auto mt-8 max-w-5xl text-xl leading-relaxed">
        {roles.map((role) => (
          <span key={role}>{role} / </span>
        ))}
        <span className="font-bold text-brand-yellow underline">
          A UX Designer
        </span>
        <span className="font-bold text-brand-yellow"> / </span>
        <span className="font-bold text-brand-yellow underline">
          A Junior Full-stack Web Developer
        </span>
      </p>
    </section>
  )
}
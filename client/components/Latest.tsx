export default function LatestProjects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-314 border-b-2 border-white px-7 py-12"
    >
      <div className="mb-4 flex items-end justify-between">
        <h2 className="display display-lg text-brand-yellow">
          Latest projects
        </h2>
        <a href="/projects" className="underline">
          See all
        </a>
      </div>

      <article>
        <a
          href="/projects/momodex"
          className="relative block h-75 overflow-hidden border-2 border-white"
        >
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative flex h-full flex-col items-center justify-center px-8 text-center text-white">
            <img
            src="/images/momodex.png"
            alt="Close-up of a tūī bird"
            className="absolute inset-0 h-full w-full object-cover"
          />
          </div>
        </a>

        <h3 className="display display-lg mt-4">
          <span className="text-brand-yellow">Momodex</span>
          <br />/ Web development
        </h3>

        <p className="body-mono mt-6 max-w-none">
          Built as a one-week group project during DevAcademy, Momodex is a
          gamified citizen-science app that turns real-world nature observations
          into a collectible card and battle game built to get more people
          outside, observing New Zealand&apos;s native and invasive species, and
          (eventually) contributing that data back to real conservation
          research.
        </p>

        <a
          href="/projects/momodex"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-4 py-3 font-bold text-brand-blue"
        >
          Explore <span aria-hidden="true">→</span>
        </a>
      </article>
    </section>
  )
}
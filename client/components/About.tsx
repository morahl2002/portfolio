export default function About() {
  return (
    <section
      id="about"
      className="mx-auto grid max-w-314 items-center gap-12 border-b-2 border-white px-7 py-24 md:grid-cols-[1fr_auto]"
    >
      <div>
        <h2 className="display display-lg mb-4 text-brand-yellow">About me</h2>
        <div className="body-mono space-y-5">
          <p>
            I am a junior full-stack web developer with a real soft spot for the
            front end and anything to do with making a user&apos;s experience
            accessible, familiar and fun.
          </p>
          <p>
            I’ve always been creative, so I started out in UX/UI before
            branching into the more technical side of things, picking up the
            basics of full-stack development. My aim is to use both skill sets
            together to become a well-rounded web developer.
          </p>
          <p>
            When I’m not hunched over my computer, I can be found lost in a
            comic book or rearranging my LEGO collection for the 100th time.
          </p>
        </div>
      </div>

      <figure className="w-64 rotate-2 bg-white p-2 pb-20 shadow-xl">
        <img
          src="/images/morah-polaroid.jpg"
          alt="Young Morah posing with hands under her chin in a pink T-shirt"
          className="aspect-square w-full object-cover"
        />
      </figure>
    </section>
  )
}
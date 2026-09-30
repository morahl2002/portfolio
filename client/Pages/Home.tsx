import About from '../components/About'
import Hero from '../components/Hero'
import LatestProjects from '../components/Latest'
import Reveal from '../components/Reveal'
import TechMarquee from '../components/Marquee'

export default function Home() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <LatestProjects />
      </Reveal>
      <Reveal>
        <section
          id="techstack"
          className="mx-auto max-w-314 border-b-2 border-white py-12"
        >
          <h2 className="display display-lg mb-4 px-7 text-brand-yellow">
            My techstack
          </h2>
          <TechMarquee />
        </section>
      </Reveal>
    </>
  )
}
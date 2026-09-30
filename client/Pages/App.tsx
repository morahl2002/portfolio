import { useFruits } from '../hooks/useFruits.ts'
import About from '../components/About.tsx'
import Connect from '../components/Connect.tsx'
import Header from '../components/Header.tsx'
import Hero from '../components/Hero.tsx'
import LatestProjects from '../components/Latest.tsx'
import Marquee from '../components/Marquee.tsx'
import Reveal from '../components/Reveal.tsx'


function App() {
  return (
    <>
        <Header />
        <main>
           <Reveal>
        < Hero />
        </Reveal>
         <Reveal>
        < LatestProjects />
        </Reveal>
         <Reveal>
        <section
          id="techstack"
          className="mx-auto max-w-314 border-b-2 border-white py-12"
        >
          <h2 className="display display-lg mb-4 px-7 text-brand-yellow">
            My techstack
          </h2>
          < Marquee /> 
          </section>
          </Reveal>
           <Reveal>
          < About />
          </Reveal>
           <Reveal>
        < Connect />
        </Reveal>
      </main>
    </>
  )
}

export default App

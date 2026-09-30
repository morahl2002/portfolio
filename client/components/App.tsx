import { useFruits } from '../hooks/useFruits.ts'
import About from './About.tsx'
import Connect from './Connect.tsx'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import LatestProjects from './Latest.tsx'
import Marquee from './Marquee.tsx'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        < Hero />
        < About />
        < LatestProjects />
        <section
          id="techstack"
          className="mx-auto max-w-314 border-b-2 border-white py-12"
        >
          <h2 className="display display-lg mb-4 px-7 text-brand-yellow">
            My techstack
          </h2>
          < Marquee /> 
          </section>
        < Connect />
      </div>
    </>
  )
}

export default App

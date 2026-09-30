import { useFruits } from '../hooks/useFruits.ts'
import About from './About.tsx'
import Header from './Header.tsx'
import Hero from './Hero.tsx'
import LatestProjects from './Latest.tsx'

function App() {

  return (
    <>
      <div className="app">
        <Header />
        < Hero />
        < About />
        < LatestProjects />
      </div>
    </>
  )
}

export default App

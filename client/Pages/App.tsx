import { Outlet } from 'react-router'
import Connect from '../components/Connect'
import Header from '../components/Header'
import Reveal from '../components/Reveal'
import ScrollToHash from '../components/ScrollToHash'

// Layout shared by every page
export default function App() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <main>
        <Outlet />
        <Reveal>
          <Connect />
        </Reveal>
      </main>
    </>
  )
}
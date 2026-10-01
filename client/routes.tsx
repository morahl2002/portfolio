import { createRoutesFromElements, Route } from 'react-router'
import App from './Pages/App'
import Home from './Pages/Home'
import Momodex from './Pages/projects/Momodex'
import Projects from './Pages/Projects'
import Experience from './Pages/Experience'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="experience" element={<Experience />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/momodex" element={<Momodex />} />
  </Route>,
)
import { createRoutesFromElements, Route } from 'react-router'
import App from './Pages/App'
import Home from './Pages/Home'
import Momodex from './Pages/projects/Momodex'
import Projects from './Pages/Projects'

export default createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="projects" element={<Projects />} />
    <Route path="projects/momodex" element={<Momodex />} />
  </Route>,
)
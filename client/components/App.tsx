import { useFruits } from '../hooks/useFruits.ts'
import Header from './Header.tsx'

function App() {
  const { data } = useFruits()

  return (
    <>
      <div className="app">
        <Header />
        
      </div>
    </>
  )
}

export default App

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { DATA_CARDS } from './dataCards'
import { DATA_SECTION } from './dataSection'
import Cards from './components/Cards'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Cards dataCards = { DATA_CARDS } dataSection = { DATA_SECTION } />
    </>
  )
}

export default App

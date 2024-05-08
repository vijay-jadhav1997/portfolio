// import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Intro from './components/introduction/Intro'
import Skills from './components/skills/Skills'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Navbar/>
      <Intro/>
      <Skills/>
    </div>
  )
}

export default App

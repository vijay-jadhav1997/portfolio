import Header from './components/navbar/Header'
import Intro from './components/introduction/Intro'
import Skills from './components/skills/Skills'

import './App.css'
import ContactMe from './components/contact/ContactMe'
import Footer from './components/footer/Footer'


function App() {

  return (
    <div className='app'>
      <Header/>
      <Intro/>
      <Skills/>
      <ContactMe/>
      <Footer />
    </div>
  )
}

export default App

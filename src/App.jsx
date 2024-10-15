import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Services from './component/services/Services'
import Qualification from './component/qualification/Qualification'
import Testimonial from './component/testimonials/Testimonial'
import Contact from './component/contact/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      {/* <Qualification/> */}
      {/* <Testimonial/> */}
      <Contact/>
    </main>
    </>
  )
}

export default App


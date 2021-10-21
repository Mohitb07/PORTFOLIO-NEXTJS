import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
// import Test from '../components/test'
import About from '../components/About';
import Skills from '../components/Skills'
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Footer from '../components/Footer'

function index() {
  return (
    <div className="bg-white">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default index

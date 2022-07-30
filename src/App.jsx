import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Skills'
import Services from './components/services/Services'
import Testimonials from './components/testimonial/Testimonial'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
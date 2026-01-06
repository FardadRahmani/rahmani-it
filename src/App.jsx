import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyRahmaniIT from './components/WhyRahmaniIT'
import AboutMe from './components/AboutMe'
import Packages from './components/Packages'
import Contact from './components/Contact'
import Certificates from './components/Certifications'

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cy300 selection:text-cy900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-blue-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(30, 64, 175, 0.35),
        rgba(255,255,255,0))]">

      </div>



      

      </div>
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <Services />
      <WhyRahmaniIT />
      <AboutMe />
      <Packages />
      <Certificates />
      <Contact />
      </div>
    </div>
  )
}

export default App

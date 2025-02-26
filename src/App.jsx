import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Dashboard from './components/Dashboard'
import TrustedMarquee from './components/Marquee'
import Services from './components/Service'
import Features from './components/Category'
import Testimonials from './components/Testimonials'
import FAQ from './components/Faq'
import AISection from './components/Products'
import ContactUs from './components/Contact'
import Footer from './components/Footer'
import { NoiseDemo } from './Cursor'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>
    <Navbar/>
     <Hero/>
     <Dashboard/>
     <TrustedMarquee/>

     <Services/>
     <Features/>
     <Testimonials/>
     <FAQ/>
     <AISection/>
     <ContactUs/>
     <Footer/>
     
    </div>
    </>
  )
}

export default App

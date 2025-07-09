import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AboutUs from './components/AboutUs/AboutUs'
import Service from './components/Service/Service'
import Branches from './components/Branches/Branches'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <AboutUs/>
      <Service/>
      <Branches/>
      <Footer/>
    </div>
  )
}

export default App

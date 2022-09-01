import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./assets/css/mystyle.css"
import About from './component/About'
import Contactus from './component/Contactus'
import Home from './component/Home'
import Nav from './component/Nav'
import Whycontact from './component/Whycontact'
import Services from './component/Services'
import Footer from './component/Footer'
import Thankyou from './component/Thankyou'
import ScrollToTop from './component/ScrollToTop'


function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/whycontact' element={<Whycontact />} />
          <Route exact path='/contactus' element={<Contactus />} />
          <Route exact path='/Thankyou' element={<Thankyou />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
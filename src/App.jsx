import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './components/nav'
import HomePage from './components/home'
import About from './components/about'
import OurServices from './components/ourservices'

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
      </Routes>
    </Router>
  )
}

export default App

 
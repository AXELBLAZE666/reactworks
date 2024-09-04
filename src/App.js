import React from 'react'
import Header from './components/header'
import Home from './components/home'
import About from './components/about'
import Services from './components/services'
import Contact from './components/contact'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  )
}

export default App

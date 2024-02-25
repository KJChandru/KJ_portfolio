import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './shared/Footer'

function App() {
  

  return (
    <>
    <Header/>
    <Home /> 
    <About/>
    <Projects/>
    <Footer/>
    </>
    
        
    
  )
}

export default App

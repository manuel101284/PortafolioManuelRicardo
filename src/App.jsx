// import React from "react"
import { Routes, Route } from "react-router-dom"

import "../src/assets/styles/Styleheader.css"
import "../src/assets/styles/Stylefooter.css"
import "../src/assets/styles/Stylecontainer.css"
import "../src/assets/styles/Styleprojects.css"
import "../src/assets/styles/Stylecontactme.css"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Aboutme from "./pages/Aboutme.jsx"
import Curriculum from "./pages/Curriculum.jsx"
import Projects from "./pages/Projects"
import Contactme from "./pages/Contactme.jsx"


function App() {
  return (
    // <div className="App">
    //   <Navbar/>
      
    //   <Home/>

    //   <Footer/>
    // </div>
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Aboutme" element={<Aboutme />}/>
        <Route path="/Curriculum" element={<Curriculum />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contactme" element={<Contactme />}/>
      </Routes>
      <Footer />
    </div>  
  )
}

export default App

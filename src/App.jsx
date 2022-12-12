import React from "react"
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom"

import "../src/assets/styles/Styleheader.css"
import "../src/assets/styles/Stylefooter.css"
import "../src/assets/styles/Stylecontainer.css"

import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Aboutme from "./pages/Aboutme.jsx"
import Curriculum from "./pages/Curriculum.jsx"
import Projects from "./pages/Projects"
import Contactme from "./pages/Contactme.jsx"


function App() {
  return (
    /*<div className="App">
    { //   <Header/>
      
    //   <Container/>

    //   <Footer/>
    // </div> }*/
  <div className="App">
    <Navbar/>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={<Home/>}/>
        <Route path="/Aboutme" component={<Aboutme/>}/>
        <Route path="/Curriculum" component={<Curriculum/>}/>
        <Route path="/Projects" component={<Projects/>}/>
        <Route path="/Contactme" component={<Contactme/>}/>
      </Switch>
    </BrowserRouter>
    <Footer/>
  </div>  
  )
}

export default App

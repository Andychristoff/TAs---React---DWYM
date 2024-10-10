import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from "./Components/Home"
import About from "./Components/About"
import Contact from "./Components/Contact"

function App() {
  return (
    <Router>
      <div style={{display:'flex', placeSelf:'center',justifyContent: 'center', placeContent: 'space-evenly', width: "50%", margin:"auto"}}>
        <Link to="/">Home</Link>
        <br />
        <Link to="/about">About</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App

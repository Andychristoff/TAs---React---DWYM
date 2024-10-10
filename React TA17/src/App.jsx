import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import './App.css'
import Home from './Components/Home';
import Productos from './Components/Productos';

function App() {

  return (
    <Router>
      <div style={{display:'flex', placeSelf:'center',justifyContent: 'center', placeContent: 'space-evenly', width: "50%", margin:"auto", backgroundColor:'lightgrey'}}>
          <Link to="/">Home</Link>
          <br />
          <Link to="/productos/1">Manzana</Link>
          <br />
          <Link to="/productos/2">Banana</Link>
          <br />
          <Link to="/productos/3">Naranja</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/productos/:id" element={<Productos />} />
      </Routes>
    </Router>
  )
}

export default App

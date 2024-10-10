import React from 'react';
import {useContext} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Home from "./Components/Home";
import Ruta from "./Components/Ruta";
import {rutaProtegida} from './Components/RutaProtegida';
import { AutenticacionProvider, contextoAutenticacion } from './Components/ContextoAutenticacion';


function App() {

  const {login, logout, Autenticado} = useContext(contextoAutenticacion);

  return (
    <>
      <Router>{}
        <div>
          <Link to="/">HOME </Link>
          <span>I</span>
          <Link to="/ruta"> RUTA-PROTEGIDA</Link>
        </div>
        <br />
        {Autenticado ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/ruta" element={<rutaProtegida element={<Ruta/>}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;

import React, { useState } from 'react'
import TemaBoton from './TemaBoton'
import { TemaProvider } from './TemaContexto'
import ComponenteTema from './ComponenteTema'
import IdiomaComponente from "./IdiomaComponente"
import IdiomaBoton from "./IdiomaBoton"
import { IdiomaContexto, IdiomaProvider } from './IdiomaContexto'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <TemaProvider>
        <IdiomaProvider>
        <h1>React TA15</h1>
        
        <TemaBoton></TemaBoton><IdiomaBoton></IdiomaBoton>
        <br />
        <br />
        <ComponenteTema></ComponenteTema>
        <IdiomaComponente></IdiomaComponente>
        </IdiomaProvider>
      </TemaProvider>      
  )
}

export default App

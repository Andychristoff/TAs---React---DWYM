import React, { useState } from 'react'
import TemaBoton from './TemaBoton'
import { TemaProvider } from './TemaContexto'
import ComponenteTema from './ComponenteTema'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <TemaProvider>
        <h1>React TA14</h1>
        
        <TemaBoton></TemaBoton>
        <ComponenteTema></ComponenteTema>
        
      </TemaProvider>      
  )
}

export default App

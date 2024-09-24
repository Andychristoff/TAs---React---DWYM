import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [lista, setLista] = useState([])

  const renderLista = (tarea) => {
    setLista(lista.append(tarea))
  }

  return (
    <>
      <h1 style={{}}>React TA6</h1>
      <div style={{display:'flex', flex: 1, flexDirection:"column", justifyContent: 'center'}}>
        <p>{lista}</p>
        <input type="text" placeholder='Agregar Tareas'/>
        <button onClick={renderLista()}>Agregar</button>
      </div>

    </>
  )
}

export default App

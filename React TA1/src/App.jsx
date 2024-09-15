import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './assets/Card'

function App() {
  const [count, setCount] = useState(0)
  // Acá podes definir las constantes y variables que quieras y el return() es el html (CREO)

  return (
    <>
      <h1 className='arriba'>TA 1 React</h1>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Card
          titulo="Milagros Briano"
          descripcion={"Mi novia"}
          personaAsignada={"Andrés Christoff"}
          fechaInicio={"07/11/23"}
          fechaFin={"Death"}
        />
        <Card
          titulo={"Andrés Christoff"}
          descripcion={"Yo"}
          personaAsignada={"Milagros Briano"}
          fechaInicio={"07/11/23"}
          fechaFin={"Death"}
        />
        <Card
          titulo={"Conor"}
          descripcion={"Mi perro"}
          personaAsignada={"Andrés Christoff"}
          fechaInicio={"08/08/2021"}
          fechaFin={"Death"}
        />
      </div>
      
    </>
  )
}

export default App

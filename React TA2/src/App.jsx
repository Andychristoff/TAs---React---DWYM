import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./assets/Card.jsx"
import Card from './assets/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='arriba'>TA 2 React</h1>
      <div style={{display: "flex", flexdirection: "row" }}>
        <Card>
          <h2>Milagros Briano</h2>
          <p>Mi novia</p>
          <p><strong>Asignado a: </strong>Andrés Christoff</p>
          <p><strong>Fecha de inicio: </strong>07/11/2023</p>
          <p><strong>Fecha de fin: </strong>Death</p>
        </Card>
        <Card>
          <h2>Andrés Christoff</h2>
          <p>Yo</p>
          <p><strong>Asignado a: </strong>Milagros Briano</p>
          <p><strong>Fecha de inicio: </strong>07/11/2023</p>
          <p><strong>Fecha de fin: </strong>Death</p>
        </Card>
        <Card>
          <h2>Conor</h2>
          <p>Mi perro</p>
          <p><strong>Asignado a: </strong>Andrés Christoff</p>
          <p><strong>Fecha de inicio: </strong>04/8/2021</p>
          <p><strong>Fecha de fin: </strong>Death</p>
        </Card>
      </div>
      
    </>
  )
}

export default App

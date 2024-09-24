import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className=''>React TA4</h1>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', height: "100%"}}>
          <div className="card" style={{}}>
              <div style={{backgroundColor:'lightgray', borderRadius:"10px", margin:"10px"}}>Contador: {count}</div>
              <button onClick={() => setCount((count) => count + 1)} style={{backgroundColor:"lightblue", margin:"10px"}}>
                Aumentar
              </button>
              <button onClick={() => setCount((count) => count - 1)} style={{backgroundColor:"lightcoral", margin:"10px"}}>
                Disminuir
              </button>
          </div>
        </div>
    </>
  )
}

export default App

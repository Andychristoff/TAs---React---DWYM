import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del texto

  const toggleText = () => {
    setIsVisible((prev) => !prev); // Alterna el estado de visibilidad
  };

  return (
    <>
      <h1 style={{textAlign:'center'}}>React TA5</h1>
      { isVisible && <p className="texto" style={{}}>Texto magico que aparece y desaparece</p>}
      <div style={{display:"flex", flexDirection:"column", flex: 1, justifyContent:'center'}}>
        <button onClick={toggleText} style={{alignSelf:'center', backgroundColor: 'blueviolet'}}>{isVisible? "Ocultar Texto" : "Mostrar Texto"}</button>
      </div>
    </>
  )
}

export default App

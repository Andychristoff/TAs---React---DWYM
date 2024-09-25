import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState([]);

  const [input, setInput] = useState("");

  const updateLista = () => {
    if (input.trim() !== ""){
      setInput("");
      setLista([...lista, input])
    } 
  };

  const handleInput = (change) => {
    setInput(change.target.value);
  } 

  const renderLista = () => {
    return (lista.map((Tarea, index) => 
    <li key={index}>{Tarea}</li> ))
  }

  


  return (
    <>
      <h1 style={{}}>React TA6</h1>
      <h2>Tareas para hacer:</h2>
      <div style={{display:'flex', flex: 1, flexDirection:"column", justifyContent: 'center'}}>
        <ul className='lista-container'>{renderLista()}</ul>
        <input 
        type="text" 
        id="input" 
        onChange={handleInput} 
        value={input} 
        placeholder='Agregar Tareas'
        />
        <br />
        <button onClick={updateLista} style={{backgroundColor: "lightblue"}}>Agregar</button>
      </div>
    </>
  )
}
export default App

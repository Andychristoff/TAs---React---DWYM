import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState(["Tarea de prueba 1", "Tarea de prueba 2", "Tarea de prueba 3"]);

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

  const handleDelete = (key) => {
    const deleteItem = lista[key]
    const newItems = lista.filter(item => item !== deleteItem);
    setLista(newItems);
  };

  const renderLista = () => {
    return (lista.map((Tarea, index) => 
    <li style={{placeItems:'center', placeContent:'center'}}key={index}> {Tarea} <button style={{fontSize: "30%", backgroundColor: 'red', margin:"auto", placeSelf:'center'}} onClick={() => handleDelete(index)}>X</button></li>))
  }

  

  return (
    <>
      <h1 style={{}}>React TA7</h1>
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

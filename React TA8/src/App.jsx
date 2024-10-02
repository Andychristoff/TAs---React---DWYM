import { useState } from 'react'
import './App.css'

function App() {
  const [lista, setLista] = useState(["Tarea de prueba 1", "Tarea de prueba 2", "Tarea de prueba 3"]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null); // Almacena el índice de la tarea que se está editando
  const [editInput, setEditInput] = useState("");
  
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

  const handleEditClick = (index) => {
    setEditIndex(index); // Activa el modo de edición para una tarea específica
    setEditInput(lista[index]); // Prellena el input con el valor actual de la tarea
  };

  const handleSaveClick = (index) => {
    const updatedList = [...lista];
    updatedList[index] = editInput; // Actualiza la tarea editada
    setLista(updatedList);
    setEditIndex(null); // Desactiva el modo de edición
  };

  const handleEditInputChange = (e) => {
    setEditInput(e.target.value); // Actualiza el valor del input editado
  };

  const renderLista = () => {
    return lista.map((tarea, index) => (
      <li style={{ placeItems: 'center', placeContent: 'center', position: "relative", marginLeft:35, marginRight:10}} key={index}>
        {editIndex === index ? (
          // Si la tarea está en modo de edición, muestra un input
          <>
            <input type="text" value={editInput} onChange={handleEditInputChange} />
            <button onClick={() => handleSaveClick(index)} style={{ backgroundColor: "green", fontSize: "30%", position: 'absolute', left: -72, top: 5}}>
              Guardar
            </button>
          </>
        ) : (
          <>
            {tarea}
            <button style={{ fontSize: "30%", backgroundColor: 'red', margin: "auto", placeSelf: 'center', position: 'absolute', left: -37, top: 5 }} onClick={() => handleDelete(index)}>
              X
            </button>
            <button onClick={() => handleEditClick(index)} style={{ fontSize: "30%", backgroundColor: "yellow",  position: 'absolute', left: -72, top: 5 }}>
              Editar
            </button>
          </>
        )}
      </li>
    ));
  };

  

  return (
    <>
      <h1 style={{}}>React TA8</h1>
      <h2>Tareas para hacer:</h2>
      <div style={{display:'flex', flex: 1, flexDirection:"column", justifyContent: 'center'}}>
        <ul style={{}} className='lista-container'>{renderLista()}</ul>
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

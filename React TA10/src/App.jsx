import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsuarios(data);
    };
    fetchUsuarios();
  }, []);

  return (
    <>
      <h1>React TA10</h1>
      <h2>Lista de usuarios:</h2>
      <ul style={{display:'flex', flexDirection: "column", backgroundColor: 'lightblue', height: "auto", placeItems:"flex-start"}}>
        {usuarios.map((usuario) => (
          <li style={{}}>
            <strong>Username:</strong> {usuario.username} <strong>- Email: </strong>{usuario.email}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

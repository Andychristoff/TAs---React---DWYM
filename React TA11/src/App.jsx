import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [timer, setTimer] = useState(0);

  useEffect(() => {

    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Temporizador en React</h1>
      <h2>{timer} segundos</h2>
    </div>
  );
}

export default App

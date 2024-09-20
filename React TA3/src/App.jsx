import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [userInfo, setUserInfo] = useState("");

  const eventChange = (e) => {
    setUserInfo(e.target.value);
  };

  return (
    <>
      <h1 className='arriba'>TA 3 React</h1>
      <input type='text' id='userInput' maxLength="900" value={userInfo} onChange={eventChange} placeholder='Escriba aqui'></input>
      <div className='div'>
        Texto del usuario:
        <p>{userInfo}</p>
      </div>
    </>
  );
}

export default App

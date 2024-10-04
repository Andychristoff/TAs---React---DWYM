import React, {useContext, useState} from 'react'
import { UserContext } from './UserContext'

const UserInput = () => {

    const {userName, setUserName} = useContext(UserContext);

    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value);
    }


    const handleClick = () => {
        setUserName(input);
        setInput("")
    }

    return (
        <div style={{display:'flex', flexDirection: "column", alignItems:'center', margin:"auto"}}>
            El nombre de usuario es: {userName}
            <br /><br />
            <input type="text" placeholder='Nombre del usuario' value={input} onChange={handleInput}/>
            <button style={{backgroundColor: "gray"}} onClick={handleClick}>Enviar</button>
        </div>
      )
}


export default UserInput;
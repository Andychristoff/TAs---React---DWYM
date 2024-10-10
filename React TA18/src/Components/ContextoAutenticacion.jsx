import React from "react"
import {createContext, useState} from "react"

export const contextoAutenticacion = createContext();

export const AutenticacionProvider = ({children}) => {
    const [Autenticado, setAutenticado] = useState(false);

    const login = () => setAutenticado(true);
    const logout = () => setAutenticado(false);
    return (
        <contextoAutenticacion.Provider value={{login, logout, Autenticado}}>
            {children}
        </contextoAutenticacion.Provider>
    )
}

export default AutenticacionProvider;
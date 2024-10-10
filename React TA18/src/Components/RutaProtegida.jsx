import React from "react"
import {Navigate} from "react-router-dom";
import contextoAutenticacion from "./ContextoAutenticacion";
import { useContext } from "react";


export const rutaProtegida = ({ element }) => {
    const {Autenticado} = useContext(contextoAutenticacion);
    
    return (Autenticado ? element : <Navigate to="/" />)
};

export default rutaProtegida;
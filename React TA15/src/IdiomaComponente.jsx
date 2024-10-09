import React, { useContext } from 'react';
import "./App.css";
import { IdiomaContexto } from './IdiomaContexto';


const traducciones = {
    es: {
        mensaje: "Hola, esta página esta en Español."

    },
    en: {
        mensaje: "Hello, this webpage is in English."
    }
};

const IdiomaComponente = () => {
    const {Idioma} = useContext(IdiomaContexto)     

    return(
        <div>
            <h2>{traducciones[Idioma].mensaje}</h2>
        </div>
    );
};

export default IdiomaComponente;
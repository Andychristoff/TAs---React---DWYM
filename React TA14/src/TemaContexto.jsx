import React, { createContext, useState } from 'react';
import "./App.css";

export const TemaContexto = createContext();

export const TemaProvider = ({ children }) => {
  const [Tema, setTema] = useState('claro');

  const toggleTema = () => {
    setTema((prevTema) => (prevTema === 'claro' ? 'oscuro' : 'claro'));
  };

  return (
    <TemaContexto.Provider value={{ Tema, toggleTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

export default TemaProvider;
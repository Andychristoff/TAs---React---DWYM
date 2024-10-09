import React, { createContext, useState } from 'react';
import "./App.css";

export const IdiomaContexto = createContext();

export const IdiomaProvider = ({ children }) => {
  const [Idioma, setIdioma] = useState('es');

  const changeLanguage = (newLanguage) => {
    setIdioma(newLanguage);
  };

  return (
    <IdiomaContexto.Provider value={{ Idioma, changeLanguage }}>
      {children}
    </IdiomaContexto.Provider>
  );
};

export default IdiomaProvider;
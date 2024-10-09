import React, { useContext } from 'react';
import { TemaContexto } from './TemaContexto';

const TemaBoton = () => {
  const { Tema, toggleTema } = useContext(TemaContexto);

  return (
    <button onClick={toggleTema}>
      Cambiar a tema {Tema === 'claro' ? 'oscuro' : 'claro'} 
    </button>
  );
};

export default TemaBoton;
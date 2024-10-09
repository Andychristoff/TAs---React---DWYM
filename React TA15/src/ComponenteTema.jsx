import React, { useContext } from 'react';
import { TemaContexto } from './TemaContexto';
import "./App.css"

const ComponenteTema = () => {

  const { Tema } = useContext(TemaContexto);

  const styles = {
    claro: {
      backgroundColor: 'lightgrey',
      color: '#000000',
      padding: '20px',
      textAlign: 'center',
    },
    oscuro: {
      backgroundColor: '#333333',
      color: '#ffffff',
      padding: '20px',
      textAlign: 'center',
    },
  };

  return (
    <div style={Tema === 'claro' ? styles.claro : styles.oscuro}>
      El tema actual de la pagina es: {Tema}
    </div>
  );
};

export default ComponenteTema;
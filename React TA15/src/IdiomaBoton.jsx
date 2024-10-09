import React, { useContext } from 'react';
import {IdiomaContexto} from './IdiomaContexto';

const IdiomaBoton = () => {

  const { changeLanguage } = useContext(IdiomaContexto);

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </div>
  );
};

export default IdiomaBoton;
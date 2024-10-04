import React, { useContext } from 'react';
import { UserContext } from './UserContext'; // Importa el contexto

const UserDisplay = () => {
  const { userName } = useContext(UserContext); // Obtén el nombre del usuario desde el context

  return (
      <h2>Nombre del Usuario: {userName}</h2>
  );
};

export default UserDisplay;
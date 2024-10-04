import React, { createContext, useState } from 'react';

// Crear el contexto
export const UserContext = createContext();

// Crear el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState("Andrés Christoff"); 

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
        
      {children}
    </UserContext.Provider>
  );
};
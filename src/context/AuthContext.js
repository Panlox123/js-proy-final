import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]); // Usuarios registrados
  const [currentUser, setCurrentUser] = useState(null); // Usuario autenticado

  // Función para registrar usuarios
  const registerUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  // Función para autenticar usuarios
  const loginUser = (username, password) => {
    const user = users.find(user => user.username === username && user.password === password);
    if (user) setCurrentUser(user);
    return user;
  };

  // Función para verificar si un usuario está autenticado
  const isAuthenticated = () => currentUser !== null;

  // Función para cerrar sesión
  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, registerUser, loginUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
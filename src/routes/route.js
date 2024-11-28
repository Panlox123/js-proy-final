import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm.js';
import RegisterForm from '../components/auth/RegisterForm.js';
import HomePage from '../components/pages/HomePage.js';
import ProtectedRoute from '../components/auth/ProtectedRoute.js'; // Importa la ruta protegida

const RouteConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default RouteConfig;


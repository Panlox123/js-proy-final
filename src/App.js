import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext";
import RouteConfig from './routes/route.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
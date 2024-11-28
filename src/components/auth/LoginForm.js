import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa useNavigate
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
    const { loginUser } = useAuth();
    // Estados para almacenar los valores del formulario
    const [usuario, setUsuario] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [recordarme, setRecordarme] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Obtén la función navigate

    // Función para manejar el cambio en los campos de usuario
    const handleUsuarioChange = (e) => {
        setUsuario(e.target.value);
    };

    // Función para manejar el cambio en los campos de contraseña
    const handleContraseñaChange = (e) => {
        setContraseña(e.target.value);
    };

    // Función para manejar el cambio del checkbox "Recordarme"
    const handleRecordarmeChange = () => {
        setRecordarme(!recordarme);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const user = loginUser(usuario, contraseña);
        if (user) {
          alert(`Bienvenido, ${user.firstName} ${user.lastName}!`);
          navigate("/home");
        } else {
          setError("Usuario o contraseña incorrectos. Por favor, regístrate primero.");
        }
      };

    return (
        <div className="login-wrapper">
            <div className="container-login">
                <form onSubmit={handleSubmit}>
                    <h1>Iniciar Sesión</h1>

                    {/* Mostrar mensaje de error si existe */}
                    {error && <div className="error">{error}</div>}

                    <div className="input-caja">
                        <input
                            type="text"
                            placeholder="Ingresa tu usuario..."
                            value={usuario}
                            onChange={handleUsuarioChange}
                            required
                        />
                        <FaUser className="icono-login" />
                    </div>
                    <div className="input-caja">
                        <input
                            type="password"
                            placeholder="Ingresa tu contraseña..."
                            value={contraseña}
                            onChange={handleContraseñaChange}
                            required
                        />
                        <FaLock className="icono-login" />
                    </div>

                    <div className="recordatorio-contraseña">
                        <label>
                            <input type="checkbox" checked={recordarme} onChange={handleRecordarmeChange} />
                            Hazme recordar
                        </label>
                        <a href="#">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button type="submit"><a href="/home"></a>Login</button>

                    <div className="enlace-registro">
                        <p>¿Aún no tienes una cuenta? <a href="/register">Registrate aquí</a></p>
                    </div>
                </form>
            </div>
        </div>
        
    );
};

export default LoginForm;

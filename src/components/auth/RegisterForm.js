import React, { useState } from "react";
import './RegisterForm.css';
import { useNavigate } from "react-router-dom"; // Importamos el hook useNavigate
import { useAuth } from "../../context/AuthContext"; // Importamos useAuth para manejar el registro

const RegisterForm = () => {
  
  const { registerUser } = useAuth(); // Destructura registerUser desde el contexto
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    email: "",
    dni: "",
    terms: false
  });

  const navigate = useNavigate(); // Obtén la función navigate
  const [error, setError] = useState(""); // Estado para el manejo de errores

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newUser = {
        username: formData.username,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        email: formData.email,
        dni: formData.dni,
      };
  
      // Llamada para registrar al usuario en el contexto
      registerUser(newUser);
  
      // Redirige al login después de registrar exitosamente
      navigate("/");
  
    } catch (error) {
      console.error("Error en el registro", error);
      setError("Hubo un problema al registrar el usuario.");
    }
  };
  
  

  return (
    <div className="register-wrapper">
      <div className="container-register">
        <h1>Registro</h1>
        {error && <p className="error">{error}</p>} {/* Muestra el mensaje de error si existe */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="input-caja">
              <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-caja">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-caja">
              <input
                type="text"
                name="firstName"
                placeholder="Nombre"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-caja">
              <input
                type="text"
                name="lastName"
                placeholder="Apellido"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-caja">
              <input
                type="number"
                name="age"
                placeholder="Edad"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-caja">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <div className="input-caja">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-caja">
              <input
                type="text"
                name="dni"
                placeholder="DNI"
                value={formData.dni}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="recordatorio-terminos">
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              Acepto los términos y condiciones
            </label>
          </div>

          <button type="submit">Registrar</button>

          <div className="enlace-login">
            <p>
              ¿Ya tienes una cuenta?{" "}
              <a href="/">Iniciar sesión</a> {/* Añadido onClick */}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;


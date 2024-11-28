// src/components/body/Contactos.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

const Contactos = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    contactReason: 'consulta', // Valor predeterminado para el motivo de contacto
    file: null, // Para almacenar el archivo subido
    termsAccepted: false, // Para el checkbox de términos y condiciones
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (!formData.name || !formData.email || !formData.message || !formData.termsAccepted) {
      setError('Por favor, complete todos los campos y acepte los términos.');
      return;
    }

    // Validación de correo electrónico (expresión regular)
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      setError('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    // Validación de teléfono (expresión regular)
    const phonePattern = /^\d{9}$/;
    if (formData.phone && !phonePattern.test(formData.phone)) {
      setError('El teléfono debe contener 9 dígitos.');
      return;
    }

    // Simulación de envío de formulario
    setError('');
    setSuccess('¡Tu mensaje ha sido recibido! ¡Muchas gracias!');
    // Aquí podrías realizar una llamada a una API para enviar el formulario

    // Restablecer el formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      contactReason: 'consulta',
      file: null,
      termsAccepted: false,
    });
  };

  return (
    <section id="contacto" className="d-flex justify-content-center align-items-center py-5" style={{ backgroundColor: "#bed8db" }}>
    <div className="container p-4 rounded shadow-lg bg-white" style={{ width: '100%', maxWidth: '600px' }}>
      <h2 className="text-center mb-4">Contacto</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">{success}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Tu correo electrónico"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono (opcional)</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Tu número de teléfono"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="contactReason" className="form-label">Motivo del contacto</label>
          <select
            className="form-select"
            id="contactReason"
            name="contactReason"
            value={formData.contactReason}
            onChange={handleChange}
            required
          >
            <option value="consulta">Consulta</option>
            <option value="soporte">Soporte técnico</option>
            <option value="sugerencia">Sugerencia</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escribe tu mensaje aquí"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="file" className="form-label">Adjuntar archivo (opcional)</label>
          <input
            type="file"
            className="form-control"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label className="form-check-label" htmlFor="termsAccepted">
            Acepto los <a href="/terms">términos y condiciones</a>
          </label>
        </div>

        <button type="submit" className="btn btn-success w-100">Enviar mensaje</button>
      </form>
    </div>
  </section>
  );
};

export default Contactos;
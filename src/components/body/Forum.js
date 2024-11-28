import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Forum() {
    // Estado para almacenar los mensajes enviados
    const [messages, setMessages] = useState([]);

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); // Evitar que se recargue la página

        // Obtener los valores del formulario
        const asunto = e.target.asunto.value;
        const mensaje = e.target.mensaje.value;

        // Obtener la hora y fecha local actual en formato de 12 horas
        const currentDate = new Date();

        // Formato de la fecha: 27/11/2024
        const formattedDate = currentDate.toLocaleDateString('en-GB'); 

        // Formato de la hora: 7:58 PM
        const formattedTime = currentDate.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
        });

        // Crear un nuevo mensaje con la fecha y la hora
        const newMessage = {
            asunto,
            mensaje,
            time: `Enviado el ${formattedDate} a las ${formattedTime}`,
        };

        // Actualizar el estado con el nuevo mensaje
        setMessages([newMessage, ...messages]);

        // Limpiar los campos del formulario
        e.target.asunto.value = '';
        e.target.mensaje.value = '';
    };

    // Función para borrar un mensaje específico
    const handleDelete = (index) => {
        // Eliminar el mensaje del estado según su índice
        const updatedMessages = messages.filter((_, msgIndex) => msgIndex !== index);
        setMessages(updatedMessages);
    };

    return (
        <section id='forum' className="foro-section" style={{ backgroundColor: '#333333', paddingTop: '60px', paddingBottom: '60px' }}>
            <div className="container">
                {/* Título del foro */}
                <h2 className="text-center text-white mb-4">Foro en Vivo</h2>

                {/* Formulario para agregar asunto y mensaje */}
                <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
                    <div className="mb-4 w-75">
                        <label htmlFor="asunto" className="form-label text-white">Asunto</label>
                        <input type="text" className="form-control" id="asunto" placeholder="Escribe el asunto del foro" required />
                    </div>

                    <div className="mb-4 w-75">
                        <label htmlFor="mensaje" className="form-label text-white">Mensaje</label>
                        <textarea className="form-control" id="mensaje" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-primary">Enviar</button>
                    </div>
                </form>

                {/* Mostrar los mensajes enviados */}
                <div className="mt-5">
                    {messages.map((message, index) => (
                        <div key={index} className="message-container mb-4 p-3 position-relative" style={{ backgroundColor: '#444444', borderRadius: '8px' }}>
                            {/* Botón para borrar el mensaje (posicionado en la esquina superior derecha) */}
                            <button 
                                className="btn btn-danger btn-sm position-absolute top-0 end-0 m-2"
                                onClick={() => handleDelete(index)}
                            >
                            ‎ X ‎ 
                            </button>

                            <div className="d-flex align-items-center mb-3">
                                {/* Imagen de perfil */}
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/7077/7077313.png"
                                    alt="Perfil Anónimo"
                                    className="rounded-circle"
                                    style={{ width: '40px', height: '40px', marginRight: '10px' }}
                                />
                                {/* Nombre "Anónimo" */}
                                <div className="text-white">Anónimo</div>
                            </div>

                            {/* Título del asunto */}
                            <h5 className="text-white">{message.asunto}</h5>

                            {/* Mensaje */}
                            <p className="text-white">{message.mensaje}</p>

                            {/* Fecha y hora de envío */}
                            <div className="text-white small">
                                {message.time}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Forum;

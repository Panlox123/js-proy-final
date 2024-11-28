import 'bootstrap/dist/css/bootstrap.min.css';
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { currentUser, logout } = useAuth(); // Obtener el usuario autenticado desde el contexto
  const navigate = useNavigate(); // Para redirigir al usuario

  // Función para manejar el logout
  const handleLogout = () => {
      logout(); // Cierra la sesión
      navigate("/"); // Redirige al home
  };

  return (
    <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
            <a className="navbar-brand d-flex align-items-center text-white" href="#">
                <img src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
                <span className="ms-2 fs-4">IA al Servicio de la Innovación</span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex justify-content-center mx-auto">
                    <li className="nav-item">
                        <a className="nav-link fs-4 text-white" href="#intro">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-4 text-white" href="#slider">Slider</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-4 text-white" href="#gallery">Galería</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-4 text-white" href="#forum">Foro</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-4 text-white" href="#contacto">Contacto</a>
                    </li>
                </ul>
                {/* Mostrar el nombre de usuario si está autenticado */}
                {currentUser && (
                    <div className="d-flex align-items-center ms-auto">
                        <div style={{ 
                            paddingTop: '10px', paddingBottom: '10px', paddingLeft: '20px', paddingRight: '20px', 
                            backgroundColor: '#b33137', borderRadius: '5px', width: '200px', display: 'flex', 
                            justifyContent: 'space-between', alignItems: 'center' 
                        }}>
                            <div>
                                <p className="text-white font-weight-bold" style={{ marginBottom: '0' }}>Usuario:</p>
                                <p className="text-white" style={{ marginBottom: '0' }}>{currentUser.username}</p>
                            </div>
                        </div>
                        <button className="btn text-dark ms-3" style={{ marginTop: '10px', backgroundColor: "#bed8db" }} onClick={handleLogout}>Cerrar sesión</button>
                    </div>
                )}
            </div>
        </div>
    </nav>
  );
}

export default Navbar;


  
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid justify-content-center">
          <a className="navbar-brand d-flex align-items-center text-white" href="#">
            <img src="https://static.vecteezy.com/system/resources/previews/021/059/827/non_2x/chatgpt-logo-chat-gpt-icon-on-white-background-free-vector.jpg" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
            <span className="ms-2 fs-4">Mi Sitio Web</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active fs-4 text-white" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">Acerca de</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">Servicios</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-4 text-white" href="#">Contacto</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
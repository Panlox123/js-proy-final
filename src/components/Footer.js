import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-danger text-white py-3">
        <div className="container">
          <div className="row text-center">
            {/* Sección de Enlaces */}
            <div className="col-12 col-lg-6 mb-3">
              <h5 className="fs-6" style={{ lineHeight: '1.4' }}>Enlaces</h5>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white text-decoration-none">Inicio</a></li>
                <li><a href="#" className="text-white text-decoration-none">Acerca de</a></li>
                <li><a href="#" className="text-white text-decoration-none">Contacto</a></li>
              </ul>
            </div>
      
            {/* Sección de Contacto */}
            <div className="col-12 col-lg-6 mb-3">
              <h5 className="fs-6" style={{ lineHeight: '1.4' }}>Contacto</h5>
              <p style={{ lineHeight: '1.4' }}>Kevin Kobashikawa Cavero</p>
              <p style={{ lineHeight: '1.4' }}>Pablo Boza Torres</p>
            </div>
          </div>
      
          {/* Sección de Derechos de autor */}
          <div className="row text-center">
            <div className="col-12">
              <h5 className="fs-6" style={{ lineHeight: '1.4' }}>Derechos de autor</h5>
              <p style={{ lineHeight: '1.4' }}>&copy; 2023 Mi Sitio Web. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
      
      
    );
  }
  
  export default Footer;
  
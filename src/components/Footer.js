import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-danger text-white py-4">
            <div className="container">
                <div className="row text-center text-lg-start">
                    {/* Sección de Enlaces */}
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <h5 className="fs-5 mb-3">Enlaces</h5>
                        <ul className="list-unstyled">
                            <li><a href="#intro" className="text-white text-decoration-none fs-6">Inicio</a></li>
                            <li><a href="#slider" className="text-white text-decoration-none fs-6">Slider</a></li>
                            <li><a href="#gallery" className="text-white text-decoration-none fs-6">Galería</a></li>
                            <li><a href="#forum" className="text-white text-decoration-none fs-6">Foro</a></li>
                            <li><a href="#" className="text-white text-decoration-none fs-6">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Sección de Contacto */}
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0">
                        <h5 className="fs-5 mb-3">Colaboradores</h5>
                        <p className="mb-1 fs-6">Kevin Kobashikawa Cavero</p>
                        <p className="mb-0 fs-6">Pablo Boza Torres</p>
                    </div>

                    {/* Sección de Redes Sociales */}
                    <div className="col-12 col-lg-4 mb-4 mb-lg-0 text-center text-lg-start">
                        <h5 className="fs-5 mb-3">Síguenos</h5>
                        <ul className="list-unstyled d-flex justify-content-center justify-content-lg-start">
                            <li><a href="https://www.facebook.com/" className="text-white text-decoration-none me-3 fs-6">Facebook</a></li>
                            <li><a href="https://twitter.com/home" className="text-white text-decoration-none me-3 fs-6">Twitter</a></li>
                            <li><a href="https://www.instagram.com/" className="text-white text-decoration-none me-3 fs-6">Instagram</a></li>
                        </ul>
                    </div>
                </div>

                {/* Sección de Derechos de autor */}
                <div className="row mt-4">
                    <div className="col-12 text-center">
                        <p className="mb-0 fs-6">&copy; 2023 IA al Servicio de la Innovación. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

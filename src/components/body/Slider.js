import 'bootstrap/dist/css/bootstrap.min.css';
function Slider() {
    return (
        <section id='slider' className="py-5" style={{ backgroundColor: '#333333' }}>
    <div className="container">
        {/* Título del slider */}
        <h2 className="text-center text-white mb-4">Slider de Imágenes</h2>

        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.arenapublica.com/sites/default/files/styles/nodeimage_700x500/public/pictures/image/IA%202023_1.jpeg?itok=FDNiIUk3" 
                         className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen IA 2023" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.futuroprossimo.it/wp-content/uploads/2022/03/POST-FP-700X500-94.jpg" 
                         className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen Futuro Proximo" />
                </div>
                <div className="carousel-item">
                    <img src="https://www.arenapublica.com/sites/default/files/styles/nodeimage_700x500/public/pictures/image/IA%20Sin%20ma%CC%81scara.jpg?itok=UVQEmNyi" 
                         className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen IA Sin Máscara" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</section>
    );
  }
  
  export default Slider;
  
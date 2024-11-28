import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Slider() {
  const images = [
    "https://www.arenapublica.com/sites/default/files/styles/nodeimage_700x500/public/pictures/image/IA%202023_1.jpeg?itok=FDNiIUk3",
    "https://www.futuroprossimo.it/wp-content/uploads/2022/03/POST-FP-700X500-94.jpg",
    "https://www.arenapublica.com/sites/default/files/styles/nodeimage_700x500/public/pictures/image/IA%20Sin%20ma%CC%81scara.jpg?itok=UVQEmNyi"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <section id='slider' className="py-5" style={{ backgroundColor: '#333333' }}>
     

{/* Información sobre la IA directamente debajo del slider */}
<div className="container py-4" >
        <h3 className="text-white text-center mb-4">¿Qué es la Inteligencia Artificial?</h3>
        <p className="lead text-white fs-5 text-center">
          La inteligencia artificial (IA) es una rama de la informática que se enfoca en la creación de sistemas capaces de realizar tareas que normalmente requieren de la inteligencia humana. Estas tareas incluyen el aprendizaje, razonamiento, resolución de problemas, comprensión del lenguaje natural, visión por computadora, y más. En los últimos años, la IA ha logrado avances significativos, transformando diversos sectores como la salud, la educación, el transporte y el entretenimiento.
        </p>
        <p className="lead text-white fs-5 text-center">
          Los algoritmos de IA, como el aprendizaje automático y las redes neuronales, permiten a las máquinas aprender de los datos y mejorar su rendimiento con el tiempo. Este campo sigue evolucionando, con aplicaciones que van desde asistentes virtuales como Siri y Alexa, hasta vehículos autónomos y diagnósticos médicos avanzados.
        </p>
        <div className="container py-3">

          <div id="carouselExampleControls" className="carousel slide">
            <div className="carousel-inner">
              <div className={`carousel-item ${currentIndex === 0 ? 'active' : ''}`}>
                <img src={images[0]} className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen IA 2023" />
              </div>
              <div className={`carousel-item ${currentIndex === 1 ? 'active' : ''}`}>
                <img src={images[1]} className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen Futuro Proximo" />
              </div>
              <div className={`carousel-item ${currentIndex === 2 ? 'active' : ''}`}>
                <img src={images[2]} className="d-block w-100" style={{ maxWidth: '700px', maxHeight: '500px', margin: '0 auto' }} alt="Imagen IA Sin Máscara" />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" onClick={prevSlide}>
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={nextSlide}>
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <h4 className="text-white text-center mt-4 mb-3">Aplicaciones de la IA en la vida diaria</h4>
        <p className="lead text-white fs-5">
          En la vida cotidiana, la IA ya está presente en muchas áreas que mejoran nuestra eficiencia y comodidad. Algunas de las aplicaciones más comunes incluyen:
        </p>
        <ul className="lead text-white fs-5">
          <li><strong>Asistentes Virtuales:</strong> Como Siri, Google Assistant y Alexa, que usan IA para entender y responder a nuestras solicitudes.</li>
          <li><strong>Reconocimiento Facial:</strong> Utilizado en sistemas de seguridad y desbloqueo de dispositivos móviles.</li>
          <li><strong>Vehículos Autónomos:</strong> Los autos sin conductor están utilizando IA para navegar y tomar decisiones en tiempo real.</li>
          <li><strong>Medicina:</strong> La IA se está utilizando para mejorar el diagnóstico médico, analizar imágenes y predecir enfermedades.</li>
          <li><strong>Recomendaciones Personalizadas:</strong> Plataformas como Netflix y Amazon usan IA para recomendar productos y contenidos según tus intereses.</li>
        </ul>
        <h4 className="text-white text-center mt-4 mb-3">El Futuro de la IA</h4>
        <p className="lead text-white fs-5">
          El futuro de la inteligencia artificial parece prometedor, con aplicaciones que pueden transformar aún más la forma en que vivimos y trabajamos. Algunos de los avances más esperados incluyen el desarrollo de IA más avanzada en áreas como la robótica, la educación personalizada, la mejora de la salud mental y la automatización de tareas complejas en diversos sectores industriales.
        </p>
      </div>


      </section>

      
    </>
  );
}

export default Slider;

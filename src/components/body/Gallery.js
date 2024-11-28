import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Gallery() {
  // Estados para almacenar las imágenes, el término de búsqueda y el estado de carga
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('inteligencia artificial');  // Valor inicial como IA

  const unsplashApiKey = 'MklwEzq_qMfCqBOFTWLEQs7FZYnuj1wsGQqrwl3x1RQ';

  // Función para agregar imágenes basadas en el término de búsqueda
  const handleAddImage = async () => {
    setIsLoading(true);

    // Hacer la solicitud a la API de Unsplash para obtener imágenes basadas en el término de búsqueda
    const response = await fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&client_id=${unsplashApiKey}`);
    const data = await response.json();

    // Verificar que tengamos resultados
    if (data.results.length === 0) {
      alert("No se encontraron imágenes para ese término de búsqueda.");
      setIsLoading(false);
      return;
    }

    // Obtener una imagen aleatoria del resultado
    const randomImage = data.results[Math.floor(Math.random() * data.results.length)];

    // Crear un nuevo objeto de imagen con el tamaño deseado (800px de ancho)
    const newImage = {
      src: `${randomImage.urls.regular}&w=800`,  // URL con imagen de tamaño 800px de ancho
      alt: randomImage.alt_description || 'Imagen relacionada',
      isLoading: true  // Marca la imagen como en carga
    };

    // Actualizar el estado con la nueva imagen
    setImages([...images, newImage]);
    setIsLoading(false);
  };

  // Función para eliminar la última imagen
  const handleDeleteImage = () => {
    setImages(images.slice(0, -1)); // Elimina la última imagen de la galería
  };

  // Función para borrar todas las imágenes
  const handleDeleteAll = () => {
    setImages([]); // Borra todas las imágenes de la galería
  };

  // Función para manejar cuando la imagen ha terminado de cargarse
  const handleImageLoad = (index) => {
    const updatedImages = [...images];
    updatedImages[index].isLoading = false;
    setImages(updatedImages);
  };

  return (
    <section id="gallery" className="py-5" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)' }}>
      <div className="container">
        {/* Título de la galería */}
        <h2 className="text-center text-white mb-4">Galería de Imágenes de IA</h2>

        {/* Input para cambiar el término de búsqueda */}
        <div className="mb-4 text-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control w-50 d-inline-block"
            placeholder="Buscar imágenes..."
          />
          <button
            onClick={handleAddImage}
            className="btn btn-primary mx-2"
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Agregar Imagen'}
          </button>
        </div>

        {/* Botones para eliminar imágenes */}
        <div className="mb-4 text-center">
          <button
            onClick={handleDeleteImage}
            className="btn btn-danger mx-2"
          >
            Eliminar Última Imagen
          </button>
          <button
            onClick={handleDeleteAll}
            className="btn btn-warning mx-2"
          >
            Borrar Todo
          </button>
        </div>

        {/* Galería de imágenes */}
        <div className="row">
          {images.map((image, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              {/* Imagen con carga perezosa y placeholder */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-100 shadow-1-strong rounded mb-4"
                style={{ cursor: 'pointer' }}
                loading="lazy" // Carga perezosa
                onLoad={() => handleImageLoad(index)} // Marca la imagen como cargada
              />
              {image.isLoading && (
                <div className="text-center" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                  <span className="spinner-border text-light" role="status" aria-hidden="true"></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;

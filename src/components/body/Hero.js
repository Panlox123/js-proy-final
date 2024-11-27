import 'bootstrap/dist/css/bootstrap.min.css';
function Hero() {
    return (
        <section id='intro' className="hero py-5" style={{ background: 'rgba(255, 0, 0, 0.5)' }}>
        <div className="container d-flex align-items-center">
            <div className="row w-100">
                {/* Columna para la imagen */}
                <div className="col-lg-6">
                    <img
                        src="https://images7.memedroid.com/images/UPLOADED723/5a93826f0b3f2.jpeg"
                        alt="Hero Image"
                        className="img-fluid rounded"
                    />
                </div>
    
                {/* Columna para el texto */}
                <div className="col-lg-6 text-center text-lg-start">
                    <h1 className="display-4 fw-bold text-white">Introducción</h1>
                    <p className="lead text-white">
                        Hoy en día, estamos rodeados de tecnología que hace nuestra vida más fácil y eficiente. Desde los asistentes virtuales en nuestros teléfonos, hasta los sistemas de recomendación que nos sugieren música o películas, todo eso es posible gracias a la Inteligencia Artificial (IA). Pero, ¿qué es exactamente la IA? <br />
                        La Inteligencia Artificial es un campo de la informática que se dedica a crear máquinas y programas capaces de realizar tareas que normalmente requieren de la inteligencia humana, como aprender, razonar, resolver problemas, y tomar decisiones. En lugar de ser simplemente herramientas que siguen instrucciones, los sistemas de IA tienen la capacidad de aprender de su experiencia y mejorar su rendimiento con el tiempo. <br />
                        La IA no es solo una tecnología del futuro, ya está presente en muchos aspectos de nuestra vida cotidiana. Usamos IA cuando hablamos con un asistente virtual, cuando los autos se conducen solos, o incluso cuando los hospitales utilizan algoritmos para diagnosticar enfermedades. Además, la IA está transformando industrias enteras, desde la medicina hasta el entretenimiento, la educación y la automatización industrial. <br />
                        En esta exposición, exploraremos los conceptos básicos de la inteligencia artificial, sus diferentes tipos y aplicaciones, así como los retos y oportunidades que presenta para la sociedad. A través de ejemplos y explicaciones, veremos cómo la IA está moldeando el presente y el futuro de nuestras vidas.
                    </p>
                </div>
            </div>
        </div>
    </section>
    );
  }
  
  export default Hero;
  
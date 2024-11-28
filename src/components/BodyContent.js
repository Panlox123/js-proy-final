import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './body/Hero.js'
import Slider from './body/Slider.js';
import Gallery from './body/Gallery.js';
import Forum from './body/Forum.js';
import Contactos from './body/Contactos.js';

function BodyContent() {
    return (
        <>
            <Hero/>
            <Slider/>
            <Gallery/>
            <Forum/>
            <Contactos />
        </>
    );
}

export default BodyContent;

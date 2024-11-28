import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './body/Hero.js'
import Slider from './body/Slider.js';
import Gallery from './body/Gallery.js';
import Forum from './body/Forum.js';
function Navbar() {
    return (
        <>
        <Hero/>
        <Slider/>
        <Gallery/>
        <Forum/>
        </>
    );
}

export default Navbar;

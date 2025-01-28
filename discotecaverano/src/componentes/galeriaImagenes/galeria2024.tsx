import './galeriaImagenesAnios.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { scroller } from 'react-scroll';
import { useEffect } from 'react';
import { Element } from 'react-scroll';

export default function Galeria2024() {

    useEffect(() => {
        const hash = window.location.hash.slice(1); // Remueve el "#" del fragmento
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                offset: -130,
                smooth: 'easeInOutQuad',
            });
        }

    }, []);

    return (
        <div>
            <Header />
            <Element name="galeria2024">
                <h1 className='tituloGaleria'>Galeria 2024</h1>
                {/* Galería */}
                <div className="galeria">
                    <div className="galeria-grid">
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen1.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen2.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen3.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen4.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen5.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen6.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen7.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen8.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen9.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen10.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen11.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen12.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen13.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen14.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen15.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen16.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen17.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2024Imagen18.png' className="galeria-img"></img>
                        </div>
                    </div>
                </div>
            </Element>


            <Footer />
        </div>
    )
}

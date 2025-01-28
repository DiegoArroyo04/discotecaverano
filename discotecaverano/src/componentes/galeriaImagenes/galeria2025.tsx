import './galeriaImagenesAnios.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { scroller } from 'react-scroll';
import { useEffect } from 'react';
import { Element } from 'react-scroll';
export default function Galeria2025() {

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
            <Element name="galeria2025">
                <h1 className='tituloGaleria'>Galeria 2025</h1>
                {/* Galería */}
                <div className="galeria">
                    <div className="galeria-grid">
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen1.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen2.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen3.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen4.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen5.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen6.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen7.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen8.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen9.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen10.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen11.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen12.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen13.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen14.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen15.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen16.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen17.png' className="galeria-img"></img>
                        </div>
                        <div className="galeria-item">
                            <img src='/imagenes/2025Imagen18.png' className="galeria-img"></img>
                        </div>
                    </div>
                </div>
            </Element>

            <Footer />
        </div>
    )
}

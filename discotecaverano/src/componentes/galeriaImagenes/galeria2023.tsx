import './galeriaImagenesAnios.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { Element } from 'react-scroll';
import { scroller } from 'react-scroll';
import { useEffect } from 'react';

export default function Galeria2023() {
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
      <Element name="galeria2023">
        <h1 className='tituloGaleria'>Galeria 2023</h1>
        {/* Galería */}
        <div className="galeria">
          <div className="galeria-grid">
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen1.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen2.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen3.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen4.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen5.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen6.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen7.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen8.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen9.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen10.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen11.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen12.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen13.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen14.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen15.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen16.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen17.png' className="galeria-img"></img>
            </div>
            <div className="galeria-item">
              <img src='/imagenes/2023Imagen18.png' className="galeria-img"></img>
            </div>
          </div>
        </div>
      </Element>

      <Footer />
    </div>
  )
}

import { useState } from 'react';
import './galeriaImagenesAnios.css';
import Footer from '../footer/footer';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const imagenes = [
  '/imagenes/2023Imagen1.png', '/imagenes/2023Imagen2.png', '/imagenes/2023Imagen3.png',
  '/imagenes/2023Imagen4.png', '/imagenes/2023Imagen5.png', '/imagenes/2023Imagen6.png',
  '/imagenes/2023Imagen7.png', '/imagenes/2023Imagen8.png', '/imagenes/2023Imagen9.png',
  '/imagenes/2023Imagen10.png', '/imagenes/2023Imagen11.png', '/imagenes/2023Imagen12.png',
  '/imagenes/2023Imagen13.png', '/imagenes/2023Imagen14.png', '/imagenes/2023Imagen15.png',
  '/imagenes/2023Imagen16.png', '/imagenes/2023Imagen17.png', '/imagenes/2023Imagen18.png'
];

export default function Galeria2023() {
  const [imagenActual, setImagenActual] = useState<number | null>(null);

  const abrirImagen = (index: number) => {
    setImagenActual(index);
  };

  const cerrarImagen = () => {
    setImagenActual(null);
  };

  const siguienteImagen = () => {
    if (imagenActual !== null) {
      setImagenActual((imagenActual + 1) % imagenes.length);
    }
  };

  const anteriorImagen = () => {
    if (imagenActual !== null) {
      setImagenActual((imagenActual - 1 + imagenes.length) % imagenes.length);
    }
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      scroller.scrollTo(hash, {
        duration: 800,
        offset: -170,
        smooth: 'easeInOutQuad',
      });
    }
  }, []);

  return (
    <div>
      <h1 className='tituloGaleria'>Galería 2023</h1>
      <Element name="galeria2023">
        <div className="galeria">
          <div className="galeria-grid">
            {imagenes.map((img, index) => {
              // EJECUCIÓN EN EL BUCLE PARA CADA IMAGEN
              const { ref: referenciaImagen, inView: inViewTarjetaEvento } = useInView({
                triggerOnce: false,
                threshold: 0.3,
              });

              return (
                <div key={index} ref={referenciaImagen} className={`galeria-item ${inViewTarjetaEvento ? "visible" : "hidden"}`} onClick={() => abrirImagen(index)}>
                  <img src={img} className="galeria-img" alt={`Imagen ${index + 1}`} />
                </div>
              );
            })}


          </div>
        </div>
      </Element>
      <Footer />

      {/* Botón para volver atrás */}
      <Link to="/#galeriaImagenes">
        <button className="go-back-btn">
          <FiArrowLeft size={20} style={{ marginRight: "8px" }} /> Volver
        </button>
      </Link>

      {/* Visor de imágenes en pantalla completa */}
      {
        imagenActual !== null && (
          <div className="modal" onClick={cerrarImagen}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cerrarImagen" onClick={cerrarImagen}><FiX size={30} /></button>
              <button className="anterior" onClick={anteriorImagen}><FiChevronLeft size={40} /></button>
              <img src={imagenes[imagenActual]} className="imagen-grande" alt="Imagen ampliada" />
              <button className="siguiente" onClick={siguienteImagen}><FiChevronRight size={40} /></button>
            </div>
          </div>
        )
      }
    </div >
  );
}

import { useState } from 'react';
import './galeriaImagenesAnios.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { FiArrowLeft, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from "react-router-dom";

const imagenes = [
    '/imagenes/2025Imagen1.png', '/imagenes/2025Imagen2.png', '/imagenes/2025Imagen3.png',
    '/imagenes/2025Imagen4.png', '/imagenes/2025Imagen5.png', '/imagenes/2025Imagen6.png',
    '/imagenes/2025Imagen7.png', '/imagenes/2025Imagen8.png', '/imagenes/2025Imagen9.png',
    '/imagenes/2025Imagen10.png', '/imagenes/2025Imagen11.png', '/imagenes/2025Imagen12.png',
    '/imagenes/2025Imagen13.png', '/imagenes/2025Imagen14.png', '/imagenes/2025Imagen15.png',
    '/imagenes/2025Imagen16.png', '/imagenes/2025Imagen17.png', '/imagenes/2025Imagen18.png'
];

export default function Galeria2025() {
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

    return (
        <div>
            <Header />
            <h1 className='tituloGaleria'>Galería 2025</h1>
            <div className="galeria">
                <div className="galeria-grid">
                    {imagenes.map((img, index) => (
                        <div key={index} className="galeria-item" onClick={() => abrirImagen(index)}>
                            <img src={img} className="galeria-img" alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />

            {/* Botón para volver atrás */}
            <Link to="/#galeriaImagenes">
                <button className="go-back-btn">
                    <FiArrowLeft size={20} style={{ marginRight: "8px" }} /> Volver
                </button>
            </Link>

            {/* Visor de imágenes en pantalla completa */}
            {imagenActual !== null && (
                <div className="modal" onClick={cerrarImagen}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="cerrarImagen" onClick={cerrarImagen}><FiX size={30} /></button>
                        <button className="anterior" onClick={anteriorImagen}><FiChevronLeft size={50} /></button>
                        <img src={imagenes[imagenActual]} className="imagen-grande" alt="Imagen ampliada" />
                        <button className="siguiente" onClick={siguienteImagen}><FiChevronRight size={50} /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

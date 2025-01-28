
import './galeriaImagenes.css'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';

export default function GaleriaImagenes() {



    useEffect(() => {
        const hash = window.location.hash.slice(1); // Remueve el "#" del fragmento
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                offset: 300,
                smooth: 'easeInOutQuad',
            });
        }

    }, []);

    return (
        <Element name="galeriaImagenes">
            <div className='galeriaDeImagenesContainer'>
                <h2 className='tituloGaleria' >GALERÍA DE IMAGENES</h2>
                <div className='galeriaImagenes'>
                    <div className='tarjetaAnio anio2023'>
                        <h3>2023</h3>
                        <Link to="/galeria2023#galeria2023">
                            <button>Ver Recuerdos</button>
                        </Link>
                    </div>
                    <div className='tarjetaAnio anio2024'>
                        <h3>2024</h3>
                        <Link to="/galeria2024#galeria2024">
                            <button>Ver Recuerdos</button>
                        </Link>
                    </div>
                    <div className='tarjetaAnio anio2025'>
                        <h3>2025</h3>
                        <Link to="/galeria2025#galeria2025">
                            <button>Ver Recuerdos</button>
                        </Link>
                    </div>
                </div>
            </div>
        </Element>

    )
}

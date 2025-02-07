
import './galeriaImagenes.css'
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { scroller } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

export default function GaleriaImagenes() {



    useEffect(() => {
        const hash = window.location.hash.slice(1); // Remueve el "#" del fragmento
        if (hash) {
            scroller.scrollTo(hash, {
                duration: 800,
                offset: -50,
                smooth: 'easeInOutQuad',
            });
        }

    }, []);

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });

    const { ref: galeriaImagenesRef, inView: galeriaImagenesInView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <Element name="galeriaImagenes">
            <div className='galeriaDeImagenesContainer'>
                <h2 ref={titleRef} className={`tituloGaleria ${titleInView ? "visible" : "hidden"}`}>GALERÍA DE IMAGENES</h2>
                <div ref={galeriaImagenesRef} className={`galeriaImagenes ${galeriaImagenesInView ? "visible" : "hidden"}`}>
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

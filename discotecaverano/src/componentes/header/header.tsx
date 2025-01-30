import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from "react-router-dom";
import { Element } from 'react-scroll';
import './header.css'

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [textoActual, setTextoActual] = useState(0);
    const [esVisible, setEsVisible] = useState(true);


    const textos = [
        "AURORA PARADISE",
        "DESDE 1990 SIENDO LA MAYOR DISCOTECA DE VERANO Y REFERENCIA DE LA ZONA",
    ];


    // Detectar el scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Alternar visibilidad y textos en el ciclo
    useEffect(() => {
        let step = 0; // Controla los 3 estados: mostrar texto 1, ocultar, mostrar texto 2
        const interval = setInterval(() => {



            if (step === 0) {

                setTextoActual(0);
                setEsVisible(true); // Mostrar texto 2


            } else if (step === 1) {
                setEsVisible(false); // Esconder texto
            } else if (step === 2) {

                setTextoActual(1);
                setEsVisible(true); // Mostrar texto 2

            }
            step = (step + 1) % 3; // Ciclo entre 0, 1, 2
        }, 5000); // Cada paso dura 5 segundos

        return () => clearInterval(interval);
    }, []);


    // Hook para agregar el evento de scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Alternar menú móvil
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };





    return (
        <>  <Element name="home">
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo */}
                <div className="logo">
                    <ScrollLink to="home" smooth={true} duration={1000} offset={-90} className="nav-link">
                        <Link to="/">
                            <img src="logos/logo.png" alt="Logo Aurora Paradise" className="logo-image"></img>
                        </Link>
                    </ScrollLink>

                </div>

                {/* Navigation */}
                <nav className="nav">
                    <ScrollLink to="eventos" smooth={true} duration={500} offset={-120} className="nav-link">
                        <Link className="nav-link" to="/">
                            Eventos
                        </Link>
                    </ScrollLink>
                    <a href="https://www.fourvenues.com/es/discotecas-madrid/events" target="_blank" className="nav-link">Entradas</a>
                    <ScrollLink to="galeriaImagenes" smooth={true} duration={500} offset={-90} className="nav-link">
                        Galería
                    </ScrollLink>
                    <ScrollLink to="contacto" smooth={true} duration={500} offset={-90} className="nav-link">
                        Contacto
                    </ScrollLink>
                </nav>

                {/* Botón menú móvil */}
                <div className="menu-icon" onClick={toggleMenu}>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                    <div className={`line ${menuOpen ? 'open' : ''}`}></div>
                </div>

                {/* Menú móvil */}
                <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
                    <ScrollLink to="eventos" smooth={true} duration={500} offset={-90} className="nav-mobile-link" onClick={toggleMenu}>Eventos</ScrollLink>
                    <a href="https://www.fourvenues.com/es/discotecas-madrid/events" target="_blank" className="nav-mobile-link" onClick={toggleMenu}>Entradas</a>
                    <ScrollLink to="galeriaImagenes" smooth={true} duration={500} offset={-90} className="nav-mobile-link" onClick={toggleMenu}>Galería</ScrollLink>
                    <ScrollLink to="contacto" smooth={true} duration={500} offset={-70} className="nav-mobile-link" onClick={toggleMenu}>Contacto</ScrollLink>
                </nav>
            </header>

            {/* Hero */}
            <div className="hero">
                <video
                    className="hero-video"
                    src="/videos/videoHeader.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Mostrar el texto solo si `isVisible` es true */}
                {esVisible && <h1 className="hero-text">{textos[textoActual]}</h1>}
            </div >
        </Element>
        </>
    );
};

export default Header;

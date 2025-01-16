import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Element } from 'react-scroll';
import './header.css'

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    // Detectar el scroll
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

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
                    <ScrollLink to="home" smooth={true} duration={500} offset={-90} className="nav-link">
                        <img src="logos/logo.png" alt="Logo Aurora Paradise" className="logo-image"></img>
                    </ScrollLink>

                </div>

                {/* Navigation */}
                <nav className="nav">
                    <ScrollLink to="eventos" smooth={true} duration={500} offset={-90} className="nav-link">Eventos</ScrollLink>
                    <a href="https://www.fourvenues.com/es/discotecas-madrid/events" target="_blank" className="nav-link">Entradas</a>
                    <a href="#gallery" className="nav-link">Galería</a>
                    <a href="#contact" className="nav-link">Contacto</a>
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
                    <a href="#gallery" className="nav-mobile-link" onClick={toggleMenu}>Galería</a>
                    <a href="#contact" className="nav-mobile-link" onClick={toggleMenu}>Contacto</a>
                </nav>
            </header>

            {/* Hero */}
            <div className="hero">
                <h1 className="hero-text">DESDE 1990 SIENDO LA MAYOR DISCOTECA DE VERANO Y REFERENCIA DE LA ZONA</h1>
            </div >
        </Element>
        </>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';
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

    // Redirección para las redes sociales
    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo */}
                <div className="logo">
                    <img src="logos/logo.png" alt="Logo Aurora Paradise" className="logo-image" onClick={() => handleRedirect('#home')} />
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <a href="#home" className="nav-link">Inicio</a>
                    <a href="#eventos" className="nav-link">Eventos</a>
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
                    <a href="#home" className="nav-mobile-link" onClick={toggleMenu}>Inicio</a>
                    <a href="#eventos" className="nav-mobile-link" onClick={toggleMenu}>Eventos</a>
                    <a href="#tickets" className="nav-mobile-link" onClick={toggleMenu}>Entradas</a>
                    <a href="#gallery" className="nav-mobile-link" onClick={toggleMenu}>Galería</a>
                    <a href="#contact" className="nav-mobile-link" onClick={toggleMenu}>Contacto</a>
                </nav>
            </header>

            {/* Hero */}
            <div className="hero" id="home">
                <h1 className="hero-text">DESDE 1990 SIENDO LA MAYOR DISCOTECA DE VERANO Y REFERENCIA DE LA ZONA</h1>
            </div >
        </>
    );
};

export default Header;

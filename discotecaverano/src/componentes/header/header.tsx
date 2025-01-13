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

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                {/* Logo */}
                <div className="logo">
                    <img src="logos/logo.png" alt="Logo Chancla" className="logo-image" />
                </div>

                {/* Navigation */}
                <nav className="nav">
                    <a href="#home" className="nav-link">Horarios</a>
                    <a href="#about" className="nav-link">Tarifas</a>
                    <a href="#services" className="nav-link">Clases</a>
                    <a href="#gallery" className="nav-link">Instalaciones</a>
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
                    <a href="#home" className="nav-mobile-link">Horarios</a>
                    <a href="#about" className="nav-mobile-link">Tarifas</a>
                    <a href="#services" className="nav-mobile-link">Clases</a>
                    <a href="#gallery" className="nav-mobile-link">Instalaciones</a>
                    <a href="#contact" className="nav-mobile-link">Contacto</a>
                </nav>
            </header>

            {/* Hero */}
            <div className="hero">
                <h1 className="hero-text">DESDE 1990 SIENDO LA MAYOR DISCOTECA DE VERANO Y REFERENCIA DE LA ZONA</h1>
            </div>
        </>
    );
};

export default Header;


import { useState, useEffect } from 'react';
import './bannerCookies.css';


export default function BannerCookies() {

    const [esVisible, setVisible] = useState(true);

    const aceptarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'true');

        // Obtener la ubicación del usuario
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const locationCookie = `userLocation=${latitude},${longitude}; path=/; max-age=604800;`; // Expira en 7 días
                    document.cookie = locationCookie;
                    console.log("Ubicación almacenada como cookie:", locationCookie);
                },
                (error) => {
                    console.error("Error obteniendo la ubicación:", error.message);
                }
            );
        } else {
            console.warn("La geolocalización no está soportada por este navegador.");
        }
    }


    const rechazarCookies = () => {
        setVisible(false);
        localStorage.setItem('cookiesAceptadas', 'false');
    }

    useEffect(() => {
        const cookies = localStorage.getItem('cookiesAceptadas');
        if (cookies === 'true') {
            setVisible(false);
        }
    }, []);

    return (

        esVisible && (
            <div>
                <div className="cookieBanner">
                    <p className='titulo'>🍪 Este sitio web utiliza cookies para mejorar su experiencia 🍪</p>
                    <p className='texto'> Usamos cookies para mejorar la experiencia del usuario, realizar análisis estadísticos y
                        obtener la ubicación de los usuarios con fines de personalización.<br /> ¿Aceptas el uso de cookies?</p>
                    <div className='cookieButtons'>
                        <button className="cookieButton" onClick={aceptarCookies}>Aceptar</button>
                        <button className="cookieButton rechazar" onClick={rechazarCookies}>Rechazar</button>
                    </div>
                </div>
            </div>

        )
    )
}

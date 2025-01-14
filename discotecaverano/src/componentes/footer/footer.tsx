
import './footer.css';

import { Link } from "react-router-dom";

export default function Footer() {
    // Redirección para las redes sociales
    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    return (
        <footer>
            <div className='logoRSSS'>
                <img src="/logos/logo.png" alt="Logo" onClick={() => handleRedirect('#home')} />
                <div className='rsss'>
                    <img
                        src="/logos/instagramLogo.png"
                        id='instagram'
                        alt="Instagram"
                        onClick={() => handleRedirect('https://www.instagram.com/dieegooo.9/')}
                    />
                    <img
                        src="/logos/tiktokLogo.png"
                        id='tiktok'
                        alt="TikTok"
                        onClick={() => handleRedirect('https://www.tiktok.com/@diegokiklas?lang=es')}
                    />
                    <img
                        src="/logos/whatsappLogo.png"
                        id='whatsapp'
                        alt="WhatsApp"
                        onClick={() => handleRedirect('https://wa.me/628147132')}
                    />
                    <img
                        src="/logos/xLogo.png"
                        id='x'
                        alt="X"
                        onClick={() => handleRedirect('https://x.com/Dieegooo09')}
                    />
                </div>
            </div>
            <div className='copy'>
                <p>©2024 Aurora Paradise, Todos los derechos reservados.</p>
                <p>Creado por Diego Arroyo González</p>
            </div>
            <div className='informacionLegal'>
                <h2>Información Legal</h2>
                <hr />
                <Link className="enlaceFooter" to="/legalNotice">Aviso Legal</Link>
                <Link className="enlaceFooter" to="#">Política de Privacidad</Link>
                <Link className="enlaceFooter" to="#">Política de Cookies</Link>
            </div>
        </footer>
    );
}

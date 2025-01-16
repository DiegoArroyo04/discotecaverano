import './politicaCookies.css'
import { Link } from "react-router-dom";
export default function PoliticaCookies() {

    return (
        <div className='politicaCookies'>
            <h1>Política de Cookies</h1>
            <p>
                En Aurora Paradise, utilizamos cookies para mejorar la experiencia de navegación en nuestro sitio web. Al continuar navegando en este sitio, usted acepta el uso de cookies conforme a nuestra política. Si no está de acuerdo con el uso de cookies, puede desactivarlas o ajustar la configuración de su navegador.
            </p>
            <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Estas cookies nos permiten reconocer su dispositivo y recordarle, de modo que podamos ofrecerle una experiencia personalizada y optimizada.
            </p>
            <p>
                Utilizamos las cookies para mejorar la funcionalidad de nuestro sitio web, analizar la actividad de los usuarios, y ofrecer contenido y anuncios relevantes. Algunas cookies son esenciales para el funcionamiento del sitio, mientras que otras nos permiten realizar un seguimiento de sus preferencias y comportamientos.
            </p>
            <p>
                Usted tiene la opción de configurar su navegador para rechazar las cookies o recibir un aviso cuando se envíen cookies. Sin embargo, tenga en cuenta que algunas características de nuestro sitio web pueden no funcionar correctamente si desactiva las cookies.
            </p>
            <p>
                Para obtener más información sobre cómo utilizamos las cookies y cómo puede gestionarlas, consulte nuestra Política de Privacidad.
            </p>
            <p>
                Si tiene alguna pregunta sobre nuestra Política de Cookies, no dude en contactarnos a través de diegoarroyogonzalez04@gmail.com.
            </p>
            <Link to="/">
                VOLVER AL INICIO
            </Link>
        </div>
    )
}

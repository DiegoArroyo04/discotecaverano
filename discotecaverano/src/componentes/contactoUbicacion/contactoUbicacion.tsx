
import './contactoUbicacion.css'

export default function ContactoUbicacion() {


    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/aurora.disco', '_blank');
    };

    return (
        <div className='contactoUbicacion'>
            <h2 className="tituloPatrocinadores">SOBRE NOSOTROS</h2>
            <div className='ubicacionInstagram'>
                <div className="instagram" onClick={handleInstagramClick}>
                    <h2>¡Siguenos En Instagram!</h2>
                    <h3>@aurora.disco</h3>
                    <div className='contactoIcono'>
                    </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.971985440785!2d-3.7567349512505555!3d40.38731349804063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd418935431589bd%3A0xe6cbcd858e9ec393!2sDiscoteca%20Paradise!5e0!3m2!1ses!2ses!4v1736927858142!5m2!1ses!2ses"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>


            </div>

        </div>
    )
}

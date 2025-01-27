import { useState } from 'react';
import './modalHome.css'


type Evento = {
  title: string;
  description: string;
  fecha: string;
  imageUrl: string;
  videoUrl: string;
  entradas: string;
};

const ultimoEvento: Evento = {
  title: 'Neon Fire Festival con DJ Blaze',
  description: 'Prepárate para una noche explosiva en AURORA PARADISE con la presencia de DJ Blaze, quien encenderá la pista de baile con los mejores beats de la temporada. Sumérgete en una atmósfera electrizante con luces neón y una energía sin igual. Aprovecha nuestra oferta especial: Entrada con consumicion 10$. ¡No te pierdas esta noche inolvidable!',
  fecha: 'Viernes, 7 de Junio,A partir de las 22:00',
  imageUrl: '../../imagenes/evento1.png',
  videoUrl: 'ZN631iYm7cM?si=XPe-MuOvTJICsccj',
  entradas: 'https://www.fourvenues.com/es/discotecas-madrid/events/saturday-night-01-02-2025-JEAV'

}

export default function ModalHome() {


  // Estado para controlar la visibilidad del modal
  const [modalAbierto, setModalAbierto] = useState<boolean>(true);

  // Estado para manejar si la tarjeta está girada
  const [tarjetaGirada, setTarjetaGirada] = useState(false);

  // Función para cerrar el modal
  const cerrarModal = () => {
    setModalAbierto(false);  // Cerramos el modal
    setTarjetaGirada(false);
  };

  const girarTarjeta = () => {
    setTarjetaGirada(!tarjetaGirada);
  };

  // Redirección Entradas
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };
  return (
    <div>
      {modalAbierto && (
        <div className="containerCartelGrande" onClick={cerrarModal}>
          <h1 className='eventoPopUpTitulo'>PRÓXIMO EVENTO</h1>
          <div className="cartelGrande" onClick={(e) => e.stopPropagation()}>
            <div className={`flip-card ${tarjetaGirada ? 'flipped' : ''}`}>
              <div className="flip-card-inner">
                <div className="popUpDelante">
                  <img src={ultimoEvento.imageUrl} alt={ultimoEvento.title} className="imagenGrandePopUp" />
                  <button className='botonPopUp' onClick={girarTarjeta}>MÁS INFORMACIÓN</button>
                </div>
                <div className="flip-card-back">
                  <button className="cerrar" onClick={cerrarModal}>X</button>
                  <h3 className='eventoTitulo'>{ultimoEvento.title}</h3>
                  <p>{ultimoEvento.description}</p>
                  <p>No está permitida la venta de bebidas alcohólicas a menores de 18 años.<br />Entrada Prohibida para menores de 16 años </p>
                  <p className='fecha'>{ultimoEvento.fecha}</p>
                  <iframe
                    src={`https://www.youtube.com/embed/${ultimoEvento.videoUrl}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="videoIframe">
                  </iframe>
                  <button className='botonComprar' onClick={() => handleRedirect(`${ultimoEvento.entradas}`)}>Comprar Entradas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}  

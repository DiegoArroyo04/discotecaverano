import React, { useState } from 'react';
import './eventos.css'

type Evento = {
    title: string;
    description: string;
    fecha: string;
    imageUrl: string;
    videoUrl: string;
};

const eventosLista: Evento[] = [
    {
        title: 'Neon Fire Festival con DJ Blaze',
        description: 'Prepárate para una noche explosiva en AURORA PARADISE con la presencia de DJ Blaze, quien encenderá la pista de baile con los mejores beats de la temporada. Sumérgete en una atmósfera electrizante con luces neón y una energía sin igual. Aprovecha nuestra oferta especial: Entrada con consumicion 10$. ¡No te pierdas esta noche inolvidable!',
        fecha: 'Viernes, 7 de Junio,A partir de las 22:00',
        imageUrl: '../../imagenes/evento1.png',
        videoUrl: 'ZN631iYm7cM?si=XPe-MuOvTJICsccj'
    },
    {

        title: 'Retro Beats Festival con DJ Pastis',
        description: 'Vuelve al pasado con los sonidos más icónicos en la Retro Beats Festival en AURORA PARADISE. DJ Pastis te llevará en un viaje musical lleno de nostalgia y ritmos clásicos con un toque moderno. Disfruta de un ambiente lleno de luces neón vibrantes y una oferta especial: 5$ la entrada para los 50 primeros en entrar. ¡Ven a revivir los mejores momentos!',
        fecha: ' Viernes, 21 de Junio,A partir de las 22:00',
        imageUrl: '../../imagenes/evento2.png',
        videoUrl: 'D6ypkCZvz7s?si=D8WLhvjQ_OB5v8EZ'
    },
    {

        title: 'Midnight Groove Experience con DJ Groove',
        description: 'Déjate llevar por las vibraciones profundas del Midnight Groove Experience en AURORA PARADISE. DJ Groove traerá los ritmos más intensos para mantenerte bailando hasta el amanecer. Disfruta de una noche llena de energía, luces neón y buena música. No te pierdas nuestra oferta especial: Entrada gratis. ¡Ven a sentir el groove con nosotros!',
        fecha: ' Viernes, 21 de Junio,A partir de las 23:30',
        imageUrl: '../../imagenes/evento3.png',
        videoUrl: '-syFI6iYzuY?si=f-KyekKV9of2Petp'
    }
];


export default function eventos() {

    // Estado para controlar la visibilidad del modal
    const [modalAbierto, setModalAbierto] = useState<boolean>(false);
    // Estado para manejar si la tarjeta está girada
    const [tarjetaGirada, setTarjetaGirada] = useState(false);

    // Estado para almacenar el evento seleccionado
    const [eventoSeleccionado, setEventoSeleccionado] = useState<Evento | null>(null);

    // Función para abrir el modal y mostrar la imagen del evento seleccionado
    const abrirModal = (evento: Evento) => {
        setEventoSeleccionado(evento);
        setModalAbierto(true);  // Abrimos el modal
        setTarjetaGirada(false);
    };

    // Función para cerrar el modal
    const cerrarModal = () => {
        setModalAbierto(false);  // Cerramos el modal
        setEventoSeleccionado(null);  // Limpiamos el evento seleccionado
        setTarjetaGirada(false);
    };

    const girarTarjeta = () => {
        setTarjetaGirada(!tarjetaGirada);
    };

    return (


        <div className='eventos'>
            <h2 className='eventoEncabezado'>EVENTOS</h2>
            <div className="imagenesEventos">
                {eventosLista.map((evento, index) => (
                    <div key={index} className='evento-card'>
                        <img src={evento.imageUrl}
                            alt={evento.title}
                            className='evento-image'
                            onClick={() => abrirModal(evento)} />
                    </div>
                ))}
            </div>


            {modalAbierto && eventoSeleccionado && (
                <div className="containerCartelGrande" onClick={cerrarModal}>
                    <div className="cartelGrande" onClick={(e) => e.stopPropagation()}>
                        <div className={`flip-card ${tarjetaGirada ? 'flipped' : ''}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <img src={eventoSeleccionado.imageUrl} alt={eventoSeleccionado.title} className="imagenGrande" />
                                    <button className='boton' onClick={girarTarjeta}>VER MÁS INFORMACIÓN SOBRE EL EVENTO</button>
                                </div>
                                <div className="flip-card-back">
                                    <h3 className='eventoTitulo'>{eventoSeleccionado.title}</h3>
                                    <p>{eventoSeleccionado.description}</p>
                                    <p>Entrada Prohibida para menores de 16 años.</p>
                                    <p>No esta permitida la venta de bebidas alcohólicas a menores de 18 años.</p>
                                    <p className='fecha'>{eventoSeleccionado.fecha}</p>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${eventoSeleccionado.videoUrl}`}
                                        frameBorder="0"
                                        allow="autoplay; encrypted-media"
                                        allowFullScreen
                                        className="videoIframe">
                                    </iframe>
                                    <button className='botonCerrar' onClick={cerrarModal}>Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>

    )
};

import { useState } from 'react';
import './eventos.css'
import { Element } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

type Evento = {
    title: string;
    description: string;
    fecha: string;
    fechaCorta: string;
    imageUrl: string;
    videoUrl: string;
    entradas: string;

};

const eventosLista: Evento[] = [
    {
        title: 'Neon Fire Festival con DJ Blaze',
        description: 'Prepárate para una noche explosiva en AURORA PARADISE con la presencia de DJ Blaze, quien encenderá la pista de baile con los mejores beats de la temporada. Sumérgete en una atmósfera electrizante con luces neón y una energía sin igual. Aprovecha nuestra oferta especial: Entrada con consumicion 10$. ¡No te pierdas esta noche inolvidable!',
        fecha: 'Viernes, 7 de Junio,A partir de las 22:00',
        fechaCorta: 'Viernes, 7 de Junio',
        imageUrl: '../../imagenes/evento1.png',
        videoUrl: 'ZN631iYm7cM?si=XPe-MuOvTJICsccj',
        entradas: 'https://www.fourvenues.com/es/discotecas-madrid/events/saturday-night-01-02-2025-JEAV'
    },
    {

        title: 'Retro Beats Festival con DJ Pastis',
        description: 'Vuelve al pasado con los sonidos más icónicos en la Retro Beats Festival en AURORA PARADISE. DJ Pastis te llevará en un viaje musical lleno de nostalgia y ritmos clásicos con un toque moderno. Disfruta de un ambiente lleno de luces neón vibrantes y una oferta especial: 5$ la entrada para los 50 primeros en entrar. ¡Ven a revivir los mejores momentos!',
        fecha: ' Viernes, 21 de Junio,A partir de las 22:00',
        fechaCorta: 'Viernes, 21 de Junio',
        imageUrl: '../../imagenes/evento2.png',
        videoUrl: 'D6ypkCZvz7s?si=D8WLhvjQ_OB5v8EZ',
        entradas: 'https://www.fourvenues.com/es/discotecas-madrid/events/miercoles-teatro-barcelo-05-02-2025-MQ9O'
    },
    {

        title: 'Midnight Groove Experience con DJ Groove',
        description: 'Déjate llevar por las vibraciones profundas del Midnight Groove Experience en AURORA PARADISE. DJ Groove traerá los ritmos más intensos para mantenerte bailando hasta el amanecer. Disfruta de una noche llena de energía, luces neón y buena música. No te pierdas nuestra oferta especial: Entrada gratis. ¡Ven a sentir el groove con nosotros!',
        fecha: ' Sábado, 22 de Junio,A partir de las 23:30',
        fechaCorta: 'Sábado, 22 de Junio',
        imageUrl: '../../imagenes/evento3.png',
        videoUrl: '-syFI6iYzuY?si=f-KyekKV9of2Petp',
        entradas: 'https://www.fourvenues.com/es/discotecas-madrid/events/perreolab--511-08-02-2025-2XXQ'
    }
];



function Eventos() {

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });


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

    // Redirección Entradas
    const handleRedirect = (url: string) => {
        window.location.href = url;
    };

    return (

        <Element name="eventos">
            <div className='eventos'>

                <h2 ref={titleRef} className={`eventoEncabezado ${titleInView ? "visible" : "hidden"}`}>EVENTOS</h2>

                <div className="imagenesEventos">
                    {eventosLista.map((evento, index) => {

                        //EJECUCION EN EL BUCLE PARA CADA TARJETA
                        const { ref: referenciaTarjetaEvento, inView: inViewTarjetaEvento } = useInView({
                            triggerOnce: false,
                            threshold: 0.3,
                        });

                        return (
                            <div
                                key={index}
                                ref={referenciaTarjetaEvento}
                                className={`evento-card ${inViewTarjetaEvento ? "visible" : "hidden"}`}
                            >
                                <img
                                    src={evento.imageUrl}
                                    alt={evento.title}
                                    onClick={() => abrirModal(evento)}
                                    className="evento-image"
                                />
                                <h3 className="fechaCartel">{evento.fechaCorta}</h3>
                            </div>
                        );
                    })}
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
                                        <button className="cerrar" onClick={cerrarModal}>X</button>
                                        <h3 className='eventoTitulo'>{eventoSeleccionado.title}</h3>
                                        <p>{eventoSeleccionado.description}</p>
                                        <p>No esta permitida la venta de bebidas alcohólicas a menores de 18 años.<br />Entrada Prohibida para menores de 16 años </p>
                                        <p className='fecha'>{eventoSeleccionado.fecha}</p>
                                        <iframe
                                            src={`https://www.youtube.com/embed/${eventoSeleccionado.videoUrl}`}
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media"
                                            allowFullScreen
                                            className="videoIframe">
                                        </iframe>
                                        <button className='botonComprar' onClick={() => handleRedirect(`${eventoSeleccionado.entradas}`)}>Comprar Entradas</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Element>
    )
};

export default Eventos;




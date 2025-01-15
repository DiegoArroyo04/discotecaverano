import React from 'react'
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
        title: 'Neon Fire Night con DJ Blaze',
        description: 'Prepárate para una noche explosiva en AURORA PARADISE con la presencia de DJ Blaze, quien encenderá la pista de baile con los mejores beats de la temporada. Sumérgete en una atmósfera electrizante con luces neón y una energía sin igual. Aprovecha nuestra oferta especial: Entrada con consumicion 10$. ¡No te pierdas esta noche inolvidable!',
        fecha: 'Viernes, 7 de Junio,A partir de las 22:00',
        imageUrl: '../../imagenes/evento1.png',
        videoUrl: 'ZN631iYm7cM?si=XPe-MuOvTJICsccj'
    },
    {

        title: 'Retro Beats Festival con DJ Pastis',
        description: 'Vuelve al pasado con los sonidos más icónicos en la Retro Beats Festival en AURORA PARADISE. DJ Pastis te llevará en un viaje musical lleno de nostalgia y ritmos clásicos con un toque moderno. Disfruta de un ambiente lleno de luces neón vibrantes y una oferta especial: 5$ la entrada para los 50 primeros en entrar. ¡Ven a revivir los mejores momentos!',
        fecha: 'Retro Beats Festival con DJ Pastis',
        imageUrl: 'https://via.placeholder.com/300',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {

        title: 'Pool Party',
        description: 'Disfruta de una pool party épica con DJ en vivo.',
        fecha: '15/02/2025',
        imageUrl: 'https://via.placeholder.com/300',
        videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
];


export default function eventos() {
    return (
        <div className='eventos'>
            {eventosLista.map((evento, index) => (
                <div key={index} className='evento-card'>
                    <img src={evento.imageUrl} alt={evento.title} className='evento-image' />
                    <div className='evento-info'>
                        <h3 className='evento-title'>{evento.title}</h3>
                        <p className='evento-description'>{evento.description}</p>
                        <iframe
                            src={`https://www.youtube.com/embed/${evento.videoUrl}`}
                            title={evento.title}
                            className='evento-video'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            ))}
        </div>
    )
};

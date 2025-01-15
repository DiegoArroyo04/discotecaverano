import React, { useState } from 'react';
import './modalHome.css'; // Archivo CSS para estilos

// Definimos las propiedades del próximo evento usando una interfaz
interface EventProps {
  imageUrl: string;
  title: string;
  description: string;
  date: string;
}

const modalHome: React.FC<EventProps> = ({ imageUrl, title, description, date }) => {
  // Estado para manejar la visibilidad de la ventana emergente
  const [isVisible, setIsVisible] = useState(true);

  // Función para cerrar la ventana emergente
  const handleClose = () => {
    setIsVisible(false);
  };

  // Retorna la ventana emergente solo si es visible
  return isVisible ? (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-button" onClick={handleClose}>X</button>
        <img src={imageUrl} alt={`Cartel de ${title}`} className="popup-image" />
        <h2 className="popup-title">{title}</h2>
        <p className="popup-description">{description}</p>
        <p className="popup-date">Fecha: {date}</p>
      </div>
    </div>
  ) : null;
};

export default modalHome;


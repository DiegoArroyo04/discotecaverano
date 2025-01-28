
import './galeriaImagenes.css'
import { Link } from "react-router-dom";

export default function GaleriaImagenes() {

    return (
        <div className='galeriaDeImagenesContainer'>
            <h2 className='tituloGaleria' >GALERÍA DE IMAGENES</h2>
            <div className='galeriaImagenes'>
                <div className='tarjetaAnio anio2023'>
                    <h3>2023</h3>
                    <Link to="/galeria2023">
                        <button>Ver Recuerdos</button>
                    </Link>

                </div>
                <div className='tarjetaAnio anio2024'>
                    <h3>2024</h3>
                    <Link to="/galeria2024">
                        <button>Ver Recuerdos</button>
                    </Link>
                </div>
                <div className='tarjetaAnio anio2025'>
                    <h3>2025</h3>
                    <Link to="/galeria2025">
                        <button>Ver Recuerdos</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

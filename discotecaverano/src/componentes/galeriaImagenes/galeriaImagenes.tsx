
import './galeriaImagenes.css'


export default function GaleriaImagenes() {

    return (
        <div className='galeriaDeImagenesContainer'>
            <h2 className='tituloGaleria' >GALERÍA DE IMAGENES</h2>
            <div className='galeriaImagenes'>
                <div className='tarjetaAnio anio2023'>
                    <h3>2023</h3>
                    <button>Ver Recuerdos</button>
                </div>
                <div className='tarjetaAnio anio2024'>
                    <h3>2024</h3>
                    <button>Ver Recuerdos</button>
                </div>
                <div className='tarjetaAnio anio2025'>
                    <h3>2025</h3>
                    <button>Ver Recuerdos</button>
                </div>
            </div>
        </div>
    )
}

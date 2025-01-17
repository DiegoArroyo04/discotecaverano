import './patrocinadores.css';

export default function Patrocinadores() {
    return (
        <div className="patrocinadoresSection">
            <h2 className='tituloPatrocinadores'>PATROCINADORES</h2>
            <div className="patrocinadoresGrid">
                <img src="../../../logos/logoBarcelo.png" alt="Barcelo" className="logoBarcelo" />
                <img src="../../../logos/heinekenLogo.png" alt="Heineken" className="logoHeineken" />
                <img src="../../../logos/estrellaGaliciaLogo.png" alt="Estrella Galicia" className="logoEstrellaGalicia" />
            </div>
        </div>
    );
}
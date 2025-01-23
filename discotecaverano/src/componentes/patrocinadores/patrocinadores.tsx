import './patrocinadores.css';
import { useInView } from 'react-intersection-observer';

export default function Patrocinadores() {

    const { ref: patrocinadoresRef, inView: patrocinadoresInView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const { ref: titleRef, inView: titleInView } = useInView({
        triggerOnce: false,
        threshold: 0.6,
    });


    return (
        <div className="patrocinadoresSection">
            <h2 ref={titleRef} className={`tituloPatrocinadores ${titleInView ? "visible" : "hidden"}`}>PATROCINADORES</h2>
            <div ref={patrocinadoresRef} className={`patrocinadoresGrid ${patrocinadoresInView ? "visible" : "hidden"}`}>
                <img src="../../../logos/logoBarcelo.png" alt="Barcelo" className="logoBarcelo" />
                <img src="../../../logos/heinekenLogo.png" alt="Heineken" className="logoHeineken" />
                <img src="../../../logos/estrellaGaliciaLogo.png" alt="Estrella Galicia" className="logoEstrellaGalicia" />
            </div>
        </div>
    );
}
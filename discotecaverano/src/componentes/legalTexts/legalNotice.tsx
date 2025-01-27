
import { useEffect } from 'react';
import './textosLegales.css';
import { Link } from "react-router-dom";

export default function LegalNotice() {
    useEffect(() => {
        // Desplazar automáticamente hacia arriba cuando el componente se monta o recarga
        window.scrollTo(0, 0);
    }, []); // El array vacío significa que solo se ejecuta una vez al montarse el componente

    return (
        <div className="legalNotice">
            <h1>Aviso Legal</h1>
            <p>
                Este sitio web es operado por Aurora Paradise. El acceso a este sitio web está condicionado a la aceptación de los términos y condiciones
                que se describen a continuación. Si continúa utilizando este sitio web, acepta todos los términos de uso.
            </p>
            <p>
                Aurora Paradise se reserva el derecho de modificar, en cualquier momento y sin previo aviso, la presentación y configuración del sitio web, así como los presentes Términos de Uso.
            </p>
            <p>
                Para cualquier consulta, por favor contacte con nosotros en diegoarroyogonzalez04@gmail.com.
            </p>
            <Link to="/">
                VOLVER AL INICIO
            </Link>
        </div>
    );
}

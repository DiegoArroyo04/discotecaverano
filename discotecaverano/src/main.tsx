import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './index.css'
import Header from './componentes/header/header.tsx'
import Footer from './componentes/footer/footer.tsx'
import AvisoLegal from './componentes/legalTexts/avisoLegal/legalNotice.tsx'
import PoliticaCookies from './componentes/legalTexts/politicaCookies/politicaCookies.tsx'
import PoliticaPrivacidad from './componentes/legalTexts/politicaPrivacidad/politicaPrivacidad.tsx'
import ContactoUbicacion from './componentes/contactoUbicacion/contactoUbicacion.tsx'
import Eventos from './componentes/eventos/eventos.tsx'
import UltimoEvento from './componentes/modalHome/modalHome.tsx'
import Patrocinadores from './componentes/patrocinadores/patrocinadores.tsx';
import GaleriaImagenes from './componentes/galeriaImagenes/galeriaImagenes.tsx';
import Galeria2023 from './componentes/galeriaImagenes/2023/galeria2023.tsx'



const Preloader: React.FC = () => {
  return (
    <div className="preloader">
      <div className="logo-container">
        <img src="/logos/logo.png" alt="Logo" className='logo_preloader' />
        <div className='shadow'></div>
      </div>
    </div>
  );

}


const Home: React.FC = () => {

  useEffect(() => {
    // Desplazar automáticamente hacia arriba cuando el componente se monta o recarga
    window.scrollTo(0, 0);
  }, []); // El array vacío significa que solo se ejecuta una vez al montarse el componente

  return (

    <>
      {/* Aquí va tu contenido */}
      <Header />
      <UltimoEvento />
      <Eventos />
      <GaleriaImagenes />
      <Patrocinadores />
      <ContactoUbicacion />
      <Footer />
    </>

  );

}

export default Home;

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time of at least 2 seconds
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (

    <Router>
      {isLoading ? (
        <Preloader />
      ) : (

        <Routes>
          {/*HOME*/}
          <Route path="/" element={<Home />} />

          {/*GALERIA 2023*/}
          <Route path="/galeria2023" element={<Galeria2023 />} />

          {/*AVISO LEGAL*/}
          <Route path="/avisoLegal" element={<AvisoLegal />} />

          {/*POLITICA PRIVACIDAD*/}
          <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />

          {/*POLITICA COOKIES*/}
          <Route path="/politicaCookies" element={<PoliticaCookies />} />

        </Routes>
      )}
    </Router>

  )
};

// Renderizar la aplicación
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement); // Inicialización única
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}




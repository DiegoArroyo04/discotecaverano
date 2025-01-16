import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useEffect } from "react";
import './index.css'
import Header from './componentes/header/header.tsx'
import Footer from './componentes/footer/footer.tsx'
import AvisoLegal from './componentes/legalTexts/avisoLegal/legalNotice.tsx'
import PoliticaCookies from './componentes/legalTexts/politicaCookies/politicaCookies.tsx'
import PoliticaPrivacidad from './componentes/legalTexts/politicaPrivacidad/politicaPrivacidad.tsx'
import ContactoUbicacion from './componentes/contactoUbicacion/contactoUbicacion.tsx'
import Eventos from './componentes/eventos/eventos.tsx'
import UltimoEvento from './componentes/modalHome/modalHome.tsx'

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
      <ContactoUbicacion />
      <Footer />
    </>
  );
}

export default Home;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        {/*HOME*/}
        <Route path="/" element={<Home />} />

        {/*AVISO LEGAL*/}
        <Route path="/avisoLegal" element={<AvisoLegal />} />

        {/*POLITICA PRIVACIDAD*/}
        <Route path="/politicaPrivacidad" element={<PoliticaPrivacidad />} />

        {/*POLITICA COOKIES*/}
        <Route path="/politicaCookies" element={<PoliticaCookies />} />

      </Routes>
    </Router>
  </StrictMode>,
)

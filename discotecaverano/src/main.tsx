import { StrictMode } from 'react'
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

const Home: React.FC = () => (
  <>
    <Header />
    <Eventos />
    <ContactoUbicacion />
    <Footer />

  </>
);

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

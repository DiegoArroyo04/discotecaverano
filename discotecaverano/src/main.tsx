import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import Header from './componentes/header/header.tsx'
import Footer from './componentes/footer/footer.tsx'
import AvisoLegal from './componentes/legalTexts/avisoLegal/legalNotice.tsx'

const Home: React.FC = () => (
  <>
    <Header />
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


      </Routes>
    </Router>
  </StrictMode>,
)

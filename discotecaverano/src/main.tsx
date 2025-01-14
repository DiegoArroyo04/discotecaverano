import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import './index.css'
import Header from './componentes/header/header.tsx'
import Footer from './componentes/footer/footer.tsx'
import LegalNotice from './componentes/legalTexts/legalNotice.tsx'

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
        <Route path="/legalNotice" element={<LegalNotice />} />

      </Routes>
    </Router>
  </StrictMode>,
)

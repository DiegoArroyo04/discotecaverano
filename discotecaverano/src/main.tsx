import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './componentes/header/header.tsx'
import Footer from './componentes/footer/footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Footer />
  </StrictMode>,
)

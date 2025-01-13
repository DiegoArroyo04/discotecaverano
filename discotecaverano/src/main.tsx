import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SeccionPrincipal from './componentes/seccionPrincipal/seccionPrincipal.tsx'
import Header from './componentes/header/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <SeccionPrincipal />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SeccionPrincipal from './componentes/seccionPrincipal/seccionPrincipal.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SeccionPrincipal />
  </StrictMode>,
)

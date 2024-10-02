import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import BotonTexto from './BotonTexto'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BotonTexto />
  </StrictMode>,
)

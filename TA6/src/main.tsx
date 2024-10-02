import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import IngresarLista from './IngresarLista'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IngresarLista />
  </StrictMode>,
)

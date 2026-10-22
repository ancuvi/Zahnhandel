import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const wurzel = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Vorgerenderte Seiten (scripts/vorrendern.mjs) werden hydriert, sonst normal gerendert
if (wurzel.hasChildNodes()) {
  hydrateRoot(wurzel, app)
} else {
  createRoot(wurzel).render(app)
}

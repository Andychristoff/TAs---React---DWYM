import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AutenticacionProvider } from './Components/ContextoAutenticacion';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AutenticacionProvider>
      <App />
    </AutenticacionProvider>
  </StrictMode>
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './scss/ekiticons.css'
import './scss/custom.scss'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

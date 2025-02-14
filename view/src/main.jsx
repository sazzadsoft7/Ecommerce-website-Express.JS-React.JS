import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// bootstrap css
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// custom css
import './assets/css/main.css'
import './assets/css/animate.min.css'

// skeleton loading animation css
import 'react-loading-skeleton/dist/skeleton.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

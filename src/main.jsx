import { StrictMode } from 'react'  //importing component
import { createRoot } from 'react-dom/client' //importing component
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from './pages/Login.jsx'
import App from './App.jsx'
import { Route, Routes} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <BrowserRouter>
      <App className="font-Montserrat " />

    </BrowserRouter>
  
  </StrictMode>,
)

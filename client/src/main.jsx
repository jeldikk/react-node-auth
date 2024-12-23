import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css'
import App from './App.jsx'
import { AuthDetailsContextProvider } from './context/auth-details.context.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthDetailsContextProvider>
        <App />
      </AuthDetailsContextProvider>
    </BrowserRouter>
  </StrictMode>,
)

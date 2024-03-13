import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContactContextProvider } from './context/ContactContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

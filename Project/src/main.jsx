import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContactContextProvider } from './context/ContactContext.jsx'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './features/contacts/contactsSlice.js'

const store = configureStore({
  reducer:{
    contacts: contactsReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ContactContextProvider>
        <App />
      </ContactContextProvider>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

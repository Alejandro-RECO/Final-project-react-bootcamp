import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ContactContextProvider } from './context/ContactContext.jsx'

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import contactsReducer from './features/contacts/contactsSlice.js'
import createContactReducer from './features/contacts/createContactSlice.js'
import authReducer from './features/auth/authSlice.js'
import userReducer from './features/auth/userSlice.js'


const store = configureStore({
  reducer:{
    contacts: contactsReducer,
    auth: authReducer,
    user: userReducer,
    createContact: createContactReducer
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

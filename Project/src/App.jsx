import { 
  BrowserRouter, 
  Routes, 
  Route, 
  useNavigate} 
from 'react-router-dom'
import { useEffect } from 'react'
import { supabase } from './services/client'


import './App.scss'

import LayoutPage from './layout'
import OverviewPage from './pages/overview'
import ContactsPage from './pages/contacts'
import FavoritesPage from './pages/favorites'
import NoPage404 from './pages/noPage'
import LoginPage from './pages/login'


const App = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    supabase.auth.onAuthStateChange((event,session) =>{
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })

  }, [])

  return (
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<OverviewPage/>}/>
          <Route path='contacts' element={<ContactsPage/>}/>
          <Route path='favorites' element={<FavoritesPage/>}/>
        </Route>
        <Route path='*' element={<NoPage404/>}/>
      </Routes>
  )
}

export default App

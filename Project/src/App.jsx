import { useDispatch } from 'react-redux'
import { 
  Routes, 
  Route, 
  useNavigate,
  useLocation
} 
from 'react-router-dom'

import LayoutPage from './layout'
import OverviewPage from './pages/overview'
import ContactsPage from './pages/contacts'
import FavoritesPage from './pages/favorites'
import NoPage404 from './pages/noPage'
import LoginPage from './pages/login'
// import { getSesion } from './api/auth'
import { useEffect } from 'react'
import { supabase } from './services/client'
import { getUser } from './api/auth'
import { ChangeTitle } from './util/pathName'


const App = () => {

  const navigate = useNavigate()
  const dispactch = useDispatch()

  useEffect(()=>{
    // getUser(dispactch) 
    supabase.auth.onAuthStateChange((event,session) =>{
      if(!session){
        navigate('/login')
      }else{
        navigate('/')
      }
    })

  }, [])
 

  return (
    <>
    <ChangeTitle />
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<OverviewPage/>}/>
          <Route path='contacts' element={<ContactsPage/>}/>
          <Route path='favorites' element={<FavoritesPage/>}/>
        </Route>
        <Route path='*' element={<NoPage404/>}/>
      </Routes>
    </>
  )
}

export default App


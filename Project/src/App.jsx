import { 
  BrowserRouter, 
  Routes, 
  Route } 
from 'react-router-dom'

import './App.scss'

import LayoutPage from './layout'

import OverviewPage from './pages/overview'
import ContactsPage from './pages/contacts'
import FavoritesPage from './pages/favorites'
import NoPage404 from './pages/noPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<OverviewPage/>}/>
          <Route path='contacts' element={<ContactsPage/>}/>
          <Route path='favorites' element={<FavoritesPage/>}/>
        </Route>
        <Route path='*' element={<NoPage404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

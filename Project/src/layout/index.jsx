import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { supabase } from '../services/client'

const LayoutPage = () => {

  const handleLogout = () =>{
    supabase.auth.signOut()
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Overview</Link>
          </li>
          <li>
            <Link to='contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='favorites'>Favorites</Link>
          </li>
          <button onClick={handleLogout}>
            Logout
          </button>
        </ul>
      </nav>

      <Outlet/> 
    </>
  )
}

export default LayoutPage

import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutPage = () => {
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
        </ul>
      </nav>

      <Outlet/> 
    </>
  )
}

export default LayoutPage

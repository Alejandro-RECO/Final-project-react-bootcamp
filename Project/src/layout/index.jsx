import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { supabase } from '../services/client'

import styled from 'styled-components'
import { primary } from '../UI/colors'
import ContactForm from '../components/form'
import Button from '../components/buton'
// import { RiLoginCircleFill } from "react-icons/ri";

const LayoutPage = () => {

  const currentPath = location.pathname

  const handleLogout = () =>{
    supabase.auth.signOut()
  }

  return (
    <Section>
      <nav>
        <Link to={'/'}>
          <Img src="./img/globant.png" alt="Globant logo" /> 
        </Link>
        <Ul>
          <li>
            <NavLinkS exact to="/" activeClassName="active-link">Overview</NavLinkS>
          </li>
          <li>
            <NavLinkS to='contacts'>Contacts</NavLinkS>
          </li>
          <li>
            <NavLinkS to='favorites'>Favorites</NavLinkS>
          </li>
          <ContactForm/>
          <Button onClick={handleLogout}>
            Logout
          </Button>
        </Ul>
      </nav>
      <Outlet/> 
    </Section>
  )
}

export default LayoutPage



const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 2rem 2rem;

`

const Img = styled.img`
  height: 50px;
`

const Section = styled.section`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #b1b1b185;
    box-shadow: 2px 5px 15px 1px rgba(0,0,0,0.11);
    padding-left: 40px;
  }
`

const NavLinkS = styled(NavLink)`
  color: black;
  font-size: 1.1rem;
  
  &.active {
    color: ${primary};
  }
` 


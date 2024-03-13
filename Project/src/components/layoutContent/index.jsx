import React, { useEffect } from 'react'
import { useContact } from '../../context/ContactContext'
import ContactCard from '../card';

const ContactsList = () => {

  const {contacts, getContacts, loading} = useContact()

  console.log('contactos', contacts);

  useEffect(()=>{
   getContacts() 
  }, [])

  function renderContacts (){
    if(loading){
      return <p>Loading...</p>
    }else if(contacts.length === 0){
      return <p>No Contacts founds</p>
    }else{
      return(
        <div>
          {
            contacts.map((item) =>(
              <ContactCard
                key={item.id}
                contact={item}
              />
            ))
          }
        </div>
      )
    }
  }

  return <div>
    {renderContacts()}
  </div>
}

export default ContactsList

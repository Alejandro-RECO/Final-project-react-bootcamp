import React, { useEffect } from 'react'
import { useContact } from '../../context/ContactContext'
import { useDispatch, useSelector} from 'react-redux'
import { fetchContacts } from '../../api/contacts';
import { 
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure
} from '../../features/contacts/contactsSlice';

import ContactCard from '../card';

const ContactsList = () => {

  const dispatch = useDispatch()
  const { contacts, loading, error} = useSelector((state) => state.contacts);

  useEffect(()=>{
    const fetchContactsData = async ()=>{
      try{
        dispatch(fetchContactsStart())
        const data = await fetchContacts()
        dispatch(fetchContactsSuccess(data))
      }catch(e){
        dispatch(fetchContactsFailure(e))
      }
    }
    fetchContactsData()

  }, [dispatch])

  function renderContacts (){
    if(loading){
      return <p>Loading...</p>
    }else if(contacts.length === 0){
      return <p>No Contacts founds</p>
    }else if(error){
      return <p>Error: {error}</p>;
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

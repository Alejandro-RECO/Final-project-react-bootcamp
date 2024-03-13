import React, { useState } from 'react'
import { supabase } from '../../services/client'

const ContactForm = () => {
  const[loading, setLoading] = useState(false)
  const[contact, setContact] = useState([])
  const[contactData, setContactData] = useState({
    email: '',
    name: '',
    favorite: false,
    url_image: ''
  })
  
  const createContact = async () =>{
    setLoading(true)
    try{
      const user = await supabase.auth.getUser()
      const userId = user.data.user.id
      const {error, data} = await supabase
      .from('contacts')
      .insert({
        userId: userId,
        email: contactData.email,
        name: contactData.name,
        favorite: contactData.favorite,
        url_image: contactData.url_image
      })
      .select()

      if (error) throw new Error('new error',error)
      //setContact(data)
      console.log(data);
    }catch (error){
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === 'checkbox' ? checked : value;

    setContactData((prevContactData) => ({
      ...prevContactData,
      [name]: inputValue
    }));
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    createContact()

  }
  

  return (
    <form
      onSubmit={handleSubmit}
    >
     <input
        name="email"
        type="email"
        placeholder="email@example.com..."
        value={contactData.email}
        onChange={handleInputChange}
      />
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={contactData.name}
        onChange={handleInputChange}
      />
      <input
        name="url_image"
        type="text"
        placeholder="Image URL"
        value={contactData.url_image}
        onChange={handleInputChange}
      />
      <label>
        <input
          name="favorite"
          type="checkbox"
          checked={contactData.favorite}
          onChange={handleInputChange}
        />
        Favorite
      </label>
      <button 
        disabled={loading}
        type="submit">{loading ? 'Adding...' : 'Add'}</button>
    </form>
  )
}

export default ContactForm

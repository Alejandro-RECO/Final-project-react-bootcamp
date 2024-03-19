import { createContext, useContext, useState } from "react";
import { supabase } from "../services/client";

export const ContactContext = createContext();

export const useContact = () => {
  const context = useContext(ContactContext);

  if (!context)
    throw new Error("useTask must be used whithin a TaskContextProvider");
  return context;
};

export const ContactContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [adding, setAdding] = useState(false);
  const [userError, setUserError] = useState(false);
  const [openModal, setOpenModal] = useState(false)

  const handleModal = () =>{
    setOpenModal(!openModal)
  }

  const createContact = async (contactData) =>{
    setLoading(true)
    setAdding(true)
    try{
      const user = await supabase.auth.getUser()
      const userId = user.data.user.id

      if(!userId){
        setUserError(true)
        console.error('Unauthorized', {status: 401})
        throw new Error("Unauthorized")
      }
      if(!contactData.email){
        setUserError(true)
        console.error('Email is required', {status: 400})
      }
      if(!contactData.name){
        setUserError(true)
        console.error('Name is required', {status: 400})
      }
      if(!contactData.url_image){
        setUserError(true)
        console.error('Image is required', {status: 400})
      }

      const {error, data} = await supabase
      .from('contacts')
      .insert({
        userId: userId,
        email: contactData.email,
        name: contactData.name,
        last_name: contactData.last_name,
        favorite: contactData.favorite,
        url_image: contactData.url_image
      })
      .select()

      if (error) throw new Error('new error',error)

      setContacts([...contacts, ...data])

      console.log(data);
    }catch (error){
      console.error(error)
    }finally{
      setLoading(false)
      setAdding(false)
    }
  }

  return (
    <ContactContext.Provider
      value={{ contacts, adding, loading, userError, openModal, createContact, handleModal }}
    >
      {children}
    </ContactContext.Provider>
  );
};

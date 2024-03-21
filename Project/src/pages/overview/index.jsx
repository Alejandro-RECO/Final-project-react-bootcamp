import styled from 'styled-components'
import LayoutContent from '../../components/layoutContent'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../api/contacts";
import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
  fetchContactsFavorites
} from "../../features/contacts/contactsSlice";

import { RiHeart3Fill, RiCloseFill  } from "react-icons/ri";
import ContactCard from '../../components/card';
import Button from '../../components/buton/index';

import { primary } from "../../UI/colors";

const OverviewPage = () => {

  const dispatch = useDispatch();
  const { contacts, contactsFavorites, loading, error } = useSelector((state) => state.contacts);
  const { user } = useSelector((state) => state.user )
  const favorites = contactsFavorites.slice(-4)

  console.log(user.id);


  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        dispatch(fetchContactsStart());
        const data = await fetchContacts();
        dispatch(fetchContactsSuccess(data));
        const dataFavorites = await fetchContacts(true)
        dispatch(fetchContactsFavorites(dataFavorites))
      } catch (err) {
        dispatch(fetchContactsFailure(err));
      }
    };
    fetchContactsData();
  }, []);



  function renderContacts() {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>; // Muestra el mensaje de error específico
    }

    return (
      <>
        <LayoutContent title="Favorites">
          {favorites.map((item) => (
            <ContactCard key={item.id} contact={item}>
              <Button
                nobackground
                noborder={false}
                bgborder="red"
                bgtext="red"
                noshadow
                nohover
              >
                <RiCloseFill /> REMOVE
              </Button>
            </ContactCard>
          ))}
        </LayoutContent>
        <LayoutContent title="Contact List">
          {contacts.map((item) => (
            <ContactCard key={item.id} contact={item}>
              <Button
                nobackground
                noborder={false}
                bgtext={primary}
                bgborder={primary}
              >
                <RiHeart3Fill />
              </Button>
            </ContactCard>
          ))}
        </LayoutContent>
      </>
    );
  }

  return (
    <div>
      {renderContacts()}
    </div>
  );
}

export default OverviewPage



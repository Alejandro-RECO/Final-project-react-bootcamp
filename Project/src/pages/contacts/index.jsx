import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, updateContacts } from '../../api/contacts';
import styled from 'styled-components';
import ContactForm from '../../components/form';
import LayoutContent from '../../components/layoutContent';
import SketeletonPage from '../skeleton';
import ContactCard from '../../components/card';
import { RiHeart3Fill } from 'react-icons/ri';
import Button from '../../components/buton';
import { primary } from '../../UI/colors';

const ContactsPage = () => {

  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector(
    (state) => state.contacts
  );

  const { user } = useSelector((state) => state.user);

  let userId = user.id;

  useEffect(() => {
    if (userId) {
      fetchContacts(dispatch, user.id);
    }
  }, [userId]);

  useEffect(() => {
    // console.log(contacts, contactsFavorites);
  }, [contacts]);

  const renderContacts = () => {
    if (contacts.length === 0 && !loading) {
      return <h2>NO contacts here</h2>
    } else {
      return (
        <LayoutContent title="Contact List">
          {loading ? (
            <SketeletonPage count={4} />
          ) : (
            // Aca ira el skeleton de carga...
            <>
              {contacts.map((item) => (
                <ContactCard key={item.id} $contact={item}>
                  <Button
                    onClick={() =>
                      updateContacts(
                        item.id,
                        { favorite: !item.favorite },
                        userId,
                        dispatch
                      )
                    }
                    $nobackground
                    $noborder={false}
                    $bgtext={primary}
                    $bgborder={primary}
                  >
                    <RiHeart3Fill />
                  </Button>
                </ContactCard>
              ))}
            </>
          )}
        </LayoutContent>
      );
    }
  };

  function renderContactsPage() {
    if (error) {
      return <p>Error</p>;
    }
    return (
      <>
        {renderContacts()}
      </>
    );
  }


  return <div>{renderContactsPage()}</div>;
}

export default ContactsPage

const DoNotShow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  height: 100vh;
`; // Migrar los estilos a un nuevo archivo y exportarlos desde alli

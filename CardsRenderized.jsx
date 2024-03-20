import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../api/contacts";
import {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
} from "../../features/contacts/contactsSlice";

import { RiHeart3Fill, RiCloseFill  } from "react-icons/ri";
import ContactCard from "../card";
import Button from "../buton";
import styled from "styled-components";
import { primary } from "../../UI/colors";

const ContactsList = () => {
  const dispatch = useDispatch();
  const { contacts, loading, error } = useSelector((state) => state.contacts);

  useEffect(() => {
    const fetchContactsData = async () => {
      try {
        dispatch(fetchContactsStart());
        const data = await fetchContacts();
        dispatch(fetchContactsSuccess(data));
      } catch (err) {
        dispatch(fetchContactsFailure(err));
      }
    };
    fetchContactsData();
  }, [dispatch]);

  function renderContacts() {
    if (loading) {
      return <p>Loading...</p>;
    } else if (contacts.length === 0) {
      return <p>No Contacts founds</p>;
    } else if (error) {
      return <p>Error: {error}</p>;
    } else {
      return (
        <ContainerCards>
          {contacts.map((item) => (
            <>
              <ContactCard key={item.id} contact={item}>
                {item.favorite ? (
                  <Button 
                    noBackground={true}
                    noBorder={false}
                    BgBorder='red'
                    BgText='red'
                    noShadow={true}
                    noHover={true}
                  ><RiCloseFill />REMOVE</Button>
                ) : (
                  <div>
                    <Button
                      noBackground={true}
                      noBorder={false}
                      BgBorder={primary}
                      BgText={primary}
                      noShadow={true}
                      noHover={true}
                    >
                      <RiHeart3Fill />
                    </Button>
                  </div>
                )}
              </ContactCard>
            </>
          ))}
        </ContainerCards>
      );
    }
  }

  return <div>{renderContacts()}</div>;
};

export default ContactsList;

const ContainerCards = styled.section`
  padding: 3rem;
  display: flex;
  align-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

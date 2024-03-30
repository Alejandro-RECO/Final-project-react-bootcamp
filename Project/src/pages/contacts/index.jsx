import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { shuffleArray } from "../../util/util";
import {
  fetchContacts,
  updateContacts,
  deletContact,
} from "../../api/contacts";
import styled from "styled-components";
import LayoutContent from "../../components/layoutContent";
import SketeletonPage from "../skeleton";
import ContactCard from "../../components/card";
import { RiHeart3Fill, RiDeleteBin5Fill, RiCloseLine } from "react-icons/ri";
import Button from "../../components/buton";
import { primary } from "../../UI/colors";
import { getCurrentItems } from "../../util/util";
import Pagination from "../../components/pagination";

const ContactsPage = () => {
  const [currentPage, setCurrentPerPage] = useState(1);
  const itemsPerPage = 8;

  const dispatch = useDispatch();
  const { contacts, contactsFavorites, loading, error } = useSelector(
    (state) => state.contacts
  );

  // const suffleContacts = shuffleArray(allContacts);
  const { user } = useSelector((state) => state.auth);

  let userId = user.id;

  useEffect(() => {
    if (userId) {
      fetchContacts(dispatch, user.id);
    }
  }, [userId]);

  useEffect(() => {
    // console.log(contacts, contactsFavorites);
  }, [contacts, contactsFavorites]); 

  const allContacts = [...contacts, ...contactsFavorites];
  const totaPages = Math.ceil(allContacts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPerPage(page);
  };

  const handleDeletContact = (id)=>{
    deletContact(id, userId, dispatch)
  }

  const renderAllContacts = (currentItems) =>{
    return(
      <>
        {currentItems.map((item) => (
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
              $bgtext={item.favorite ? "#ba3a3a" : primary}
              $bgborder={item.favorite ? "#ba3a3a" : primary}
            >
              {item.favorite ? <RiCloseLine /> : <RiHeart3Fill />}
            </Button>
            <Button
              onClick={() => handleDeletContact(item.id)}
              $nobackground
              $noborder={false}
              $bgtext={"#ba3a3a"}
              $bgborder={"#ba3a3a"}
            >
              <RiDeleteBin5Fill />
            </Button>
          </ContactCard>
        ))}
      </>
    )
  }

  const renderContacts = () => {
    if (allContacts.length === 0 && !loading) {
      return <h2>NO contacts here</h2>;
    } else {
      const currentItems = getCurrentItems(
        allContacts,
        currentPage,
        itemsPerPage
      );

      return (
        <LayoutContent title="Contact List">
          {loading ? (
            <SketeletonPage count={8} />
          ) : (
            renderAllContacts(currentItems)
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
        <Pagination
          totalPages={totaPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  }

  return <div>{renderContactsPage()}</div>;
};

export default ContactsPage;

const DoNotShow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  height: 100vh;
  color: #ba3a3a;
`; // Migrar los estilos a un nuevo archivo y exportarlos desde alli

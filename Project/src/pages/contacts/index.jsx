import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { shuffleArray } from "../../util/util";
import {
  fetchContacts,
  updateContacts,
} from "../../api/contacts";
import LayoutContent from "../../components/layoutContent";
import SketeletonPage from "../skeleton";
import ContactCard from "../../components/card";
import { RiHeart3Fill, RiCloseLine } from "react-icons/ri";
import Button from "../../components/button";
import { primary, tertiary, white } from "../../UI/colors";
import { getCurrentItems } from "../../util/util";
import Pagination from "../../components/pagination";
import { ModalDeletContact } from "./modal";

const ContactsPage = () => {
  const [currentPage, setCurrentPerPage] = useState(1);


  const itemsPerPage = 4;

  const dispatch = useDispatch();
  const { contacts, contactsFavorites, loading, error } = useSelector(
    (state) => state.contacts
  );

  // const suffleContacts = shuffleArray(allContacts);
  const { user } = useSelector((state) => state.auth);

  let userId = user?.id;

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



  const renderAllContacts = (currentItems) => {
    return (
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
              $bgtext={item.favorite ? tertiary : primary}
              $bgborder={item.favorite ? tertiary : primary}
              $nobold={true}
              $bghover={item.favorite ? tertiary : primary}
              $colorhover={white}
              $size="1.3rem"
            >
              {item.favorite ? <RiCloseLine /> : <RiHeart3Fill />}
            </Button>
            
            <ModalDeletContact 
              item={item}
              userId={userId}
              dispatch={dispatch}
            />
          </ContactCard>
        ))}
      </>
    );
  };

  const renderContacts = () => {
    const currentItems = getCurrentItems(
      allContacts,
      currentPage,
      itemsPerPage
    );

    return (
      <LayoutContent title="Contact list">
        {currentItems.length === 0 && !loading ? (
          <h2>NO contacts here</h2>
        ) : loading ? (
          <SketeletonPage count={4} />
        ) : (
          renderAllContacts(currentItems)
        )}
      </LayoutContent>
    );
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
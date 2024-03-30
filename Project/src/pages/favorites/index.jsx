import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import LayoutContent from "../../components/layoutContent";
import SketeletonPage from "../skeleton";
import ContactCard from "../../components/card";
import Button from "../../components/buton";
import { RiCloseFill } from "react-icons/ri";
import { fetchContacts, updateContacts } from "../../api/contacts";
import Pagination from "../../components/pagination";
import { getCurrentItems } from "../../util/util";

const FavoritesPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  const dispatch = useDispatch();

  const { contactsFavorites, loading, error } = useSelector(
    (state) => state.contacts
  );

  const { user } = useSelector((state) => state.auth);
  let userId = user.id;

  useEffect(() => {
    if (userId) {
      fetchContacts(dispatch, user.id);
    }
  }, [userId]);

  useEffect(() => {
    // console.log(contacts, contactsFavorites);
  }, [contactsFavorites]);

  //Pagination

  const totalPages = Math.ceil(contactsFavorites.length / itemsPerPage);
  // console.log(totalPages);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderContactCards = () => {
    const currentItems = getCurrentItems(
      contactsFavorites,
      currentPage,
      itemsPerPage
    );
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
              diseable={loading}
              $nobackground
              $noborder={false}
              $bgborder="red"
              $bgtext="red"
              $noshadow
              $nohover
            >
              <RiCloseFill /> REMOVE
            </Button>
          </ContactCard>
        ))}
      </>
    );
  };

  const renderFavorites = () => {
    return (
      <LayoutContent title="Favorites">
        {contactsFavorites.length === 0 && !loading ? (
          <h2>NO contacts here</h2>
        ) : loading ? (
          <SketeletonPage count={4} />
        ) : (
          renderContactCards()
        )}
      </LayoutContent>
    );
  };

  function renderContactsPage() {
    return error ? (
      <p>Error</p>
    ) : (
      <>
        {renderFavorites()}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    );
  }

  return <div>{renderContactsPage()}</div>;
};

export default FavoritesPage;

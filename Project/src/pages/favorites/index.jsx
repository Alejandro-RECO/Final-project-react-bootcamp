import { useDispatch, useSelector } from 'react-redux';
import './index.scss'
import React, { useEffect } from 'react'
import LayoutContent from '../../components/layoutContent';
import SketeletonPage from '../skeleton';
import ContactCard from '../../components/card';
import Button from '../../components/buton';
import { RiCloseFill } from 'react-icons/ri';
import { fetchContacts, updateContacts } from '../../api/contacts';

const FavoritesPage = () => {

  const dispatch = useDispatch();
  const { contactsFavorites, loading, error } = useSelector(
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
  }, [ contactsFavorites]);

  const renderFavorites = () => {
    if (contactsFavorites.length === 0 && !loading) {
      return <h2>NO contacts here</h2>;
    } else {
      return (
        <LayoutContent title="Favorites">
          {loading ? (
            <SketeletonPage count={4} />
          ) : (
            <>
              {contactsFavorites.map((item) => (
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
        {renderFavorites()}
      </>
    );
  }

  return <div>{renderContactsPage()}</div>;
}

export default FavoritesPage

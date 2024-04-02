import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, updateContacts } from "../../api/contacts";

import styled from "styled-components"; //Esto se iria al momento de migrar los estilos
import LayoutContent from "../../components/layoutContent";
import ContactCard from "../../components/card";
import ContactForm from "../../components/form";
import Button from "../../components/button/index";
import SketeletonPage from "../skeleton";
import { primary, tertiary, white } from "../../UI/colors";
import { RiHeart3Fill, RiCloseFill } from "react-icons/ri";
import { DoNotShow } from "./style";
// import { getUser } from "../../api/auth";

const OverviewPage = () => {
  const dispatch = useDispatch();
  const { contacts, contactsFavorites, loading, error } = useSelector(
    (state) => state.contacts
  );
    
  const { user } = useSelector((state) => state.auth);

  let userId = user?.id
  // console.log("User", user);

  useEffect(() => {
    if (userId) {
      fetchContacts(dispatch, user.id);
    }
  }, [userId]);

  useEffect(() => {
    // console.log(contacts, contactsFavorites);
  }, [contacts, contactsFavorites]);
  

  const renderFavorites = () => {
    if (contactsFavorites.length === 0 && !loading) {
      return <></>;
    } else {
      return (
        <LayoutContent title="Favorites">
          {loading ? (
            <SketeletonPage count={4} />
          ) : (
            <>
              {contactsFavorites.slice(-4).map((item) => (
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
                    $bgborder={tertiary}
                    $bgtext={tertiary}
                    $noshadow
                    $bghover={tertiary}
                    $colorhover="white "


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

  const renderContacts = () => {
    if (contacts.length === 0 && !loading) {
      if (contactsFavorites.length === 0) {
        return (
          <DoNotShow>
            <ContactForm title={"ADD CONTACT"} />
          </DoNotShow>
        );
      }
      return <></>;
    } else {
      return (
        <LayoutContent title="Contact List">
          {loading ? (
            <SketeletonPage count={4} />
          ) : (
            // Aca ira el skeleton de carga...
            <>
              {contacts.slice(-8).map((item) => (
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
                    $size="1.3rem"
                    $nohover={false}
                    $bghover={primary}
                    $colorhover={white}

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
        {renderFavorites()}
        {renderContacts()}
      </>
    );
  }

  return <div>{renderContactsPage()}</div>;
};

export default OverviewPage;


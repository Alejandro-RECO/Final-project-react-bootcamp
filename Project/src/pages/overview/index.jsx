import LayoutContent from '../../components/layoutContent'

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../api/contacts";


import { RiHeart3Fill, RiCloseFill  } from "react-icons/ri";
import ContactCard from '../../components/card';
import Button from '../../components/buton/index';

import { primary } from "../../UI/colors";
import SketeletonPage from '../skeleton';

const OverviewPage = () => {

  const dispatch = useDispatch();
  const { contacts, contactsFavorites, loading, error } = useSelector((state) => state.contacts);
  const { user } = useSelector((state) => state.user )
  const favorites = contactsFavorites.slice(-4)
  const userId = user.id
  // const favorite = true
  if(loading){
    console.log("LOADING DATA");
  }else{
    console.log("NO FAVORITES:COMPONENT",contacts);
    console.log("FAVORITES:COMPONENT",contactsFavorites);
  }


  useEffect(() => {
    if (userId) {
      fetchContacts(dispatch, userId);
    }
  }, [dispatch, userId]);

  function renderContacts() {
    if (error) {
      return <p>Error: {error}</p>; // Muestra el mensaje de error específico
    }
    return (
      <>
        <LayoutContent title="Favorites">
          {
            loading ? <SketeletonPage count={4}/>:
            // Aca ira el skeleton de carga... 
            <>
              {favorites.map((item) => (
                <ContactCard key={item.id} $contact={item}>
                  <Button
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
          }
        </LayoutContent>
        <LayoutContent title="Contact List">
          {
            loading ?<SketeletonPage count={4}/> : 
            // Aca ira el skeleton de carga... 
            <>
              {contacts.map((item) => (
                <ContactCard key={item.id} $contact={item}>
                  <Button
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
          }
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



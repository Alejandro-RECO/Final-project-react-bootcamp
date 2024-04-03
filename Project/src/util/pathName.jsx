import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ChangeTitle =()=> {
  const location = useLocation();

  useEffect(() => {
    // Lógica para determinar el título de la página en función de la ubicación del usuario
    let newTitle = '';

    if (location.pathname === '/login') {
      newTitle = 'Contast Globant | Login';
    } else if (location.pathname === '/') {
      newTitle = 'Contacts Globant | Overview';
    }else if (location.pathname === '/contacts') {
      newTitle = 'Contacts Globant | Contacts';
    }
    else if (location.pathname === '/favorites') {
      newTitle = 'Contacts Globant | Favorites';
    }  else {
      newTitle = 'Contast Globant | 404';
    }

    document.title = newTitle;
  }, [location]);

  return null;
}
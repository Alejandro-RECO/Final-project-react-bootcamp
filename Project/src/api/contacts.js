import {
  fetchContactsFailure,
  fetchContactsFavorites,
  fetchContactsStart,
  fetchContactsSuccess,
} from "../features/contacts/contactsSlice.js";
import {
  createContactStart,
  createContactFailure,
  createContactSuccess,
} from "../features/contacts/createContactSlice.js";
import { supabase } from "../services/client.js";

export const fetchContacts = async (dispatch, user) => {
  try {
    dispatch(fetchContactsStart());
    const { error, data } = await supabase
      .from("contacts")
      .select()
      .eq("userId", user)
   
    if(error){
      console.error(error)
      dispatch(fetchContactsFailure(error));
    }

    const { favorites, nonFavorites } = separateFavorites(data)

    dispatch(fetchContactsSuccess(nonFavorites))
    dispatch(fetchContactsFavorites(favorites))
    
    console.log("NO FAVORITES: API", nonFavorites);
    console.log("FAVORITES: API", favorites);


    // dispatch(fetchContactsSuccess(data));

    // console.log(data);

  } catch (e) {
    throw new Error("Failed to fetch contacts", e);
  }
};

const separateFavorites = (data)=>{
  const favorites = []
  const nonFavorites = []
  
  data.forEach ((item) =>{
    if(item.favorite){
      favorites.push(item)
    }else{
      nonFavorites.push(item)
    }
  })

  return{
    favorites,
    nonFavorites
  }
}

export const createContact = async (contactData, dispatch, user) => {
  try {
    dispatch(createContactStart());
    const { data, error } = await supabase.from("contacts").insert({
      userId: user,
      email: contactData.email,
      name: contactData.name,
      last_name: contactData.last_name,
      favorite: contactData.favorite,
      url_image: contactData.url_image,
    });
    dispatch(createContactFailure(error));
    dispatch(createContactSuccess(data));
  } catch (e) {
    console.log(e);
  }
};

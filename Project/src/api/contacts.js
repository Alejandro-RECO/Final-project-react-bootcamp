import {
  fetchContactsFailure,
  fetchContactsFavorites,
  fetchContactsStart,
  fetchContactsSuccess,
  getCreateContact,
  updateContact
} from "../features/contacts/contactsSlice.js";
import { supabase } from "../services/client.js";
import { separateFavorites } from "../util/util.js";

export const fetchContacts = async (dispatch, user) => {
  try {
    dispatch(fetchContactsStart());
    const { error, data } = await supabase
      .from("contacts")
      .select()
      .eq("userId", user);
    if (error) {
      console.error(error);
      dispatch(fetchContactsFailure(error));
    }

    const { favorites, nonFavorites } = separateFavorites(data);

    dispatch(fetchContactsSuccess(nonFavorites));
    dispatch(fetchContactsFavorites(favorites));

    console.log("NO FAVORITES: API", nonFavorites);
    console.log("FAVORITES: API", favorites);
  } catch (e) {
    throw new Error("Failed to fetch contacts", e);
  }
};

export const createContact = async (contactData, dispatch, userId) => {
  try {
    dispatch(fetchContactsStart());
    const { data, error } = await supabase
      .from("contacts")
      .insert({
        userId,
        email: contactData.email,
        name: contactData.name,
        last_name: contactData.last_name,
        favorite: contactData.favorite,
        url_image: contactData.url_image,
      })
      .select();
    console.log(data);
    dispatch(getCreateContact(data));
    dispatch(fetchContactsFailure(error));
  } catch (e) {
    console.log(e);
    dispatch(fetchContactsFailure(e));
  }
};

export const updateContacts = async (id, updateField, user, dispatch) => {
  try{
    const {data, error} = await supabase
      .from('contacts')
      .update(updateField)
      .eq("userId", user)
      .eq("id", id)
      .select()
  
    if(error) {
      throw new Error(error);
    }
    dispatch(updateContact(data))
    dispatch(fetchContactsFailure(error))
    console.log(data);
  }catch(err) {
    dispatch(fetchContactsFailure(err))
  } 
};

import { createSlice } from '@reduxjs/toolkit'
import { separateFavorites } from '../../util/util';

const initialState ={
  contact:{},
  contacts: [],
  contactsFavorites:[],
  loading: false,
  error: null
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsStart(state){
      state.loading = true;
      state.error = null;  
    }, 
    fetchContactsSuccess(state, action){
      state.loading = false;
      state.contacts = action.payload
    },
    fetchContactsFavorites(state, action){
      state.loading = false;
      state.contactsFavorites = action.payload
    },
    fetchContactsFailure(state, action){
      state.loading = false;
      state.error = action.payload
    },
    getCreateContact(state, action){
      // state.contact = action.payload
      // state.contacts = [...state.contacts, action.payload]
      const { favorites, nonFavorites } = separateFavorites(action.payload)
      if(favorites.length){
        state.contactsFavorites = [...state.contactsFavorites, ...favorites]
        console.log("Fv:", favorites);
      }
      if(nonFavorites.length){
        state.contacts = [...state.contacts, ...nonFavorites]
        console.log("Fv:", nonFavorites);
      }
      state.loading = false
    },
    updateContact(state, action){
      const { favorites, nonFavorites } = separateFavorites(action.payload);

      if (favorites.length) {
        favorites.forEach((favorite) => {
          const index = state.contactsFavorites.findIndex((contact) => contact.id === favorite.id);
          if (index !== -1) {
            // El objeto ya existe en state.contactsFavorites, así que lo eliminamos
            state.contactsFavorites.splice(index, 1);
          } else {
            // El objeto no existe en state.contactsFavorites, así que lo agregamos
            state.contactsFavorites.push(favorite);
          }
        });
      }

      if (nonFavorites.length) {
        nonFavorites.forEach((nonFavorite) => {
          const index = state.contacts.findIndex((contact) => contact.id === nonFavorite.id);
          if (index !== -1) {
            // El objeto ya existe en state.contacts, así que lo eliminamos
            state.contacts.splice(index, 1);
          } else {
            // El objeto no existe en state.contacts, así que lo agregamos
            state.contacts.push(nonFavorite);
      }
    });
  }

  state.loading = false;
    },
  },
});

export const {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
  fetchContactsFavorites,
  getCreateContact,
  updateContact
  
} = contactsSlice.actions;

export default contactsSlice.reducer;
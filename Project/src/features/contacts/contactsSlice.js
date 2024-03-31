import { createSlice } from '@reduxjs/toolkit'
import { separateFavorites, updateContacts } from '../../util/util';

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
    updateContact(state, action) {
      const updatedState = {
        ...state,
        loading: true,
      };
      const finalState = updateContacts(updatedState, action.payload);
      finalState.loading = false;
      return finalState;
    },
    deletContactSlice(state, action) {
      const updatedState = {
        ...state,
        loading: true,
      } 
      const finalState = updateContacts(updatedState, action.payload);
      return finalState;
    }
  },
});

export const {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
  fetchContactsFavorites,
  getCreateContact,
  updateContact,
  deletContactSlice 
  
} = contactsSlice.actions;

export default contactsSlice.reducer;
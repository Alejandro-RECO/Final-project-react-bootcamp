import { createSlice } from '@reduxjs/toolkit'

const initialState ={
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
  },
});

export const {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure,
  fetchContactsFavorites
} = contactsSlice.actions;

export default contactsSlice.reducer;
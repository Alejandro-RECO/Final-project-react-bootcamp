import { createSlice } from '@reduxjs/toolkit'

const initialState ={
  contacts: [],
  loadign: false,
  error: null
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsStart(state){
      state.loadign = true;
      state.error = null;  
    }, 
    fetchContactsSuccess(state, action){
      state.loadign = false;
      state.contacts = action.payload
    },
    fetchContactsFailure(state, action){
      state.loadign = false;
      state.error = action.payload
    },
  },
});

export const {
  fetchContactsStart,
  fetchContactsSuccess,
  fetchContactsFailure
} = contactsSlice.actions;

export default contactsSlice.reducer;
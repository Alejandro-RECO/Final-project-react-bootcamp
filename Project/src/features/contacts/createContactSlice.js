import { createSlice } from "@reduxjs/toolkit";

const initialState ={
  contact: [],
  loding: false,
  error: null
}

const createContactSlice = createSlice({
  name: 'createContact',
  initialState,
  reducer: {
    createContactStart(state){
      state.loading = true
      state.error = null
    },
    createContactSuccess(state, action){
      state.loading = false
      state.contact =action.payload
    },
    createContactFailure(state, action){
      state.loading = false
      state.error = action.payload
    }
  }
})


export const {
  createContactStart,
  createContactSuccess,
  createContactFailure,
} = createContactSlice.actions

export default createContactSlice.reducer
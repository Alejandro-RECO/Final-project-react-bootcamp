import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    getUserStart(state){
      state.loading =true
      state.error = null
    }, 
    getUserSuccess(state, action){
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    getUserFailure(state, action){
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions

export default userSlice.reducer
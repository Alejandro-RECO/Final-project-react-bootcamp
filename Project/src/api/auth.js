import { supabase} from "../services/client.js"
import {
  loginStart,
  loginSuccess,
  loginFailure
} from '../features/auth/authSlice.js'

import {
  getUserStart,
  getUserSuccess,
  getUserFailure
} from '../features/auth/userSlice.js'
import { useEffect } from "react"

export const userLogin = async (email, dispatch) => {

  // const dispatch = useDispatch()

  try{
    dispatch(loginStart())
    const {error, data} = await supabase.auth.signInWithOtp({
      email
    })
    dispatch(loginFailure(error))
    dispatch(loginSuccess(data))

    if(error){
      throw new Error(error.message);
    }

    console.log('Error login: ', error);
  }catch(err){
    throw new Error('Failed to login', err);
  }
}

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    throw new Error('Failed to logout');
  }
};

export const getSesion = async(dispatch)=>{
    const getUserData = async()=>{
      try{
        dispatch(getUserStart())
        const key = Object.keys(localStorage)
        const userData = JSON.parse(window.localStorage.getItem(key))
        dispatch(getUserSuccess(userData.user))
      }catch(e){
        console.log("EERRO_GET_USER_DATA", e);
        dispatch(getUserFailure(e))
      }
    }
    
    getUserData()
}
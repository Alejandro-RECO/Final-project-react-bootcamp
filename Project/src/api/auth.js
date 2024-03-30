import { supabase } from "../services/client.js";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../features/auth/authSlice.js";

import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
} from "../features/auth/userSlice.js";

export const userLogin = async (email, dispatch) => {
  // const dispatch = useDispatch()

  try {
    dispatch(loginStart());
    const { error, data } = await supabase.auth.signInWithOtp({
      email,
    });
    dispatch(loginFailure(error));
    // dispatch(loginSuccess(data));
    console.log(data);

    if (error) {
      throw new Error(error.message);
    }

    console.log("Error login: ", error);
  } catch (err) {
    throw new Error("Failed to login", err);
  }
};

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    throw new Error("Failed to logout");
  }
};

// export const getSesion = (dispatch) => {
//   const getUserData = async () => {
//     try {
//       dispatch(getUserStart());
//       const key = Object.keys(localStorage);
//       const userData = JSON.parse(window.localStorage.getItem(key));
//       dispatch(getUserSuccess(userData.user));
//     } catch (e) {
//       console.log("ERROR_GET_USER_DATA", e);
//       dispatch(getUserFailure(e));
//     }
//   };

//   getUserData();
// };

export const getSingUp = async (userData, dispatch) => {
  try {
    dispatch(loginStart());
    dispatch(getUserStart());
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
    console.log(data);
    if (error) {
      dispatch(getUserFailure(error))
      dispatch(loginFailure(error))
        throw new Error(error);
    }
    dispatch(getUserSuccess(data.user));
    dispatch(loginSuccess(data.user.email));
  } catch (e) {
    console.error(e);
  }
};

export const getSingIn = async(userData, dispatch) =>{
  try {
    dispatch(loginStart());
    dispatch(getUserStart());
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });
    console.log(data);
    if (error) {
      dispatch(getUserFailure(error))
      dispatch(loginFailure(error))
      throw new Error(error);
    }
    dispatch(getUserSuccess(data.user));
    dispatch(loginSuccess(data.user.email));
  } catch (e) {
    console.error(e);
  }
} 

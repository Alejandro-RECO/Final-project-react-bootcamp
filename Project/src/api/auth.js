import { supabase } from "../services/client.js";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../features/auth/authSlice.js";

export const getSingUp = async (userData, dispatch) => {
  try {
    dispatch(loginStart());
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });
    // console.log(data);
    if (error) {
      dispatch(loginFailure(error));
      throw new Error(error);
    }
    dispatch(loginSuccess(data.user));
  } catch (e) {
    console.error(e);
  }
};

export const getSingIn = async (userData, dispatch) => {
  try {
    dispatch(loginStart());
    const {data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: userData.password,
    });
    // console.log(data);
    if (error) {
      dispatch(loginFailure(error));
      throw new Error(error);
    }
    dispatch(loginSuccess(data.user));
  } catch (e) {
    console.error(e);
  }
};

export const logout = async (dispatch) => {
  try {
    dispatch(loginStart())
    await supabase.auth.signOut();
    dispatch(loginSuccess(null));
  } catch (error) {
    dispatch(loginFailure(error));
    throw new Error("Failed to logout");
  }
};

export const getUser = (dispatch) => {
  const localStorageKey = Object.keys(localStorage)[0];

  if (localStorageKey) {
    const dataLocalStorage = JSON.parse(localStorage.getItem(localStorageKey));
    const dataUser = dataLocalStorage?.user;

    if (dataUser) {
      dispatch(loginSuccess(dataUser));
      // console.log(dataUser.id);
    }
  }
};

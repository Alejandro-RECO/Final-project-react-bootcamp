import { useState } from "react";
import { supabase} from "../services/client"

export const userLogin = async (email) => {

  try{
    const {error, data} = await supabase.auth.signInWithOtp({
      email
    })

    if(error){
      throw new Error(error.message);
    }
    console.log(data);
    
  }catch(err){
    throw new Error('Failed to login');
  }
}

export const logout = async () => {
  try {
    await supabase.auth.signOut();
  } catch (error) {
    throw new Error('Failed to logout');
  }
};

export const getSesion = async()=>{
  try{
    const sesion = await supabase.auth.getSession()
    return sesion.data.session.user.id
  }catch(e){
    console.log(e);
  }
}
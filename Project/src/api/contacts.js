// import axios from 'axios'
import {supabase, user} from '../services/client.js'


export const fetchContacts = async (favorite = false)=>{
  if(!user){
    throw new Error('Unauthorized')
  }

  const userId = user.data.user.id; 
  try{
    const {error, data} = await supabase
    .from('contacts')
    .select()
    .eq('userId', userId)
    .eq('favorite', favorite)
    // console.log(data);

    if (error) throw new Error("ERROR: ", error);

    return data;
  }catch (e) {
    throw new Error('Failed to fetch contacts', e);
  }
}
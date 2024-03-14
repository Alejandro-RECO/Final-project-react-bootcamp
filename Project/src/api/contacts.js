// import axios from 'axios'
import {supabase} from '../services/client.js'


if(!supabase.auth.getSession()){
  
}

const user = await supabase.auth.getUser();
const userId = user.data.user.id; 


export const fetchContacts = async ()=>{
  try{
    const {error, data} = await supabase
    .from('contacts')
    .select()
    .eq('userId', userId)

    if (error) throw new Error("ERROR: ", error);

    return data;
  }catch (e) {
    throw new Error('Failed to fetch contacts', e);
  }
}
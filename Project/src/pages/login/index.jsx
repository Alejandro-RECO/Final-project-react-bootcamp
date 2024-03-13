import { useState } from "react";
import { supabase } from "../../services/client";

const LoginPage = () => {
  const [email, setEmail] = useState("");


  const handleSubmit = (e) =>{
    e.preventDefault()

    try{
      const response = supabase.auth.signInWithOtp({
        email
      })
      console.log(response);
    }catch(err){
      console.log(err);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email" 
        placeholder="youremail@email.com..." 
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default LoginPage;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{
  loginStart,
  loginSuccess,
  loginFailure,
  setUser,
} from '../../features/auth/authSlice'
import { getSesion, userLogin } from "../../api/auth";
// import { supabase } from "../../services/client";

const LoginPage = () => {
  const dispatch = useDispatch()
  const { error } = useSelector((state) => state.auth)
  const [email, setEmail] = useState('');

  console.log('erro', error);

  const handleSubmit  = async (e) =>{
    e.preventDefault()

    // console.log('User email', email);
     try{
      dispatch(loginStart())
      const response  = await userLogin(email)
      const user = await getSesion()
      dispatch(setUser(user))

      console.log('Respuesta', response);
     }catch(err){
      dispatch(loginFailure(err))
      console.error('ERROR LOGIN: ',err)
     }
    //  setEmail('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          name="email" 
          placeholder="youremail@email.com..." 
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      {/* <p>{error}</p> */}
    </>
  );
};

export default LoginPage;

import { useState } from "react";
import {userLogin} from '../../api/auth'
import { useDispatch } from "react-redux";

const LoginPage = () => {
  // const { error } = useSelector((state) => state.auth)
  const [email, setEmail] = useState('');

  // console.log('erro', error);
  const dispatch = useDispatch()

  const handleSubmit  = async (e) =>{
    e.preventDefault()
     try{
      await userLogin(email, dispatch)
     }catch(err){
      console.error('ERROR LOGIN: ',err)
     }
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

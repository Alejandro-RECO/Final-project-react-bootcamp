import { useState } from "react";
import { getSingIn, getSingUp } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const {error, loading} = useSelector((state) => state.auth)
  const initialState = {
    email: "",
    password: "",
  }
  const [data, setData] = useState(initialState);
  
  console.log(data);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log('erro', error);
  const dispatch = useDispatch();

  const handleSingUpSubmit = async (e) => {
    e.preventDefault();
    getSingUp(data, dispatch);
    setData(initialState)
  };

  const handleSingInSubmit = async (e) => {
    e.preventDefault();
    getSingIn(data, dispatch);
    setData(initialState)
  };

  const messageError = ()=>{
    if(error){
      return <h2>{error.message}</h2>
    }else{
      return <h2>check your email</h2>
    }
  }

  return (
    <>
      <h2>Inicio 2 registro</h2>
      <form onSubmit={handleSingUpSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@email.com..."
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <h2>Inicio 3 inicio</h2>
      <form onSubmit={handleSingInSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@email.com..."
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit">Enviar</button>
      </form>{
        loading ? <p>Cargando...</p> : messageError()
      }
    </>
  );
};

export default LoginPage;

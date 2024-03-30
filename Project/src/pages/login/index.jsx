import { useState } from "react";
import { getSingIn, getSingUp, userLogin } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

const LoginPage = () => {
  const { user } = useSelector((state) => state.user)
  const {error} = useSelector((state) => state.auth)
  const [email, setEmail] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  
  console.log(user);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // console.log('erro', error);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userLogin(email, dispatch);
    } catch (err) {
      console.error("ERROR LOGIN: ", err);
    }
  };
  const handleSingUpSubmit = async (e) => {
    e.preventDefault();
    getSingUp(data, dispatch);
  };
  const handleSingInSubmit = async (e) => {
    e.preventDefault();
    getSingIn(data, dispatch);
  };
  const messageError = ()=>{
    if(error){
      return <h2>{error.message}</h2>
    }
  }

  return (
    <>
      <h2>Inicio 1</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="youremail@email.com..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
      <h2>Inicio 2</h2>

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
      <h2>Inicio 3</h2>
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
      </form>
      {messageError()}
    </>
  );
};

export default LoginPage;

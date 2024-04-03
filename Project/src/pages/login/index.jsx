import { useState } from "react";
import { getSingIn, getSingUp } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

import { primary, white} from '../../UI/colors'
import styled from "styled-components";
import LogoSvg from "../../UI/logoSvg";


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
    
    if(!loading){
      return <h3>Check your email</h3>
    }
  };

  const messageError = ()=>{
    if(error){
      return <h2>{error.message}</h2>
    }

  }

  return (
    <SectionStyled>

      
      <div className="logo">
        <LogoSvg/>
      </div>
      <div className="formOne">
        <h2>register</h2>
        <form  onSubmit={handleSingUpSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
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
        <p>
        {
        !loading ? '' : 'Check your email'
        }
        </p>
      </div>
      <div className="formTwo">
        <h2>sign in</h2>
        <form  onSubmit={handleSingInSubmit}>
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
      </div>
      <img src="" alt="" />
    </SectionStyled>
  );
};

export default LoginPage;

const SectionStyled = styled.section`
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  /* padding: 20px; */
  background-color: ${primary};

  .logo{
    grid-area: 1 / 1 / 2 / 7; 
    display: flex;
    align-items: center;
    /* justify-content: center; */
    svg{
      z-index: 999;
      height: 200px;
      object-fit: cover;
      margin-left: 100px;
    }

  }
  
  form{
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    justify-self: center;
    border-radius: .3rem;
    width: 50%;
    height: 320px;
    padding: 20px;
    box-shadow: 2px 12px 50px -15px rgba(0,0,0,0.75);
  }
  .formOne{
    grid-area: 1 / 1 / 7 / 4;
    background-image: url(./img/backgroung.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
      color: ${white};
    }

    form{
      background-color: #ffffffa2;
    }
  }
  .formTwo{
    grid-area: 1 / 4 / 7 / 7; 
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: ${white};
    box-shadow: inset 24px 6px 55px -29px rgba(0,0,0,0.75);

    input{
      border: 1px solid ${white};
      color: #ffffff;
    }

   
    form{
      background-color: ${primary};
    }
  }
  h2{
    font-size: 4rem;
    font-weight: bold;
    text-transform: uppercase;
    padding-bottom: 20px;
  }
   input{
    /* border: 1px solid red; */
    padding: 10px 20px;
    border-radius: .3rem;
    border: 1px solid black;
    width: 60%;

   }

`
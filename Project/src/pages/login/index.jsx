import { useEffect, useState } from "react";
import { getSingIn, getSingUp } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

import { primary, tertiary, white} from '../../UI/colors'
import styled from "styled-components";
import LogoSvg from "../../UI/logoSvg";
import Toast from "../../components/toast";
import Button from "../../components/button";


const LoginPage = () => {
  const {error, loading} = useSelector((state) => state.auth)
  const [toast, setToast] = useState({
    text: '',
    status: false,
    bg:''
  })

  useEffect(()=>{
    if(toast.status){
      setTimeout(()=>{
        setToast({
          ...toast, 
          status: false

        })

      }, 5000)
    }
  }, [toast])
  const initialState = {
    email: "",
    password: "",
  }
  const [singIndata, setSingInData] = useState(initialState);
  const [singUpdata, setSingUpData] = useState(initialState);
  
  // console.log(data);

  const handleChange = (e, setState, state) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  // console.log('erro', error);
  const dispatch = useDispatch();

  //Registrarse

  const handleSingUpSubmit = async (e) => {

    e.preventDefault();

    
    if(singUpdata.email.length === 0 ) {
      setToast({
        text: 'Please write email',
        status:true,
        bg: tertiary
      })
      return
    }
    if(singUpdata.password.length === 0) {
      setToast({
        text: 'Please write password',
        status:true,
        bg: tertiary
      })
      return
    }

    if(error){
      let errorM = error.message
      setToast({
        text: errorM,
        status:true,
        bg: tertiary
      })
      return
    }
    
    getSingUp(singUpdata, dispatch);

    setSingUpData(initialState)

    setToast({
      text: 'Good ! please check your email',
      status:true,
      bg: primary
    })
  };
  // const messageErro = error.message || null

  const handleSingInSubmit = async (e) => {
    e.preventDefault();

    
    if(singIndata.email.length === 0 ) {
      setToast({
        text: 'Please write email',
        status:true,
        bg: tertiary
      })
      console.log('please enter email address');
      return
    }
    if(singIndata.password.length === 0) {
      setToast({
        text: 'Please write password',
        status:true,
        bg: tertiary
      })
      console.log('please enter email address');
      return
    }
    
    if(error){
      let errorM = error.message
      setToast({
        text: errorM,
        status:true,
        bg: tertiary
      })
      return
    }
    getSingIn(singIndata, dispatch);
    setSingInData(initialState)
  };
  // console.log(singIndata.email);

  return (
    <SectionStyled>
      {
        toast.status && <Toast text={toast.text} bg={toast.bg} />
      }
      <div className="logo">
        <LogoSvg/>
      </div>
      <div className="formOne">
        <h2>sign up</h2>
        <form  onSubmit={handleSingUpSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={setSingUpData.email}
            onChange={(e) => handleChange(e,setSingUpData, singUpdata)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={singUpdata.password}
            onChange={(e) => handleChange(e,setSingUpData, singUpdata)}
            // required
          />
          <Button type="submit">Enviar</Button>
        </form>
        {
        loading ? <p>Cargando...</p> : ''
        }
      </div>
      <div className="formTwo">
        <h2>sign in</h2>
        <form  onSubmit={handleSingInSubmit}>
          <input
            type="email"
            name="email"
            value={singIndata.email}
            placeholder="youremail@email.com..."
            onChange={(e) => handleChange(e,setSingInData, singIndata)}
            // required
          />
          <input
            type="password"
            name="password"
            value={singIndata.password}
            placeholder="Password"
            onChange={(e) => handleChange(e,setSingInData, singIndata)}
            // required
          />
          <Button type="submit">Enviar</Button>

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
    width: 40%;
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
      backdrop-filter: blur(5px);

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
    width: 80%;

   }

`
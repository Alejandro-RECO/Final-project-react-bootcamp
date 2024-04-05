import { useEffect, useState } from "react";
import { getSingIn, getSingUp } from "../../api/auth";
import { useDispatch, useSelector } from "react-redux";

import { primary, tertiary, white} from '../../UI/colors'
import styled from "styled-components";
import LogoSvg from "../../UI/logoSvg";
import Toast from "../../components/toast";
import Button from "../../components/button";
import { SectionStyled } from "./styled";


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

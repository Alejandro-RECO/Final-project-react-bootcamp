import styled from "styled-components";
import { primary, white } from "../../UI/colors";

export const SectionStyled = styled.section`
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
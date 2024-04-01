import styled from "styled-components";
import { primary } from "../../UI/colors";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.5);

  display: flex;
  align-items: center;
  justify-content: center;
  `;

export const ContainerModal = styled.div`
  width: 600px;
  background: ${primary};
  position: relative;
  border-radius: 0.5rem;
  box-shadow: rgba(100,100,111, .2) 0px 7px 29px 0px;
  padding: 20px;
  flex-direction: column;
`;

export const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid white;
  width: 100%;

  h3 {
    font-weight: bold;
    font-size: 1.4rem;
    color: white;
  }
`

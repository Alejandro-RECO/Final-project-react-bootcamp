import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../buton'
import { RiCloseLine } from "react-icons/ri";
import { primary } from '../../UI/colors';


const Modal = ({children, open, isOpen, title}) => {


  return (
    <>
    {
      open && 
      <Overlay>
        <ContainerModal>
            <HeaderModal>
              <h3>{title}</h3>
              <Button
                onClick={isOpen}
              >
                <RiCloseLine/>
              </Button>
            </HeaderModal>
            {children}
        </ContainerModal>
      </Overlay>
    }
    </>
  )
}

export default Modal

const Overlay = styled.div`
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

const ContainerModal = styled.div`
  width: 600px;
  background: ${primary};
  position: relative;
  border-radius: 0.5rem;
  box-shadow: rgba(100,100,111, .2) 0px 7px 29px 0px;
  padding: 20px;
  flex-direction: column;
`;

const HeaderModal = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1.2rem;
  padding-bottom: 1rem;
  border-bottom: 3px solid white;

  h3 {
    font-weight: bold;
    font-size: 1.4rem;
    color: white;
  }
`
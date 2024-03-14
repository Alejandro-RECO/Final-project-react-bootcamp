import React from 'react'
import styled from 'styled-components'
import { primary } from '../../UI/colors'

const Button = ({active, onClick, children}) => {
  return (
    <ButtonContent onClick={onClick} active={active}>
      {children}
    </ButtonContent>
  )
}

export default Button


const ButtonContent = styled.button`
  padding: .2rem .7rem;
  background: ${(props) => (props.active ? primary : '#ededed')};
  transition: background-color 0.2s ease ;
  border-radius: .2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover{
    background-color: ${(props) => (props.active ? '#c1d72fd9' : 'white')};
    cursor: pointer;
    box-shadow:-5px 12px 19px -13px rgba(0,0,0,0.75);
  }
`
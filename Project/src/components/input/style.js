import styled from "styled-components";
import { secondary900, tertiary, white } from "../../UI/colors";

const handleError = ($noerror) =>{
  if(!$noerror){
    return white
  }else{
    return tertiary
  }
}

export const Input = styled.input`
  padding: 22px 10px;
  background-color: #cfdf66;
  border-bottom: 2px solid ${(props) => handleError(props.$noerror)};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-weight: 400;
  color: ${secondary900};
`;

export const ErrorStyled = styled.span`
  color: ${tertiary};
  padding: 0;
  /* border: 1px solid red; */
`

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;

`
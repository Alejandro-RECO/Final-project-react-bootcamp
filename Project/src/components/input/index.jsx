import React from "react";
import styled from "styled-components";
import { secondary900, tertiary, white } from "../../UI/colors";

const FormInput = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  required,
  $error,
  $noerror = false,
}) => {
  const handleChange = (e) => {
    onChange(e.target.name, e.target.value);
  };

  return (
    <DivStyled>
      <Input
        $noerror={$noerror}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={required}
      />
      {$error && <ErrorStyled className="error">{$error}</ErrorStyled>}
    </DivStyled>
  );
};

export default FormInput;

const handleError = ($noerror) =>{
  if(!$noerror){
    return white
  }else{
    return tertiary
  }
}

const Input = styled.input`
  padding: 22px 10px;
  background-color: #cfdf66;
  border-bottom: 2px solid ${(props) => handleError(props.$noerror)};
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  font-weight: 400;
  color: ${secondary900};
`;

const ErrorStyled = styled.span`
  color: ${tertiary};
  padding: 0;
  /* border: 1px solid red; */
`

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;

`
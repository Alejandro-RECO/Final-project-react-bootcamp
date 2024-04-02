import React from "react";
import { DivStyled, ErrorStyled, Input } from "./style";

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




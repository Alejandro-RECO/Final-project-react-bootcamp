import styled from "styled-components";


export const Form = styled.form`
  width: 100%;
  padding: 20px 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => (props.checked ? "green" : "gray")};
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? "green" : "transparent")};
  cursor: pointer;
`;
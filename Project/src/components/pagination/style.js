import styled from "styled-components";
import { primary, white } from "../../UI/colors";

export const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  /* border: 1px solid red; */
  padding: 10px 70px;
  text-align: center;
  font-size: 1.3rem;
  button {
    transition: 0.2s all;
    background-color: #b5b5b521;
    padding: 10px;
    border-radius: 0.3rem;
    cursor: pointer;

    &:hover {
      background-color: ${primary};
      color: ${white};
    }
  }
  .active {
    background-color: ${primary};

    color: ${white};
  }
`;
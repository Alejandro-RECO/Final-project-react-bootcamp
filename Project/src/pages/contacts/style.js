import styled from "styled-components";
import { primary, primary600, white } from "../../UI/colors";

export const DivStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: ${white}; */
  /* border: 3px solid ${white}; */
  border-radius: 0.6rem;
  width: 100%;
  padding: 30px;
  font-size: 1.2rem;
  text-transform: uppercase;
  /* background-color: ${primary600}; */
  /* font-weight: 700; */

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    li {
      background-color: ${white};
      padding: 10px 30px;
      border-radius: 0.3rem;
      box-shadow: inset -1px -35px 58px -33px rgba(0, 0, 0, 0.11);
    }
  }

  img {
    border: 3px solid white;
    height: 160px;
    width: 160px;
    border-radius: 50%;
    object-fit: cover;
  }
  /* background-color: green; */
`;

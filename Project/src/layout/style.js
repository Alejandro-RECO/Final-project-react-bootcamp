import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { primary } from "../UI/colors";

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 2rem 2rem;
`;

export const Img = styled.img`
  height: 50px;
`;

export const Section = styled.section`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1.5px solid #b1b1b185;
    box-shadow: 2px 5px 15px 1px rgba(0, 0, 0, 0.11);
    padding-left: 40px;
  }
`;

export const NavLinkS = styled(NavLink)`
  color: black;
  font-size: 1.1rem;

  &.active {
    color: ${primary};
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  text-align: center;
  padding: 20px;
  color: #ffffff;
  text-transform: uppercase;
  h3{
    font-size: 1.3rem;
    font-weight: bold;
 }
 .icon{
  font-size: 7rem;
 }
`
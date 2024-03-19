import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { RiLogoutCircleRLine } from "react-icons/ri";

import styled from "styled-components";
import { primary } from "../UI/colors";
import ContactForm from "../components/form";
import Button from "../components/buton";
// import { useContact } from '../context/ContactContext'
import Modal from "../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../api/auth";
import {
  loginStart,
  loginFailure,
  logout as logoutAction,
} from "../features/auth/authSlice";
// import { RiLoginCircleFill } from "react-icons/ri";

const LayoutPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  // const {loading, error} = useSelector((state) => state.auth)

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogout = async () => {
    try {
      dispatch(loginStart());
      await logout();
      dispatch(logoutAction());
    } catch (err) {
      dispatch(loginFailure(err));
    }
  };

  return (
    <Section>
      <nav>
        <Link to={"/"}>
          <Img src="./img/globant.png" alt="Globant logo" />
        </Link>
        <Ul>
          <li>
            <NavLinkS exact to="/" activeClassName="active-link">
              Overview
            </NavLinkS>
          </li>
          <li>
            <NavLinkS to="contacts">Contacts</NavLinkS>
          </li>
          <li>
            <NavLinkS to="favorites">Favorites</NavLinkS>
          </li>
          <ContactForm />
          <Button 
            onClick={handleModal}
            noBackground={true}
            noBorder={true}
            noHover={true}
            noShadow={false}
          >
            Log out<RiLogoutCircleRLine />
          </Button>
          <Modal open={openModal} isOpen={handleModal} title={"LOGOUT"}>
            <h3>Esta usted seguro de Cerrar secion</h3>
            <Button onClick={handleLogout}>Confirm</Button>
          </Modal>
        </Ul>
      </nav>
      <Outlet />
    </Section>
  );
};

export default LayoutPage;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding: 2rem 2rem;
`;

const Img = styled.img`
  height: 50px;
`;

const Section = styled.section`
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

const NavLinkS = styled(NavLink)`
  color: black;
  font-size: 1.1rem;

  &.active {
    color: ${primary};
  }
`;

const ButtonLayout = styled.button`
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  transition: 0.2s all;

  &:hover {
    color: gray;
    cursor: pointer;
  }
`;

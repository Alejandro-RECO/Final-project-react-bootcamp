import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { RiLogoutCircleRLine } from "react-icons/ri";

import styled from "styled-components";
import { primary, tertiary } from "../UI/colors";
import ContactForm from "../components/form";
import Button from "../components/button";
// import { useContact } from '../context/ContactContext'
import Modal from "../components/modal";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../api/auth";
import {
  loginStart,
  loginFailure,
  logout as logoutAction,
} from "../features/auth/authSlice";
import { Img, Logout, NavLinkS, Section, Ul } from "./style";
// import { RiLoginCircleFill } from "react-icons/ri";

const LayoutPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();
  // const {loading, error} = useSelector((state) => state.auth)

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleLogout = () => {
    logout(dispatch);
  };

  return (
    <Section>
      <nav>
        <Link to={"/"}>
          <Img src="./img/globant.png" alt="Globant logo" />
        </Link>
        <Ul>
          <li>
            <NavLinkS to="/" activeclassname="active-link">
              Overview
            </NavLinkS>
          </li>
          <li>
            <NavLinkS to="contacts">Contacts</NavLinkS>
          </li>
          <li>
            <NavLinkS to="favorites">Favorites</NavLinkS>
          </li>
          <ContactForm title={"NEW"} />
          <Button
            onClick={handleModal}
            $noBackground={true}
            $noBorder={true}
            $noHover={true}
            $noShadow={false}
          >
            Log out
            <RiLogoutCircleRLine />
          </Button>
          <Modal open={openModal} isOpen={handleModal} title={"LOGOUT"}>
            <Logout>
              <RiLogoutCircleRLine className="icon" />
              <h3>Are you sure to log out?</h3>
              <Button
                $bghover={tertiary}
                $colorhover="white"
                $nobold={true}
                onClick={handleLogout}
              >
                Confirm
              </Button>
            </Logout>
          </Modal>
        </Ul>
      </nav>
      <Outlet />
    </Section>
  );
};

export default LayoutPage;

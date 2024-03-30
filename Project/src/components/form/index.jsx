import React, { useState } from "react";
import { useContact } from "../../context/ContactContext";

import Modal from "../modal";
import Button from "../buton";
import styled from "styled-components";
import { RiAddLine } from "react-icons/ri";
import { primary } from "../../UI/colors";
import { createContact } from "../../api/contacts";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = ({ title }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { loading } = useSelector((state) => state.contacts);

  const initialState = {
    email: "",
    name: "",
    last_name: "",
    favorite: false,
    url_image: "",
  }

  const [contactData, setContactData] = useState(initialState);

  const { openModal, handleModal } = useContact();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;

    setContactData((prevContactData) => ({
      ...prevContactData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createContact(contactData, dispatch, user.id);
    handleModal();
    setContactData(initialState);
  };

  return (
    <>
      <Button
        onClick={handleModal}
        $nobackground={false}
        $background={primary}
        $noborder={true}
        $bgtext="#000"
        $bghover="#d8ec58"
      >
        <RiAddLine /> {title}
      </Button>
      <Modal open={openModal} isOpen={handleModal} title={"ADD CONTACT"}>
        <Form onSubmit={handleSubmit}>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com..."
            value={contactData.email}
            onChange={handleInputChange}
            required
          />
          <Input
            name="name"
            type="text"
            placeholder="Name"
            value={contactData.name}
            onChange={handleInputChange}
            required
          />
          <Input
            name="last_name"
            type="text"
            placeholder="Last name"
            value={contactData.last_name}
            onChange={handleInputChange}
            required
          />
          <Input
            name="url_image"
            type="text"
            placeholder="Image URL"
            value={contactData.url_image}
            onChange={handleInputChange}
            required
          />
          <CheckboxContainer>
            Enable like favorite
            <StyledCheckbox
              className="checkboxInput"
              name="favorite"
              type="checkbox"
              checked={contactData.favorite}
              onChange={handleInputChange}
            />
          </CheckboxContainer>
          <Button disabled={loading} type="submit">
            {loading ? "Adding..." : "Add"}
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ContactForm;

const Form = styled.form`
  width: 100%;
  padding: 20px 5rem;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: ; */
  /* justify-content: ; */
  /* border: 1px solid red; */
`;

const Input = styled.input`
  padding: 22px 10px;
  background-color: #cfdf66;
  border-bottom: 1px solid white;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid ${(props) => (props.checked ? "green" : "gray")};
  border-radius: 4px;
  background-color: ${(props) => (props.checked ? "green" : "transparent")};
  cursor: pointer;
`;

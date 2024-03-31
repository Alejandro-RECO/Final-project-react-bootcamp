import React, { useEffect, useState } from "react";
import { useContact } from "../../context/ContactContext";

import Modal from "../modal";
import Button from "../buton";
import { RiAddLine } from "react-icons/ri";
import { primary } from "../../UI/colors";
import { createContact } from "../../api/contacts";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../input";
import { Form, CheckboxContainer, StyledCheckbox } from "./style";

const ContactForm = ({ title }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { loading } = useSelector((state) => state.contacts);

  const initialState = {
    email: "",
    name: "",
    last_name: "",
    favorite: false,
    url_image: "",
  };
  const [formErrors, setFormErrors] = useState({});

  const [contactData, setContactData] = useState(initialState);

  const { openModal, handleModal } = useContact();

  const handleInputChange = (name, value) => {
    setContactData((prevContactData) => ({
      ...prevContactData,
      [name]: value,
    }));

    setFormErrors((prevFormErrors) => ({
      ...prevFormErrors,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newFormErrors = {};

    if (!contactData.email) {
      newFormErrors.email = "Email is required";
      newFormErrors.errorEmail = true;
    }

    if (!contactData.name) {
      newFormErrors.name = "Name is required";
      newFormErrors.errorName = true;
    }
    if (!contactData.last_name) {
      newFormErrors.last_name = "Last name is required";
      newFormErrors.errorLName = true;
    }
    if (!contactData.url_image) {
      newFormErrors.url_image = "Image url is required";
      newFormErrors.errorUrl_image = true;
    }

    // Resto de las validaciones

    return newFormErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newFormErrors = validateForm();

    if (Object.keys(newFormErrors).length > 0) {
      setFormErrors(newFormErrors);
      return;
    }

    createContact(contactData, dispatch, user.id);
    handleModal();
    setContactData(initialState);
    setFormErrors({});
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
          <FormInput
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com..."
            value={contactData.email}
            onChange={handleInputChange}
            // required
            $error={formErrors.email}
            $noerror={formErrors.errorEmail}
          />
          <FormInput
            name="name"
            type="text"
            placeholder="Name"
            value={contactData.name}
            onChange={handleInputChange}
            // required
            $error={formErrors.name}
            $noerror={formErrors.errorName}
          />
          <FormInput
            name="last_name"
            type="text"
            placeholder="Last name"
            value={contactData.last_name}
            onChange={handleInputChange}
            // required
            $error={formErrors.last_name}
            $noerror={formErrors.errorLName}
          />
          <FormInput
            name="url_image"
            type="text"
            placeholder="Image URL"
            value={contactData.url_image}
            onChange={handleInputChange}
            // required
            $error={formErrors.url_image}
            $noerror={formErrors.errorUrl_image}
          />
          <CheckboxContainer>
            Enable like favorite
            <StyledCheckbox
              className="checkboxInput"
              name="favorite"
              type="checkbox"
              checked={contactData.favorite}
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.checked)
              }
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

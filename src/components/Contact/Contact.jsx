import React from "react";
import { ContactButtons, ContactContainer, ContactTitle } from "./style";
import { modalOpen } from "../modalControl";

const Contact = () => {
  return (
    <ContactContainer className="modal_opened">
      <ContactTitle>Like what you see?</ContactTitle>
      <ContactButtons>
        <button>Resume</button>
        <button onClick={() => modalOpen()}>Contact</button>
      </ContactButtons>
    </ContactContainer>
  );
};

export default Contact;

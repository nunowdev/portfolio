import React from "react";
import { ContactButtons, ContactContainer, ContactTitle } from "./style";

const Contact = () => {
  return (
    <ContactContainer>
      <ContactTitle>Like what you see?</ContactTitle>
      <ContactButtons>
        <button>Resume</button>
        <button>Contact</button>
      </ContactButtons>
    </ContactContainer>
  );
};

export default Contact;

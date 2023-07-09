import React from "react";
import { ContactButtons, ContactContainer, ContactTitle } from "./style";
import { modalOpen } from "../modalControl";
import { resume } from "../resume.pdf";

const Contact = () => {
  return (
    <ContactContainer className="modal_opened">
      <ContactTitle>Like what you see?</ContactTitle>
      <ContactButtons>
        <a href={resume} target="_blank" rel="noreferrer">
          <button>Resume</button>
        </a>
        <button onClick={() => modalOpen()}>Contact</button>
      </ContactButtons>
    </ContactContainer>
  );
};

export default Contact;

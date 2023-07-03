import React from "react";
import {
  ContactButton,
  ContactModal,
  ContactModalFormItem,
  ContactModalSubtitle,
  ContactModalTitle,
  HeroBottom,
  HeroContainer,
  HeroUpper,
} from "./style";
import { modalClose, modalOpen } from "../modalControl";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <ContactModal className="modal">
        <button className="close_modal_button" onClick={() => modalClose()}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ContactModalTitle>Let's have a chat!</ContactModalTitle>
        <ContactModalSubtitle>I'd love to hear from you.</ContactModalSubtitle>
        <form className="modal_form">
          <ContactModalFormItem>
            <label htmlFor="">Name</label>
            <input name="user_name" type="text" required />
          </ContactModalFormItem>
          <ContactModalFormItem>
            <label htmlFor="">Email</label>
            <input name="user_email" type="text" required />
          </ContactModalFormItem>
          <ContactModalFormItem>
            <label htmlFor="">Message</label>
            <textarea name="message" type="text" required />
          </ContactModalFormItem>
          <button>Send it my way</button>
        </form>
      </ContactModal>
      <ContactButton onClick={() => modalOpen()} className="modal_opened">
        <FontAwesomeIcon icon={faComment} />
      </ContactButton>
      <HeroUpper className="modal_opened">
        Don't stop when you're tired,
      </HeroUpper>
      <HeroBottom className="modal_opened">stop when you're done.</HeroBottom>
    </HeroContainer>
  );
};

export default Hero;

import React, { useState } from "react";
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
import emailjs from "@emailjs/browser";

const Hero = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function sendEmail(e) {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all the fields");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_a66ia17",
        "template_rl1qz5r",
        templateParams,
        "9luxz5C1bYZbUl7ce"
      )
      .then(
        () => {
          alert("Email Sent!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (err) => {
          console.log("EMAIL ERROR", err);
        }
      );
  }

  return (
    <HeroContainer id="hero">
      <ContactModal className="modal">
        <button className="close_modal_button" onClick={() => modalClose()}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ContactModalTitle>Let's have a chat!</ContactModalTitle>
        <ContactModalSubtitle>I'd love to hear from you.</ContactModalSubtitle>
        <form className="modal_form" onSubmit={sendEmail}>
          <ContactModalFormItem>
            <label htmlFor="">Name</label>
            <input
              name="user_name"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </ContactModalFormItem>
          <ContactModalFormItem>
            <label htmlFor="">Email</label>
            <input
              name="user_email"
              type="text"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </ContactModalFormItem>
          <ContactModalFormItem>
            <label htmlFor="">Message</label>
            <textarea
              name="message"
              type="text"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
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

import React from "react";
import {
  ContactButton,
  ContactModal,
  HeroBottom,
  HeroContainer,
  HeroUpper,
} from "./style";
import { modalClose, modalOpen } from "../modalControl";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  return (
    <HeroContainer id="hero">
      <ContactModal className="modal">
        <button onClick={() => modalClose()}>yo</button>
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

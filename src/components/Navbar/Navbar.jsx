import React from "react";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLocation,
  NavbarName,
} from "./style";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { modalOpen } from "../modalControl";
import { resume } from "../resume.pdf";

const Navbar = () => {
  return (
    <NavbarContainer id="scrollTo" className="modal_opened">
      <NavbarName>Nuno Alves</NavbarName>
      <NavbarLocation>
        <FontAwesomeIcon icon={faLocationDot} />
        Portugal
      </NavbarLocation>
      <NavbarLinks>
        <a className="link nomargin" href="#about">
          About
        </a>
        <div className="link" onClick={() => modalOpen()}>
          Contact
        </div>
        <a className="link" href={resume} target="_blank" rel="noreferrer">
          Resume
        </a>
        <a className="link" href="#projects">
          Projects
        </a>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;

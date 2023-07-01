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

const Navbar = () => {
  return (
    <NavbarContainer id="scrollTo" className="modal_opened">
      <NavbarName>Nuno Alves</NavbarName>
      <NavbarLocation>
        <FontAwesomeIcon icon={faLocationDot} />
        Portugal
      </NavbarLocation>
      <NavbarLinks>
        <div className="link nomargin">About</div>
        <div className="link" onClick={() => modalOpen()}>
          Contact
        </div>
        <div className="link">Projects</div>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;

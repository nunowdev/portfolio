import React from "react";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLocation,
  NavbarName,
} from "./style";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarName>Nuno Alves</NavbarName>
      <NavbarLocation>
        <FontAwesomeIcon icon={faLocationDot} />
        Portugal
      </NavbarLocation>
      <NavbarLinks>
        <div className="link nomargin">About</div>
        <div className="link">Contact</div>
        <div className="link">Projects</div>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;

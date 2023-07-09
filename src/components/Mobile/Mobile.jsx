import React from "react";
import {
  MobileContainer,
  MobileContent,
  MobileProject,
  MobileTitle,
  MobileWrapper,
} from "./style";
import mobileProject from "./media/mobileproject.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Mobile = () => {
  return (
    <MobileContainer className="modal_opened">
      <MobileWrapper>
        <MobileTitle>Mobile</MobileTitle>
        <MobileContent>
          Throughout my career, I've also embarked on the professional journey
          of developing mobile apps with Flutter.
          <a href="https://github.com/nunowdev/groceryshop-app">
            <FontAwesomeIcon icon={faGithub} className="link_icon" />
          </a>
        </MobileContent>
        <MobileProject>
          <img src={mobileProject} alt="" />
        </MobileProject>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default Mobile;

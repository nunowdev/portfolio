import React from "react";
import {
  MobileContainer,
  MobileContent,
  MobileProject,
  MobileTitle,
  MobileWrapper,
} from "./style";

const Mobile = () => {
  return (
    <MobileContainer className="modal_opened">
      <MobileWrapper>
        <MobileTitle>Mobile</MobileTitle>
        <MobileContent>
          Throughout my career, I've also embarked on the professional journey
          of developing mobile apps with Flutter.
        </MobileContent>
        <MobileProject>s</MobileProject>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default Mobile;

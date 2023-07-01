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
        <MobileContent>blblabla</MobileContent>
        <MobileProject>s</MobileProject>
      </MobileWrapper>
    </MobileContainer>
  );
};

export default Mobile;

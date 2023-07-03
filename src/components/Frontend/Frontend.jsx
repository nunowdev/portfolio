import React from "react";
import {
  FrontendContainer,
  FrontendGrid,
  FrontendTitle,
  GridProject,
} from "./style";

const Frontend = () => {
  return (
    <FrontendContainer className="modal_opened">
      <FrontendGrid>
        <FrontendTitle className="frontend_mobile_title">
          Frontend Projects
        </FrontendTitle>
        <GridProject></GridProject>
        <FrontendTitle className="frontend_desktop_title">
          Frontend Projects
        </FrontendTitle>
        <GridProject></GridProject>
        <GridProject></GridProject>
      </FrontendGrid>
    </FrontendContainer>
  );
};

export default Frontend;

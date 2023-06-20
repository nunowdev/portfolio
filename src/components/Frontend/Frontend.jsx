import React from "react";
import {
  FrontendContainer,
  FrontendGrid,
  FrontendTitle,
  GridProject,
} from "./style";

const Frontend = () => {
  return (
    <FrontendContainer>
      <FrontendGrid>
        <GridProject></GridProject>
        <FrontendTitle>Frontend Projects</FrontendTitle>
        <GridProject></GridProject>
        <GridProject></GridProject>
      </FrontendGrid>
    </FrontendContainer>
  );
};

export default Frontend;

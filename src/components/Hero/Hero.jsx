import React from "react";
import { HeroBottom, HeroContainer, HeroUpper } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroUpper>Don't stop when you're tired,</HeroUpper>
      <HeroBottom>stop when you're done.</HeroBottom>
    </HeroContainer>
  );
};

export default Hero;

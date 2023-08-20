import React, { useEffect, useState } from "react";
import {
  IntroductionContainer,
  IntroductionLeft,
  IntroductionRight,
} from "./style";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import lines from "./media/lines.svg";

const Introduction = () => {
  function closeIntroduction() {
    gsap.to(".introduction", { y: "-110%", display: "none" });
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms)); // time sleep function
  const [isLaptop, setIsLaptop] = useState(true); // change between laptop and mobile shape
  const [timer, setTimer] = useState(1); // timer to stop useEffect from running on an infinite loop and crash the website

  if (isLaptop === true) {
    gsap.to(".part-1", { width: 370, height: 250, borderRadius: 10 });
    gsap.to(".part-2", {
      position: "relative",
      width: 370,
      height: 10,
      borderRadius: 10,
    });
  } else {
    gsap.to(".part-1", { width: 200, height: 350, borderRadius: 20 });
    gsap.to(".part-2", {
      position: "absolute",
      top: -5,
      width: 100,
      height: 10,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    });
  }

  // Change the shape => Laptop || Mobile

  function laptopAnimation() {
    sleep(2000).then(() => {
      setIsLaptop(!isLaptop);
    });
  }

  // Make the function run forever but with an interval

  React.useEffect(function () {
    setTimeout(function () {
      laptopAnimation();
      setTimer(timer + 1);
    }, 2000);
  });

  return (
    <IntroductionContainer className="introduction">
      <img src={lines} alt="" className="lines" />
      <IntroductionLeft>
        <div className="title">Nuno Alves</div>
        <div className="subtitle">Frontend Developer</div>
      </IntroductionLeft>
      <IntroductionRight>
        <div className="part-1" />
        <div className="part-2" />
      </IntroductionRight>
      <FontAwesomeIcon
        icon={faChevronDown}
        onClick={() => closeIntroduction()}
      />
    </IntroductionContainer>
  );
};

export default Introduction;

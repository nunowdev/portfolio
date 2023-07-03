import React from "react";
import {
  AboutContainer,
  AboutTitle,
  AboutWrapper,
  AboutSubtitle,
  AboutContent,
  AboutMainText,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { modalOpen } from "../modalControl";

const About = () => {
  return (
    <AboutContainer className="modal_opened">
      <AboutWrapper>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          <div className="part">
            <AboutSubtitle>Here's a bit about me.</AboutSubtitle>
            <AboutMainText>
              I'm a 20 year-old Portuguese <b>frontend developer</b> with
              experience developing websites with great user experiences. I
              currently solve <b> extremely difficult engineering problems </b>{" "}
              every day with <b>React and Flutter.</b>
            </AboutMainText>
          </div>
          <div className="part">
            <AboutSubtitle>Email</AboutSubtitle>
            <AboutMainText className="email">nunowdev@gmail.com</AboutMainText>
            <AboutSubtitle>Socials</AboutSubtitle>
            <div className="socials">
              <a
                href="https://www.linkedin.com/in/nunowdev/"
                target="_blank"
                className="social"
              >
                <FontAwesomeIcon icon={faLinkedin} />
                <div className="name">LinkedIn</div>
              </a>
              <a
                href="https://github.com/nunowdev"
                target="_blank"
                className="social"
              >
                <FontAwesomeIcon icon={faGithub} />
                <div className="name">Github</div>
              </a>
            </div>
          </div>
          <div className="part center">
            <button className="resume_button" onClick={() => modalOpen()}>
              Contact
            </button>
            <button className="resume_button">Resume</button>
          </div>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

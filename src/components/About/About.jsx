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

const About = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <AboutTitle>About</AboutTitle>
        <AboutContent>
          <div className="part">
            <AboutSubtitle>Subtitle</AboutSubtitle>
            <AboutMainText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, iste numquam facere placeat voluptate consequuntur
              repellendus dicta, at, vel accusantium
            </AboutMainText>
          </div>
          <div className="part">
            <AboutSubtitle>Email</AboutSubtitle>
            <AboutMainText className="email">rrrrrr@gmail.com</AboutMainText>
            <AboutSubtitle>Socials</AboutSubtitle>
            <div className="socials">
              <div className="social">
                <FontAwesomeIcon icon={faLinkedin} />
                <div className="name">LinkedIn</div>
              </div>
              <div className="social">
                <FontAwesomeIcon icon={faGithub} />
                <div className="name">Github</div>
              </div>
            </div>
          </div>
          <div className="part center">
            <button className="resume_button">Resume</button>
          </div>
        </AboutContent>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

import React from "react";
import {
  FrontendContainer,
  FrontendGrid,
  FrontendTitle,
  GridProject,
} from "./style";
import library from "./media/library.png";
import gallery from "./media/gallery.png";
import tesla from "./media/tesla.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Frontend = () => {
  return (
    <FrontendContainer className="modal_opened" id="projects">
      <FrontendGrid>
        <FrontendTitle className="frontend_mobile_title">
          Frontend Projects
        </FrontendTitle>
        <GridProject>
          <img src={library} className="project_image" alt="" />
          <div className="project_bg">
            <div className="project_info">
              <div className="project-description">
                <div className="project_title">E-Commerce Library</div>
                <div className="project_subtitle">
                  HTML, CSS, JavaScript, React
                </div>
                <div className="project_description">
                  Using best practices with HTML, CSS, JavaScript and React
                  (+Hooks) <br /> I built a fake E-library and a clean UI design
                  with a easy-to-understand layout for the website.
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/nunowdev/library-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="link_icon" />
                  </a>
                  <a
                    href="https://library-app-nunowdev.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} className="link_icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </GridProject>
        <FrontendTitle className="frontend_desktop_title">
          Frontend Projects
        </FrontendTitle>
        <GridProject>
          <img src={gallery} className="project_image" alt="" />
          <div className="project_bg">
            <div className="project_info">
              <div className="project-description">
                <div className="project_title">Gallery</div>
                <div className="project_subtitle">
                  HTML, CSS, JavaScript, React, Axios
                </div>
                <div className="project_description">
                  A React App which uses the Unsplash API with Axios to search
                  for high-quality images.
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/nunowdev/gallery-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="link_icon" />
                  </a>
                  <a
                    href="https://gallery-app-nunowdev.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} className="link_icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </GridProject>
        <GridProject>
          <img src={tesla} className="project_image" alt="" />
          <div className="project_bg">
            <div className="project_info">
              <div className="project-description">
                <div className="project_title">Tesla Home Page Clone</div>
                <div className="project_subtitle">
                  HTML, CSS, Scroll-Snapping, AOS-Library
                </div>
                <div className="project_description">
                  A Tesla Home Page Clone, with pure CSS including
                  Scroll-Snapping.
                </div>
                <div className="project_links">
                  <a
                    href="https://github.com/nunowdev/tesla-homepage-clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faGithub} className="link_icon" />
                  </a>
                  <a
                    href="https://tesla-homepage-clone-nunowdev.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLink} className="link_icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </GridProject>
      </FrontendGrid>
    </FrontendContainer>
  );
};

export default Frontend;

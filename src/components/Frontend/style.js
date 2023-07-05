import { styled } from "styled-components";

export const FrontendContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 0 16%;
  @media only screen and (max-width: 900px) {
    padding: 0 40px;
    padding-bottom: 50px;
  }
`;

export const FrontendTitle = styled.div`
  font-size: 72px;
  color: black;
  font-weight: 700;
  margin-left: 20%;
  @media only screen and (max-width: 900px) {
    font-size: 40px;
    margin-left: 0;
    text-align: center;
  }
  &.frontend_mobile_title {
    display: none;
    @media only screen and (max-width: 900px) {
      display: block;
    }
  }
  &.frontend_desktop_title {
    display: block;
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
`;

export const FrontendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
  align-items: center;
  justify-items: center;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
  }
`;

export const GridProject = styled.div`
  width: 100%;
  height: 400px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  .project_image {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
  }
  &:hover {
    .project_bg {
      opacity: 0.95;
    }
    .project_info {
      transform: translateY(-50%);
      opacity: 1;
    }
  }
  .project_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1c1d25;
    opacity: 0;
    border-radius: 10px;
    transition: all 350ms ease;
  }
  .project_info {
    position: absolute;
    top: 50%;
    left: 20px;
    transform: translateY(100%);
    color: white;
    opacity: 0;
    max-width: 550px;
    transition: opacity 300ms, transform 450ms ease;
    .project_title {
      font-size: 40px;
      @media only screen and (max-width: 1200px) {
        font-size: 20px;
      }
    }
    .project_subtitle {
      font-size: 20px;
      margin-bottom: 20px;
      @media only screen and (max-width: 1200px) {
        font-size: 15px;
      }
    }
    .project_description {
      line-height: 1.5;
      font-size: 16px;
      font-weight: 300;
      @media only screen and (max-width: 1200px) {
        display: none;
      }
    }
  }

  .project_links {
    display: flex;
    margin-top: 20px;
    .link_icon {
      color: white;
      width: 35px;
      height: 35px;
      margin-right: 20px;
    }
  }

  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 200px;
  }
`;

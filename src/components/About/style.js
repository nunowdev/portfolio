import { styled } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 1000px;
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1500px) {
    padding: 100px;
    margin-bottom: 40px;
    height: 1040px;
  }
  @media only screen and (max-width: 900px) {
    padding: 0px;
    margin-bottom: 40px;
    height: 1040px;
  }
`;

export const AboutWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: #111111;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  @media only screen and (max-width: 1500px) {
    width: 100%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
  }
`;

export const AboutTitle = styled.div`
  font-size: 72px;
  color: white;
  font-weight: 700;
  text-align: center;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  margin-top: 50px;
  height: 400px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  .part {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 300px;
    height: 300px;
    margin: 0 40px;
    @media only screen and (max-width: 1500px) {
      margin: 0 15px;
    }
    @media only screen and (max-width: 900px) {
      margin: 0;
    }
    &.center {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      .resume_button {
        width: 200px;
        height: 100px;
        background-color: white;
        cursor: pointer;
        border: none;
        outline: none;
        font-size: 24px;
        color: black;
        font-weight: 700;
        transition: all 300ms ease;
        margin: 20px 0;
        &:hover {
          transform: scale(1.1) translateY(-10px);
        }
      }
    }
    .email {
      margin-bottom: 40px;
    }
    .socials {
      margin-bottom: 40px;
      display: flex;
      .social {
        position: relative;
        margin: 0 10px;
        cursor: pointer;
        &:first-of-type {
          margin-left: 0px;
        }
        &:hover > .name {
          opacity: 1;
          transform: scale(1.1);
        }
        svg {
          width: 30px;
          height: 30px;
          color: white;
        }
        .name {
          color: white;
          position: absolute;
          display: block;
          opacity: 0;
          top: 50px;
          transition: all 350ms ease;
          font-size: 22px;
        }
      }
    }
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const AboutSubtitle = styled.div`
  font-size: 24px;
  color: white;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const AboutMainText = styled.div`
  font-size: 18px;
  color: white;
  font-weight: 400;
  @media only screen and (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

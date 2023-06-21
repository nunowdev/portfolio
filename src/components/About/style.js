import { styled } from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  height: 1000px;
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AboutWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: black;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
`;

export const AboutTitle = styled.div`
  font-size: 72px;
  color: white;
  font-weight: 700;
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  margin-top: 50px;
  height: 400px;
  .part {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;

    width: 300px;
    height: 300px;
    margin: 0 40px;
    &.center {
      display: flex;
      align-items: center;
      justify-content: flex-start;
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
`;

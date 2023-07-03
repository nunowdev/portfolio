import { styled } from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  margin-top: 144px;

  @media only screen and (max-width: 900px) {
    margin-top: 80px;
  }
`;

export const HeroUpper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: black;
  font-weight: 700;
  white-space: nowrap;
  @media only screen and (max-width: 1500px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;
export const HeroBottom = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 72px;
  color: black;
  font-weight: 700;
  white-space: nowrap;
  @media only screen and (max-width: 1500px) {
    font-size: 50px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const ContactModal = styled.div`
  position: absolute;
  width: 40%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  max-width: 1100px;
  height: 700px;

  background-color: #111111;
  z-index: 99;
  opacity: 0;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  @media only screen and (max-width: 900px) {
    width: 95%;
  }
  .modal_form {
    position: relative;
    button {
      top: 150px;
      right: -300px;
      background-color: white;
      border: 2px solid white;
      color: black;
      font-weight: 700;
      width: 100%;
      max-width: 240px;
      padding: 12px 14px;
      font-size: 20px;
      transition: all 300ms ease;
      cursor: pointer;
      &:hover {
        background-color: #111111;
        color: white;
      }
    }
  }
  .close_modal_button {
    background-color: transparent;
    border: none;
    width: 35px;
    height: 35px;
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 20px;
    svg {
      width: 100%;
      height: 100%;
      color: white;
      transition: all 350ms ease;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`;

export const ContactButton = styled.div`
  width: 70px;
  height: 70px;
  font-size: 32px;
  border-radius: 50%;
  border: none;
  background-color: #111111;
  color: White;
  bottom: 32px;
  right: 60px;
  z-index: 100;
  position: fixed;
  box-shadow: 0 12px 30px 0 rgb(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 350ms ease;
  @media only screen and (max-width: 900px) {
    right: 30px;
  }
  svg {
    transition: all 350ms ease;
  }
  &:hover {
    transform: translateY(-10px);
    svg {
      transform: scale(1.2);
    }
  }
`;

export const ContactModalTitle = styled.h1`
  color: white;
  font-size: 50px;
`;

export const ContactModalSubtitle = styled.h2`
  margin: 12px 0 50px 0;
  font-size: 20px;
  color: white;
`;

export const ContactModalFormItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
  }

  textarea {
    width: 150%;
    background-color: #111111;
    color: white;
    outline: none;
    border: 1px solid #c0c4cc;
    border-left: none;
    border-right: none;
    border-top: none;
    transition: all 300ms ease;
    resize: vertical;
    margin-top: 8px;
    max-height: 189px;
    &::-webkit-scrollbar {
      display: none;
    }
    &:focus {
      width: 230%;
    }
  }

  input {
    width: 150%;
    background-color: #111111;
    color: white;
    outline: none;
    border: 1px solid #c0c4cc;
    border-left: none;
    border-right: none;
    border-top: none;
    transition: all 300ms ease;
    &:focus {
      width: 230%;
    }
  }
`;

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
  @media only screen and (max-width: 900px) {
    font-size: 24px;
  }
`;

export const ContactModal = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;

  max-width: 1100px;
  height: 700px;
  border-radius: 20px;
  background-color: red;
  z-index: 99;
  opacity: 0;
  display: none;
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

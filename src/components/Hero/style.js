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

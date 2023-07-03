import { styled } from "styled-components";

export const MobileContainer = styled.div`
  width: 100%;
  height: 1000px;
  padding: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1220px) {
    padding: 0px;
    height: auto;
  }
`;

export const MobileWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: #111111;
  padding: 50px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  position: relative;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const MobileTitle = styled.div`
  font-size: 72px;
  color: white;
  font-weight: 700;
`;

export const MobileContent = styled.div`
  width: 40%;
  height: auto;
  margin-top: 50px;

  font-size: 18px;
  color: white;
  font-weight: 400;
  @media only screen and (max-width: 900px) {
    width: 100%;
  }
`;

export const MobileProject = styled.div`
  width: 25%;
  height: 600px;
  border: 2px solid green;
  position: absolute;
  right: 5%;
  min-width: 316px;
  @media only screen and (max-width: 1220px) {
    height: 500px;
    width: 100%;
    right: 0;
    position: relative;
    margin-top: 40px;
    max-width: 316px;
  }
`;

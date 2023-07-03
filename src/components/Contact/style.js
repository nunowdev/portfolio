import { styled } from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 700px;
  padding: 0 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    padding: 50px;
  }
`;

export const ContactTitle = styled.div`
  font-size: 72px;
  color: black;
  font-weight: 700;
  @media only screen and (max-width: 900px) {
    font-size: 50px;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  button {
    width: 200px;
    height: 100px;
    background-color: #111111;
    margin: 0 30px;
    cursor: pointer;
    border: none;
    outline: none;
    font-size: 24px;
    color: white;
    font-weight: 700;
    transition: all 300ms ease;
    &:hover {
      transform: scale(1.1) translateY(-10px);
    }
    @media only screen and (max-width: 900px) {
      margin: 20px 0;
    }
  }
`;

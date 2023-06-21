import { styled } from "styled-components";

export const ContactContainer = styled.div`
  width: 100%;
  height: 700px;
  padding: 0 16%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ContactTitle = styled.div`
  font-size: 72px;
  color: black;
  font-weight: 700;
`;

export const ContactButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  button {
    width: 200px;
    height: 100px;
    background-color: black;
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
  }
`;

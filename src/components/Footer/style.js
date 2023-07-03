import { styled } from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16%;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export const FooterItem = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 500;
`;

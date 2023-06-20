import { styled } from "styled-components";

export const FrontendContainer = styled.div`
  width: 100%;
  height: auto;

  padding: 0 16%;
`;

export const FrontendTitle = styled.div`
  font-size: 72px;
  color: black;
  font-weight: 700;
  margin-left: 20%;
`;

export const FrontendGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 100%;
  align-items: center;
`;

export const GridProject = styled.div`
  width: 600px;
  height: 400px;
  border: 2px solid green;
`;

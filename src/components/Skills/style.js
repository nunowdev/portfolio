import { styled } from "styled-components";

export const SkillsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  padding-left: 12%;
  margin-top: 200px;
  padding-bottom: 100px;
`;

export const SkillsTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: auto;
  font-size: 20px;
  color: black;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const SkillsDisplay = styled.div`
  width: 50%;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  height: auto;
  border-right: 2px solid black;

  .skill {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 100px;
    &:first-of-type {
      margin-left: 0px;
    }
    &:hover {
      .underline {
        transform: translateY(30px);
      }
      p {
        transform: translateY(-16px) scale(1.2);
      }
      img {
        filter: grayscale(0%) contrast(100%);
      }
    }
    p {
      font-size: 16px;
      color: black;
      transition: 200ms all ease;
      font-weight: 500;
    }
    .underline {
      width: 100%;
      height: 2px;
      background-color: gray;
      margin: 10px 0;
      transition: 200ms all ease;
      &:hover {
      }
    }
    img {
      width: 80px;
      height: 80px;
      filter: grayscale(100%) contrast(80%);
      transition: 200ms all ease;
    }
  }
`;

import { styled } from "styled-components";

export const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #232323;
  position: absolute;
  z-index: 500;
  overflow: hidden;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  .lines {
    position: absolute;

    transform: translate(-115px, -32px);
    @media only screen and (max-width: 900px) {
      display: none;
    }
  }
  svg {
    position: absolute;
    bottom: 100px;
    font-size: 35px;
    color: white;
    cursor: pointer;

    animation: 1s infinite alternate elevate;
  }
`;

export const IntroductionLeft = styled.div`
  width: 516px;
  height: 500px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 900px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding-bottom: 200px;
  }
  .title {
    font-size: 90px;
    color: white;
    font-weight: 500;
    @media only screen and (max-width: 900px) {
      font-size: 50px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .subtitle {
    font-size: 40px;
    color: #9a9a9a;
    font-weight: 500;
    width: 400px;
    @media only screen and (max-width: 900px) {
      font-size: 20px;

      white-space: nowrap;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const IntroductionRight = styled.div`
  width: 800px;
  height: auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 300px;
  @media only screen and (max-width: 900px) {
    width: 100%;
    display: none;
  }
  .part-1 {
    width: 370px;
    height: 250px;
    border: 5px solid white;
    border-radius: 10px;
    @media only screen and (max-width: 900px) {
      width: 123px;
      height: 83px;
    }
  }
  .part-2 {
    width: 370px;
    height: 10px;
    background-color: white;
    margin-top: 10px;
    border-radius: 10px;
  }
`;

// MOBILE

// .part-1 {
//   width: 200px;
//   height: 350px;
//   border: 5px solid white;
//   border-radius: 20px;
// }
// .part-2 {
//   position: absolute;
//   top: -5px;
//   width: 100px;
//   height: 10px;
//   background-color: white;
//   margin-top: 10px;
//   border-bottom-right-radius: 10px;
//   border-bottom-left-radius: 10px;
// }

// LAPTOP

// .part-1 {
//     width: 370px;
//     height: 250px;
//     border: 5px solid white;
//     border-radius: 10px;
//   }
//   .part-2 {
//     width: 370px;
//     height: 10px;
//     background-color: white;
//     margin-top: 10px;
//     border-radius: 10px;
//   }

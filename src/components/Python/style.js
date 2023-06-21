import { styled } from "styled-components";

export const PythonContainer = styled.div`
  width: 100%;
  height: 700px;

  padding: 0 16%;
`;

export const PythonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const PythonTitle = styled.div`
  font-size: 72px;
  color: black;
  font-weight: 700;
`;

export const PythonContent = styled.div`
  width: 100%;
  height: 500px;

  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .python_icon {
    width: 500px;
    height: 500px;

    filter: grayscale(100%) contrast(80%);
  }
`;

export const PythonText = styled.div`
  font-size: 20px;
  color: black;
  font-weight: 500;
  margin-bottom: 213px;
  width: 500px;
  height: 50%;
  display: flex;
  align-items: center;
`;

import React from "react";
import {
  PythonContainer,
  PythonContent,
  PythonText,
  PythonTitle,
  PythonWrapper,
} from "./style";

const Python = () => {
  return (
    <PythonContainer>
      <PythonWrapper>
        <PythonTitle>I also know some python</PythonTitle>
        <PythonContent>
          <PythonText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta
            hic eligendi exercitationem in neque ipsum nisi quas aliquid totam
            aspernatur aperiam sequi, tempora, commodi, facere velit culpa
            cumque autem.
          </PythonText>
          <img
            className="python_icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          />
        </PythonContent>
      </PythonWrapper>
    </PythonContainer>
  );
};

export default Python;

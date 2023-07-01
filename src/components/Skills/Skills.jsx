import React from "react";
import { SkillsContainer, SkillsDisplay, SkillsTitle } from "./style";
import skills from "./data";

const Skills = () => {
  return (
    <SkillsContainer className="modal_opened">
      <SkillsTitle>Technologies I work with</SkillsTitle>
      <SkillsDisplay>
        {skills.map((skill) => (
          <div className="skill">
            <img src={skill.imageURL} />
            <div className="underline" />
            <p>{skill.name}</p>
          </div>
        ))}
      </SkillsDisplay>
    </SkillsContainer>
  );
};

export default Skills;

import React from "react";
import DataBase from "./DataBase";
import ProgrammingLanguage from "./ProgrammingLanguage";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import AnimationSkills from "./AnimationSkills";
import UiDesignSkills from "./UiDesignSkills";
import ProfessionalSkills from "./ProfessionalSkills";
import OthersSkills from "./OthersSkills";

const Skills = () => {
  return (
    <div className="skills-container my-20" id="skills">
      <h1 className="text-[#FB2A2A] flex justify-center text-4xl font-semibold my-20">
        Skills
      </h1>
      <div className="skills-type bg-stone-700 mx-20 rounded-md">
        <div className="tech-heading mt-5 p-5">
          <h2 className="text-[#FB2A2A] text-3xl font-semibold">
            Technical Skills
          </h2>
        </div>

        <ProgrammingLanguage />
        <FrontendSkills />
        <BackendSkills />

        <DataBase />
        <AnimationSkills />
        <UiDesignSkills />
        <OthersSkills/>
        <ProfessionalSkills />
      </div>
    </div>
  );
};

export default Skills;

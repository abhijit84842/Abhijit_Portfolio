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
    <div className="skills-container p-5  2xl:my-20" id="skills">
      <h1 className="text-[#FB2A2A] flex justify-center text-3xl font-semibold my-5 2xl:my-20 2xl:text-4xl">
        Skills
      </h1>
      <div className="skills-type bg-stone-700 mx-0 rounded-md mt-10 2xl:mx-20">
        <div className="tech-heading p-2  2xl:mt-5 2xl:p-5">
          <h2 className="text-[#FB2A2A] text-xl font-semibold 2xl:text-3xl">
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

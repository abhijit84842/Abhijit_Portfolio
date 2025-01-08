import React from "react";
import UiUx from "./UiUx";
import FrontendProject from "./FrontendProject";
import MernStackProject from "./MernStackProject";

const MyProject = () => {
  return (
    <div className="project-container my-20">
      <div className="sub-container">
        <h1 className="text-[#FB2A2A] flex justify-center  text-4xl font-semibold my-20">
          My Projects
        </h1>
        <div className="projects-nav">
          <div className="flex justify-center gap-20 text-2xl">
            <p>Frontend Projects</p>
            <p>Full Stack Projects</p>
            <p>UI & UX Design</p>
            <p>Others Projects</p>
          </div>

          <div className="blank-div border border-red-500 mx-20 my-10"></div>
        </div>
        <FrontendProject />

        <MernStackProject />

        <UiUx />
      </div>
    </div>
  );
};

export default MyProject;

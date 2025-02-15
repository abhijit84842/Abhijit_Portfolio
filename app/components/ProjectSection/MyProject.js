import React from "react";
import UiUx from "./UiUx";
import FrontendProject from "./FrontendProject";
import MernStackProject from "./MernStackProject";
import Link from "next/link";

const MyProject = () => {
  return (
    <div className="project-container my-5 2xl:my-20">
      <div className="sub-container">
        <h1 className="text-[#FB2A2A] flex justify-center  text-2xl font-semibold my-10 2xl:my-20 2xl:text-4xl">
          My Projects
        </h1>
        <div className="projects-nav">
          <div className="flex justify-center  gap-5  text-sm ml-8 lg:flex lg:justify-center lg:gap-10 2xl:flex 2xl:justify-center 2xl:gap-20 2xl:text-2xl">
            <Link href={"#"}>Frontend Projects</Link>
            <Link href={"#"}>Full Stack Projects</Link>
            <Link href={"#"}>UI & UX Design</Link>
            <Link href={"#"}>Others Projects</Link>
          </div>

          <div className="blank-div border border-red-500 mx-20 my-5  2xl:my-10"></div>
        </div>
        <FrontendProject />

        <MernStackProject />

        <UiUx />
      </div>
    </div>
  );
};

export default MyProject;

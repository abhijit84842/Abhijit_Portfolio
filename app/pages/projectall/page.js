
import FrontendProjectsShow from "@/app/components/ProjectsShow/FrontendProjectsShow";
import FullStackProjectsShow from "@/app/components/ProjectsShow/FullStackProjectsShow";
import OthersProjectsShow from "@/app/components/ProjectsShow/OthersProjectsShow";
import React from "react";

const page = () => {
  return (
    <div className="allprojects-main-container">
      <h1 className=" font-semibold flex justify-center mt-5 text-3xl lg:text-5xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mt-10">All Projects</h1>
      <div className=" bg-zinc-900 rounded-lg mx-2 p-2 my-6 lg:p-4 2xl:mx-10  2xl:p-4 ">
      <FullStackProjectsShow/>
      <FrontendProjectsShow/>
      <OthersProjectsShow/>
      </div>
     
    </div>
  );
};

export default page;

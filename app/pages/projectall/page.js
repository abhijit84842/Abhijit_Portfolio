
import FrontendProjectsShow from "@/app/components/ProjectsShow/FrontendProjectsShow";
import FullStackProjectsShow from "@/app/components/ProjectsShow/FullStackProjectsShow";
import OthersProjectsShow from "@/app/components/ProjectsShow/OthersProjectsShow";
import React from "react";

const page = () => {
  return (
    <div className="allprojects-main-container">
      <h1 className="flex justify-center text-5xl font-semibold mt-10">All Projects</h1>
      <div className=" bg-zinc-900 mx-10 rounded-lg p-4 my-10">
      <FullStackProjectsShow/>
      <FrontendProjectsShow/>
      <OthersProjectsShow/>
      </div>
     
    </div>
  );
};

export default page;

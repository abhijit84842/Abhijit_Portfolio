"use client";
import React from "react";
import DataBase from "./DataBase";
import ProgrammingLanguage from "./ProgrammingLanguage";
import FrontendSkills from "./FrontendSkills";
import BackendSkills from "./BackendSkills";
import AnimationSkills from "./AnimationSkills";
import UiDesignSkills from "./UiDesignSkills";
import ProfessionalSkills from "./ProfessionalSkills";
import OthersSkills from "./OthersSkills";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".skills-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".skills-container",
          // markers:true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".skills-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".skills-container",
          // markers:true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="skills-container p-5  2xl:my-20" id="skills">
      <h1 className="skills-top-heading text-[#FB2A2A] flex justify-center text-3xl font-semibold my-5 2xl:my-20 2xl:text-4xl">
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
        <OthersSkills />
        <ProfessionalSkills />
      </div>
    </div>
  );
};

export default Skills;

"use client";
import React from "react";
import UiUx from "./UiUx";
import FrontendProject from "./FrontendProject";
import MernStackProject from "./MernStackProject";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const MyProject = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();
  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      // for heading
      gsap.from(".project-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".project-container",
          // markers:true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
    // for project navbar
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-navlink", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 1,
        scrollTrigger: {
          trigger: ".projects-nav",
          // markers: true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    // for top heading
    mm.add("(min-width:1024px)", () => {
      gsap.from(".project-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".project-container",
          // markers:true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // for project navbar
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-navlink", {
        y: 100,
        opacity: 0,
        duration: 2,
        stagger: 1,
        scrollTrigger: {
          trigger: ".projects-nav",
          // markers:true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="project-container my-5 2xl:my-20">
      <div className="sub-container">
        <h1 className="project-top-heading text-[#FB2A2A] flex justify-center  text-2xl font-semibold my-10 2xl:my-20 2xl:text-4xl">
          My Projects
        </h1>
        <div className="projects-nav">
          <div className="flex justify-center  gap-5  text-sm ml-8 lg:flex lg:justify-center lg:gap-10 2xl:flex 2xl:justify-center 2xl:gap-20 2xl:text-2xl">
            <Link href={"/pages/projectall/#frontendprojects"} className="gsap-navlink">
              Frontend Projects
            </Link>
            <Link href={"/pages/projectall/#fullstackprojects"} className="gsap-navlink">
              Full Stack Projects
            </Link>
            <Link
              href={
                "https://www.figma.com/files/team/1344737290098605304/recents-and-sharing/recently-viewed?fuid=1344737288254071152"
              }
              className="gsap-navlink"
            >
              UI & UX Design
            </Link>
            <Link href={"/pages/projectall/#othersprojects"} className="gsap-navlink">
              Others Projects
            </Link>
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

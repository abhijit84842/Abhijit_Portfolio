"use client";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import React from "react";

const Experience = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia(); // mm for math media

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".experience-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".experience-container",
          // markers:true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });

      gsap.from(".company", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".experience-container",
          // markers: true,
          start: "top 50%",
          end: "top 20%",
          scrub: 2,
        },
      });
    });

    // Responsive For desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".experience-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".experience-container",
          // markers:true,
          start: "top 80%",
          end: "top 40%",
          scrub: 2,
        },
      });

      gsap.from(".company", {
        y: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".experience-container",
          // markers: true,
          start: "top 70%",
          end: "top 40%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="experience-container my-10 p-5 2xl:p-0" id="exprience">
      <h1 className="experience-heading text-[#F61E1E] flex justify-center text-3xl font-semibold 2xl:text-4xl">
        My Experience
      </h1>
      <div className="company    mt-5 2xl:mx-20 2xl:mt-10 2xl:flex justify-between">
        <div className="company-name">
          <p className="text-sm text-white font-semibold 2xl:text-3xl">
            Sikharthy Infotech Pvt.Ltd <span className="text-[#F61E1E]">|</span>{" "}
            <span className="text-[#0B44FF]">Frontend Developer Intern</span>{" "}
          </p>
        </div>
        <div className="date mt-2 2xl:mt-0">
          <p className="text-sm text-[#F61E1E] 2xl:text-2xl">
            Jan 2023 - June 2023
          </p>
        </div>
      </div>
      <div className="experience-text  bg-stone-700 rounded-md mt-5 w-full  2xl:w-[80%] 2xl:mt-10 2xl:ml-[6rem]">
        <ul className="ml-2 p-3 text-white list-disc leading-5    2xl:ml-5 2xl:p-5 2xl:leading-10">
          <li className="my-3 ">
            {" "}
            <p className="text-sm  2xl:text-xl">
              {" "}
              I gained hands-on experience in front-end development, working on
              multiple projects that involved creating dynamic, user-friendly
              interfaces and also SEO friendly. My stack included React, Redux
              Toolkit, Next.js, and Tailwind CSS, while design aspects were
              handled using Figma and Canva. Through these projects, I honed my
              skills in creating high-performance, scalable web applications.
            </p>
          </li>
          <li className="my-3">
            <p className="text-sm text-ellipsis 2xl:text-xl">
              Directed design, writing and production of page content to fulfill
              project demands and satisfy customer needs. Reviewed.
            </p>{" "}
          </li>
          <li className="my-3">
            <p className="text-sm 2xl:text-xl">
              {" "}
              <span className="text-lg font-semibold 2xl:text-2xl">
                Technology Used :-{" "}
              </span>{" "}
              React + Redux Toolkit , Next Js , HTML5, CSS3 , JavaScript,
              Tailwind Css, BootStrap
            </p>
          </li>
          <li>
            <div className=" 2xl:flex">
              <p className="text-lg font-semibold 2xl:text-2xl">Tools :- </p>
              <ul className="list-disc bg-stone-800 ml-0 mt-2 p-5 rounded-md 2xl:ml-20 2xl:p-5 2xl:mt-5">
                <li className="my-2">
                  <p className="text-sm 2xl:text-lg">
                    {" "}
                    <span className="text-lg font-semibold 2xl:text-xl">
                      UI & UX :-{" "}
                    </span>
                    Figma & Canva
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-sm 2xl:text-lg">
                    <span className="text-lg font-semibold 2xl:text-xl">
                      IDE Use :-{" "}
                    </span>
                    VS Code , stackBlitz
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-sm 2xl:text-lg">
                    <span className="text-lg font-semibold 2xl:text-xl">
                      For Debugging :-{" "}
                    </span>
                    React Developer Tool , GitHub Copilot etc .
                  </p>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;

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
            <span className="text-[#0B44FF]">Web Development Intern</span>{" "}
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
            <p className="text-sm  2xl:text-xl tracking-wide text-white/90">
              During my internship, I worked on the development of a{" "}
              <strong>Student Feedback System</strong>, gaining hands-on
              experience in building a complete web application from frontend
              interface to backend processing and database management.
            </p>
          </li>
          <li className="my-3">
            <p className="text-sm text-ellipsis 2xl:text-xl text-white/90 tracking-wide">
              Directed design, writing and production of page content to fulfill
              project demands and satisfy customer needs and Reviewed.
            </p>{" "}
          </li>
          <li className="my-3">
            <p className="text-sm 2xl:text-xl text-white/90">
              {" "}
              <span className="text-lg font-semibold 2xl:text-2xl text-blue-500">
                Technology Used :-{" "}
              </span>{" "}
              HTML,CSS,PHP,MYSQL,XAMPP
            </p>
          </li>
          <div>
            <p className="2xl:text-2xl font-semibold text-lg text-blue-500">
              Key Contributions :-{" "}
            </p>
            <ul className="ml-5 list-disc text-sm 2xl:text-xl text-white/90 tracking-wide my-2 flex flex-col gap-2">
              <li>
                Developed the application&apos;s frontend interface using HTML
                and CSS with a focus on clean and user-friendly inte
              </li>
              <li>
                Implemented server-side functionality using PHP to process forms
                and manage application workflows.
              </li>
              <li>
                Designed and integrated MySQL database operations for storing
                and retrieving feedback data.
              </li>
              <li>
                Built feedback submission and data-management functionality to
                replace a manual feedback process with a structured digital
                workflow.
              </li>
              <li>
                Connected frontend forms with backend logic and database
                operations to create an end-to-end web application.
              </li>
              <li>
                Worked with XAMPP for local PHP and MySQL development, testing,
                and debugging.
              </li>
            </ul>
          </div>
          <li>
            <div className=" 2xl:flex">
              <p className="text-lg font-semibold 2xl:text-2xl text-blue-500">
                Tools :-{" "}
              </p>
              <ul className="list-disc bg-stone-800 ml-0 mt-2 p-5 rounded-md 2xl:ml-20 2xl:p-5 2xl:mt-5">
                <li className="my-2">
                  <p className="text-sm 2xl:text-lg text-white/90">
                    {" "}
                    <span className="text-lg font-semibold 2xl:text-xl text-white">
                      UI & UX :-{" "}
                    </span>
                    Figma & Canva
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-sm 2xl:text-lg text-white/90">
                    <span className="text-lg font-semibold 2xl:text-xl text-white">
                      IDE Use :-{" "}
                    </span>
                    VS Code
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

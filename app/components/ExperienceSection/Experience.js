import React from "react";

const Experience = () => {
  return (
    <div className="experience-container my-20">
      <h1 className="text-[#F61E1E] flex justify-center text-4xl font-semibold">
        My Experience
      </h1>
      <div className="company flex justify-between  mx-20 mt-10 ">
        <div className="company-name">
          <p className="text-3xl text-white font-semibold">
            Sikharthy Infotech Pvt.Ltd <span className="text-[#F61E1E]">|</span>{" "}
            <span className="text-[#0B44FF]">Frontend Developer Intern</span>{" "}
          </p>
        </div>
        <div className="date">
          <p className="text-2xl text-[#F61E1E]">Jan 2023 - June 2023</p>
        </div>
      </div>
      <div className="experience-text  w-[80%] bg-stone-700  mt-5 ml-[6rem] rounded-md">
        <ul className="ml-5 p-5 text-white list-disc leading-10">
          <li className="my-3 ">
            {" "}
            <p className="text-xl">
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
            <p className="text-xl">
              Directed design, writing and production of page content to fulfill
              project demands and satisfy customer needs. Reviewed.
            </p>{" "}
          </li>
          <li className="my-3">
            <p className="text-xl">
              {" "}
              <span className="text-2xl font-semibold">
                Technology Used :-{" "}
              </span>{" "}
              React + Redux Toolkit , Next Js , HTML5, CSS3 , JavaScript,
              Tailwind Css, BootStrap
            </p>
          </li>
          <li>
            <div className="flex">
              <p className="text-2xl font-semibold">Tools :- </p>
              <ul className="list-disc bg-stone-800 ml-20 mt-5 p-5 rounded-md">
                <li className="my-2">
                  <p className="text-lg">
                    {" "}
                    <span className="text-xl font-semibold">UI & UX :- </span>
                    Figma & Canva
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-lg">
                    <span className="text-xl font-semibold">IDE Use :- </span>VS
                    Code , stackBlitz
                  </p>
                </li>
                <li className="my-2">
                  <p className="text-lg">
                    <span className="text-xl font-semibold">
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

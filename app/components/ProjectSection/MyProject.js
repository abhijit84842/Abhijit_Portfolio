import React from "react";

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
        <div className="frontend-projects  mx-10">
          <h1 className="text-2xl text-[#0B44FF] font-semibold mb-5">
            Frontend Projects
          </h1>
          <div className="frontend-project-box bg-[#18181B] p-3">
            <div className="project-box-2">
              <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
                Project 1
              </h2>
              <div className="my-5 ml-10 flex justify-end gap-20">
                <div className="left w-[80%] h-[20rem]">
                  <h2 className="text-2xl">Animated Travel Agency Website</h2>
                  <div className="mt-5">
                    <p>
                      This is a fully functional, responsive clothing e-commerce
                      website developed using React.js, HTML, CSS, and
                      JavaScript. Designed with a focus on smooth user
                      experience, the website offers intuitive navigation, a
                      clean and stylish UI, and a responsive layout adaptable to
                      both desktop and mobile devices. Key features include a
                      product listing page with filter options, a dynamic
                      product detail view, an interactive shopping cart, and an
                      elegant checkout flow. This project highlights my skills
                      in creating interactive, user-friendly web applications
                      and demonstrates my understanding of e-commerce design
                      principles.
                    </p>
                  </div>
                  <div className="mt-20 ml-20">
                    <p>See details...</p>
                  </div>
                </div>
                <div className="right w-[50%]">
                  <img src="/Projects/wear.png" alt="loading.." />
                </div>
              </div>
            </div>
            <div className="border border-red-500 mx-20 my-10"></div>

            <div className="project-box-2">
              <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
                Project 2
              </h2>
              <div className="my-5 ml-10 flex justify-end gap-20">
                <div className="right w-[50%]">
                  <img src="/Projects/wear.png" alt="loading.." />
                </div>
                <div className="left w-[80%] h-[20rem]">
                  <h2 className="text-2xl">Animated Travel Agency Website</h2>
                  <div className="mt-5">
                    <p>
                      This is a fully functional, responsive clothing e-commerce
                      website developed using React.js, HTML, CSS, and
                      JavaScript. Designed with a focus on smooth user
                      experience, the website offers intuitive navigation, a
                      clean and stylish UI, and a responsive layout adaptable to
                      both desktop and mobile devices. Key features include a
                      product listing page with filter options, a dynamic
                      product detail view, an interactive shopping cart, and an
                      elegant checkout flow. This project highlights my skills
                      in creating interactive, user-friendly web applications
                      and demonstrates my understanding of e-commerce design
                      principles.
                    </p>
                  </div>
                  <div className="mt-20 ml-20">
                    <p>See details...</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
                <button className="bg-[#1E49F6] p-5  text-2xl rounded-full">See More Projects...</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProject;

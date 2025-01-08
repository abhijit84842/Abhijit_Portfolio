import React from "react";

const UiUx = () => {
  return (
    <div className="uiux  mx-10 my-20">
      <h1 className="text-2xl text-[#0B44FF] font-semibold mb-5">
        UI & UX Design
      </h1>
      <div className="uiux-box bg-[#18181B] p-3 rounded-[2rem]">
        <div className="design-box-2">
          <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
            Design 1
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="left w-[80%] h-[20rem]">
              <h2 className="text-2xl">E-com Website Banner Design</h2>
              <div className="mt-5">
                <p>
                  This banner, designed in Figma, is crafted to capture user
                  attention and enhance the visual appeal of an e-commerce
                  website’s homepage. Featuring a clean layout with vibrant
                  colors, engaging typography, and carefully chosen imagery, the
                  banner is optimized to promote products and seasonal offers
                  effectively. The design balances aesthetics with
                  functionality, creating an inviting and professional look that
                  guides users into exploring the site further. This project
                  highlights my skills in visual hierarchy, color theory, and
                  digital branding.
                </p>
              </div>
              <div className="mt-20 ml-20">
                <p>See details...</p>
              </div>
            </div>
            <div className="right w-[50%]">
              <img src="/uiux/design1.png" alt="loading.." />
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-20 my-10"></div>

        <div className="uiux-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Design 2
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="right w-[50%]">
              <img src="/uiux/design2.png" alt="loading.." />
            </div>
            <div className="left w-[80%] h-[20rem]">
              <h2 className="text-2xl">Portfolio Design</h2>
              <div className="mt-5">
                <p>
                  Designed in Figma, this portfolio website captures a modern,
                  professional look tailored to highlight my projects and skills
                  effectively. The layout is crafted to ensure seamless
                  navigation, featuring a clean structure with strategic use of
                  whitespace and vibrant color accents. Each section, from the
                  project showcase to the about and contact pages, is designed
                  to provide an engaging user experience, with clear typography
                  and interactive elements that guide visitors through my work.
                  This project emphasizes my strengths in user-centric design,
                  visual hierarchy, and branding.
                </p>
              </div>
              <div className="mt-20 ml-20">
                <p>See details...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#1E49F6] p-5  text-2xl rounded-full">
            See More Designs...
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiUx;

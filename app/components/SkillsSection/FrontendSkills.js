import Image from "next/image";
import React from "react";

const FrontendSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
      <h3 className="text-2xl text-white font-semibold">Frontend Technology</h3>
      <div className="prolang flex justify-start gap-7 mt-5">
        <div className="html5  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-7">
          <Image
            src="/Skills/htmlskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">HTML5</p>
        </div>
        <div className="css3 w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-7">
          <Image
            src="/Skills/cssskills.png"
            alt="loading.."
            loading="lazy"
            width={100}
            height={100}
          />

          <p className="text-white text-lg font-semibold">CSS3</p>
        </div>
        <div className="javascript w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8 ">
          <Image
            src="/Skills/javascriptskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">JavaScript</p>
        </div>
        <div className="reactjs w-[7rem] min-w-[7rem] h-[11rem]    p-2 flex flex-col items-center gap-8">
          <Image
            src="/Skills/reactskills.png"
            alt="loading.."
            loading="lazy"
            width={115}
            height={115}
          />

          <p className="text-white text-[20px] font-semibold">React Js</p>
        </div>
        <div className="redux-toolkit w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/reduxskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Redux Toolkit</p>
        </div>
        <div className="nextjs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-9">
          <Image
            src="/Skills/nextjsskills.png"
            alt="loading.."
            loading="lazy"
            width={90}
            height={90}
          />

          <p className="text-white text-lg font-semibold">Next Js</p>
        </div>
        <div className="ejs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-14">
          <Image
            src="/Skills/ejsskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">EJS</p>
        </div>
        <div className="tailwindcss w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-12">
          <Image
            src="/Skills/tailwindcssskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Tailwind Css</p>
        </div>
        <div className="bootstrap w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-12">
          <Image
            src="/Skills/bootstrapskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">BootStrap5</p>
        </div>
      </div>
    </div>
  );
};

export default FrontendSkills;

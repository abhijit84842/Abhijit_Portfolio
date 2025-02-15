import Image from "next/image";
import React from "react";

const ProgrammingLanguage = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-2 my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        Programming Languages
      </h3>

      <div className="prolang  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="javascript p-2 flex flex-col items-center gap-4 ">
          <Image
            src="/Skills/javascriptskills.png"
            alt="loading.."
            loading="lazy"
            width={30}
            height={30}
          />
          <p className="text-white text-sm font-semibold">JavaScript</p>
        </div>
        <div className="python p-2 flex flex-col items-center gap-4">
          <Image
            src="/Skills/pythonskills.png"
            alt="loading.."
            loading="lazy"
            width={35}
            height={35}
          />

          <p className="text-white text-sm font-semibold">Python</p>
        </div>
        <div className="java p-2 flex flex-col items-center gap-4">
          <Image
            src="/Skills/javaskills.png"
            alt="loading.."
            loading="lazy"
            width={40}
            height={40}
          />

          <p className="text-white text-sm font-semibold">Core Java</p>
        </div>
      </div>

      <div className="prolang hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="javascript p-5 flex flex-col items-center gap-4">
          <Image
            src="/Skills/javascriptskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />
          <p className="text-white text-lg font-semibold">JavaScript</p>
        </div>
        <div className="python p-5 flex flex-col items-center gap-4">
          <Image
            src="/Skills/pythonskills.png"
            alt="loading.."
            loading="lazy"
            width={55}
            height={55}
          />

          <p className="text-white text-lg font-semibold">Python</p>
        </div>
        <div className="java p-5 flex flex-col items-center gap-4">
          <Image
            src="/Skills/javaskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Core Java</p>
        </div>
      </div>
    </div>
  );
};

export default ProgrammingLanguage;

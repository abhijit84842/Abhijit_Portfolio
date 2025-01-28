import Image from "next/image";
import React from "react";

const ProgrammingLanguage = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
      <h3 className="text-2xl text-white font-semibold">
        Programming Languages
      </h3>
      <div className="prolang  flex justify-start gap-20 mt-5">
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

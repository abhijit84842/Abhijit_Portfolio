import Image from "next/image";
import React from "react";

const ProfessionalSkills = () => {
  return (
    <div className=" mt-10  p-5 ">
      <div className="p-2 ">
        <h2 className="text-[#FB2A2A] text-3xl font-semibold">
          Professional Skills
        </h2>
      </div>
      <div className="bg-zinc-800 flex justify-start gap-20 my-5 p-5 rounded-lg">
        <div className=" p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/communicationskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">
            Communication Skill
          </p>
        </div>
        <div className=" p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/teamworkskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">Team Work</p>
        </div>
        <div className="p-5 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/problemskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">Problem Solving</p>
        </div>
        <div className=" p-5 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/creativityskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">Creativity</p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSkills;

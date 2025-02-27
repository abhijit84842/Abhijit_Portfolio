import Image from "next/image";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ProfessionalSkills = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-animation-professional-skills", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".professional-skills",
          // markers: true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-animation-professional-skills", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".professional-skills",
          // markers: true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className=" mt-5  p-2 2xl:p-5 2xl:mt-10">
      <div className="p-2 ">
        <h2 className="text-[#FB2A2A] text-xl font-semibold 2xl:text-3xl">
          Professional Skills
        </h2>
      </div>
      {/*Responsive For Mobile */}
      <div className="professional-skills bg-zinc-800 flex justify-start flex-wrap gap-5 my-5 p-2 rounded-lg 2xl:hidden">
        <div className="gsap-animation-professional-skills p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/communicationskills.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-sm text-white font-semibold">
            Communication Skill
          </p>
        </div>
        <div className="gsap-animation-professional-skills p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/teamworkskills.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-sm text-white font-semibold">Team Work</p>
        </div>
        <div className="gsap-animation-professional-skills p-2 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/problemskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-sm text-white font-semibold">Problem Solving</p>
        </div>
        <div className="gsap-animation-professional-skills p-2 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/creativityskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-sm text-white font-semibold">Creativity</p>
        </div>
      </div>

      {/*Responsive For Desktop */}
      <div className="professional-skills hidden     2xl:flex justify-start gap-20 bg-zinc-800 my-5 p-5 rounded-lg">
        <div className="gsap-animation-professional-skills    p-5 flex flex-col items-center gap-5">
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
        <div className="gsap-animation-professional-skills p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/teamworkskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">Team Work</p>
        </div>
        <div className="gsap-animation-professional-skills p-5 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/problemskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-lg text-white font-semibold">Problem Solving</p>
        </div>
        <div className="gsap-animation-professional-skills p-5 flex flex-col items-center gap-7 ">
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

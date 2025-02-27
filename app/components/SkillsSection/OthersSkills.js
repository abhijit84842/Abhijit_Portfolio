"use client"
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const OthersSkills = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-animation-others-skills", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".others-skills",
          // markers: true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-animation-others-skills", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".others-skills",
          // markers: true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="programming-lang bg-zinc-800 p-2  my-5 mx-2 rounded-lg 2xl:my-10 2xl:p-5 2xl:mx-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        Others Skills
      </h3>
      {/*Responsive For Mobile */}
      <div className="others-skills  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="gsap-animation-others-skills figma p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/gitskills.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-white text-sm font-semibold">Git & GitHub</p>
        </div>
      </div>

      {/*Responsive for Desktop */}
      <div className="others-skills hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="gsap-animation-others-skills figma p-5 flex flex-col items-center gap-2">
          <Image
            src="/Skills/gitskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Git & GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default OthersSkills;

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const IntroAnimation = () => {
    // INTRO SECTION ANIMATION
  useGSAP(() => {
    // final to initial
    gsap.from(".intro-animation", {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
    });
  });

  return (
    <div className="animated-box-intro">
      <div className="intro-animation">
        <p className="text-3xl font-semibold">
          <span className="text-[#F61E1E]">Hi</span>, It's Me
        </p>
      </div>
      <div className="intro-animation">
        <p className="text-5xl font-extrabold mt-2 text-[#FB2A2A]">
          Abhijit Das
        </p>
      </div>
      <div className="intro-animation">
        <p className="text-4xl font-semibold mt-5">
          And I'm a <span className="text-[#0B44FF]">MERN Stack Developer</span>
        </p>
      </div>

      <div className=" intro-animation sub-intro w-[100%] ml-5 mt-2">
        <p>
          I am a passionate and versatile full stack developer with expertise in
          both frontend and backend technologies. I specialize in building
          efficient, scalable, and user-friendly applications, utilizing a wide
          range of modern tools and frameworks. From crafting seamless user
          interfaces to ensuring robust server-side logic.
        </p>
      </div>
    </div>
  );
};

export default IntroAnimation;

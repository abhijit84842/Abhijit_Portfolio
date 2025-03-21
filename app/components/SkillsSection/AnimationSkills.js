"use client"
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const AnimationSkills = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-animation-animation", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".animation",
          // markers: true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-animation-animation", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".animation",
          // markers: true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className=" bg-zinc-800 p-2  my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        Animation
      </h3>

      {/*Responsive For Mobile */}
      <div className="animation  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="gsap-animation-animation   h-[7rem] p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/gsapskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">GSAP</p>
        </div>
        <div className="gsap-animation-animation swiper  h-[7rem] p-2 flex flex-col items-center gap-8">
          <Image
            src="/Skills/swiperskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">Swiper Js</p>
        </div>
        <div className="gsap-animation-animation canva  h-[7rem] p-2 flex flex-col items-center gap-9 ">
          <Image
            src="/Skills/scrollskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-sm font-semibold">Scroll Trigger</p>
        </div>
      </div>

      {/*Responsive For Desktop */}
      <div className="animation hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="gsap-animation-animation  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/gsapskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">GSAP</p>
        </div>
        <div className="gsap-animation-animation swiper w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/swiperskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Swiper Js</p>
        </div>
        <div className="gsap-animation-animation canva w-[8rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8 ">
          <Image
            src="/Skills/scrollskills.png"
            alt="loading.."
            loading="lazy"
            width={100}
            height={100}
          />

          <p className="text-white text-lg font-semibold">Scroll Trigger</p>
        </div>
      </div>
    </div>
  );
};

export default AnimationSkills;

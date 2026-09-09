"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React from "react";

const FrontendSkills = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-animation-frontend", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".frontend",
          // markers:true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-animation-frontend", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".frontend",
          // markers:true,
          start: "top 60%",
          end: "top 20%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="programming-lang bg-zinc-800 p-2 my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        Frontend Technology
      </h3>
      {/*Responsive Default */}
      <div className="frontend flex justify-start flex-wrap gap-9 mt-5 2xl:hidden">
        <div className="gsap-animation-frontend html5  p-2  h-[7rem] flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933734/htmlskills_sxk30b.png"
            alt="loading.."
            loading="lazy"
            width={35}
            height={35}
          />

          <p className="text-white text-sm font-semibold">HTML5</p>
        </div>
        <div className="gsap-animation-frontend css3  h-[7rem]  p-2 flex flex-col items-center gap-4 ">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933791/cssskills_fmeteo.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">CSS3</p>
        </div>
        <div className="gsap-animation-frontend javascript  h-[7rem]  p-2 flex flex-col items-center gap-8">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933735/javascriptskills_aqnwdt.png"
            alt="loading.."
            loading="lazy"
            width={35}
            height={35}
          />

          <p className="text-white text-sm font-semibold">JavaScript</p>
        </div>
        <div className="gsap-animation-frontend reactjs h-[7rem]    p-2 flex flex-col items-center gap-7 ">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933770/reactskills_ch7rvj.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">React Js</p>
        </div>
        <div className="gsap-animation-frontend redux-toolkit w-[5rem]  h-[7rem]  p-2 flex flex-col items-center gap-8">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933762/nextjsskills_cqdimo.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-white text-sm font-semibold">Redux Toolkit</p>
        </div>
        <div className="gsap-animation-frontend nextjs h-[7rem]  p-2 flex flex-col items-center gap-7 ">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933762/nextjsskills_cqdimo.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">Next Js</p>
        </div>
        <div className="gsap-animation-frontend ejs  h-[7rem]  p-2 flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933791/ejsskills_jwvrh7.png"
            alt="loading.."
            loading="lazy"
            width={40}
            height={40}
          />

          <p className="text-white text-sm font-semibold">EJS</p>
        </div>
        <div className="gsap-animation-frontend tailwindcss  w-[6rem] h-[7rem]  p-2 flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933778/tailwindcssskills_yvf2rn.png"
            alt="loading.."
            loading="lazy"
            width={40}
            height={40}
          />

          <p className="text-white text-sm font-semibold">Tailwind Css</p>
        </div>
        <div className="gsap-animation-frontend bootstrap  h-[7rem]  p-2 flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933782/bootstrapskills_scrvnw.png"
            alt="loading.."
            loading="lazy"
            width={40}
            height={40}
          />

          <p className="text-white text-sm font-semibold">BootStrap5</p>
        </div>
      </div>

      {/*Responsive For Desktop 2XL screen */}
      <div className="frontend hidden  2xl:flex justify-start gap-7 mt-5">
        <div className="gsap-animation-frontend html5  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933734/htmlskills_sxk30b.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">HTML5</p>
        </div>
        <div className="gsap-animation-frontend css3 w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-7">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933791/cssskills_fmeteo.png"
            alt="loading.."
            loading="lazy"
            width={100}
            height={100}
          />

          <p className="text-white text-lg font-semibold">CSS3</p>
        </div>
        <div className="gsap-animation-frontend javascript w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8 ">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933735/javascriptskills_aqnwdt.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">JavaScript</p>
        </div>
        <div className="gsap-animation-frontend reactjs w-[7rem] min-w-[7rem] h-[11rem]    p-2 flex flex-col items-center gap-8">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933770/reactskills_ch7rvj.png"
            alt="loading.."
            loading="lazy"
            width={115}
            height={115}
          />

          <p className="text-white text-[20px] font-semibold">React Js</p>
        </div>
        <div className="gsap-animation-frontend redux-toolkit w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-8">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933772/reduxskills_rb7ikn.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Redux Toolkit</p>
        </div>
        <div className="gsap-animation-frontend nextjs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-9">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933762/nextjsskills_cqdimo.png"
            alt="loading.."
            loading="lazy"
            width={90}
            height={90}
          />

          <p className="text-white text-lg font-semibold">Next Js</p>
        </div>
        <div className="gsap-animation-frontend ejs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-14">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933791/ejsskills_jwvrh7.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">EJS</p>
        </div>
        <div className="gsap-animation-frontend tailwindcss w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-12">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933778/tailwindcssskills_yvf2rn.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Tailwind Css</p>
        </div>
        <div className="gsap-animation-frontend bootstrap w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-12">
          <Image
            src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933782/bootstrapskills_scrvnw.png"
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

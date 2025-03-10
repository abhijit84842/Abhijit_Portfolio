"use client";
import React from "react";
import { FaLink } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const UiUx = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    // Project -1  CitySling E-com
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-uiux-image-1 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".uiux-project-box-1",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
    // Project 2  Portfolio
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-uiux-image-2 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".uiux-project-box-2",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Project -1   CitySling E-com
    mm.add("(max-width:435px)", () => {
      gsap.from(".uiux-project-name-citysling ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".uiux-project-dsc-citysling",
          // markers: true,
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });
    // Project -2  Portfolio
    mm.add("(max-width:435px)", () => {
      gsap.from(".uiux-project-name-portfolio ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".uiux-project-dsc-portfolio",
          // markers: true,
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });

    // Project -1   CitySling E-com
    mm.add("(max-width:435px)", () => {
      gsap.from(".uiux-paragrap-citysling ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".uiux-project-dsc-citysling",
          // markers: true,
          start: "top 70%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });

    // project- 2  Portfolio
    mm.add("(max-width:435px)", () => {
      gsap.from(".uiux-paragrap-portfolio ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".uiux-project-dsc-portfolio",
          // markers: true,
          start: "top 70%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });

    //  Responsive for Desktop (2xl and above)
    // Project - 1   CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-uiux-image-1 ", {
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-box-1",
          start: "top 50%",
        },
      });
    });
    // Project 2  Portfolio
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-uiux-image-2 ", {
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-box-2",
          start: "top 50%",
        },
      });
    });

    // Project -1   CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".uiux-project-name-citysling", {
        x: 100,
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-dsc-citysling",
          start: "top 47%",
        },
      });
    });
    // Project -2  Portfolio
    mm.add("(min-width:1024px)", () => {
      gsap.from(".uiux-project-name-portfolio ", {
        x: 100,
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-dsc-portfolio",
          start: "top 47%",
        },
      });
    });

    // Project -1  CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".uiux-paragrap-citysling", {
        y: 100,
        opacity: 0,
        scale: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-dsc-citysling",
          start: "top 47%",
        },
      });
    });

    // project- 2  Portfolio
    mm.add("(min-width:1024px)", () => {
      gsap.from(".uiux-paragrap-portfolio ", {
        y: 100,
        opacity: 0,
        scale: 0,
        delay: 0.5,

        scrollTrigger: {
          trigger: ".desktop-uiux-project-dsc-portfolio",
          start: "top 47%",
        },
      });
    });
  });
  return (
    <div className="uiux  mx-2 my-10 2xl:mx-10 2xl:my-20">
      <h1 className="text-xl text-[#0B44FF] font-semibold my-10 2xl:text-2xl">
        UI & UX Design
      </h1>
      {/*Responsive For Mobile */}
      <div className="uiux-box bg-[#18181B] p-3 rounded-[2rem] lg:hidden 2xl:hidden">
        <div className="uiux-project-box-1">
          <h2 className="ml-5 my-5 text-lg font-semibold text-[#FB2A2A]">
            Design 1
          </h2>

          <div className="my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="gsap-uiux-image-1 right">
              <Image
                src="/uiux/design1.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="uiux-project-dsc-citysling left h-[20rem]">
              <h2 className="uiux-project-name-citysling text-2xl font-semibold">
                E-com Website Banner Design
              </h2>
              <div className="uiux-paragrap-citysling mt-5">
                <p className="text-sm">
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
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  See Details..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-5 mt-20"></div>

        <div className="uiux-project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Design 2
          </h2>
          <div className="my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="gsap-uiux-image-2 right">
              <Image
                src="/uiux/design2.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="uiux-project-dsc-portfolio left h-[20rem]">
              <h2 className="uiux-project-name-portfolio text-2xl font-semibold">
                Portfolio Design
              </h2>
              <div className="uiux-paragrap-portfolio mt-5">
                <p className="text-sm">
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
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  See Details..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#1E49F6] p-2   text-xl font-semibold rounded-full">
            See More Designs
          </button>
        </div>
      </div>

      {/*Responsive for Desktop */}
      <div className="uiux-box hidden lg:block 2xl:block bg-[#18181B] p-3 rounded-[2rem]">
        <div className="desktop-uiux-project-box-1">
          <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
            Design 1
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="desktop-uiux-project-dsc-citysling left w-[80%] h-[20rem]">
              <h2 className="uiux-project-name-citysling text-2xl">
                E-com Website Banner Design
              </h2>
              <div className="uiux-paragrap-citysling mt-5">
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
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  See Details..
                </Link>
              </div>
            </div>
            <div className="gsap-uiux-image-1 right w-[50%]">
              <Image
                src="/uiux/design1.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-20 my-10"></div>

        <div className="desktop-uiux-project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Design 2
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="gsap-uiux-image-2  right w-[50%]">
              <Image
                src="/uiux/design2.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="desktop-uiux-project-dsc-portfolio left w-[80%] h-[20rem]">
              <h2 className="uiux-project-name-portfolio text-2xl">
                Portfolio Design
              </h2>
              <div className="uiux-paragrap-portfolio mt-5">
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
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  See Details..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#1E49F6] p-5  text-2xl font-semibold rounded-full">
            See More Design
          </button>
        </div>
      </div>
    </div>
  );
};

export default UiUx;

"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const FrontendProject = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-frontend-image-1 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".frontend-project-box-1",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
    // Project 2
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-frontend-image-2 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".frontend-project-box-2",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".frontend-project-name-travel ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".frontend-project-dsc-travel",
          // markers: true,
          start: "top 70%",
          end: "top 55%",
          scrub: 2,
        },
      });
    });
    // Project -2
    mm.add("(max-width:435px)", () => {
      gsap.from(".frontend-project-name-wear ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".frontend-project-dsc-wear",
          // markers: true,
          start: "top 70%",
          end: "top 55%",
          scrub: 2,
        },
      });
    });

    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".frontend-paragrap-travel ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".frontend-project-dsc-travel",
          // markers: true,
          start: "top 60%",
          end: "top 55%",
          scrub: 2,
        },
      });
    });

    // project- 2
    mm.add("(max-width:435px)", () => {
      gsap.from(".frontend-paragrap-wear ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".frontend-project-dsc-wear",
          // markers: true,
          start: "top 60%",
          end: "top 55%",
          scrub: 2,
        },
      });
    });

    //  Responsive for Desktop (2xl and above)
    // Project - 1
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-frontend-image-1 ", {
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-frontend-project-box-1",
          start: "top 50%",
        },
      });
    });
    // Project 2
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-frontend-image-2 ", {
        opacity: 0,
        scale: 0,

        scrollTrigger: {
          trigger: ".desktop-frontend-project-box-2",
          start: "top 50%",
        },
      });
    });

    // Project -1
    mm.add("(min-width:1024px)", () => {
      gsap.from(".frontend-project-name-travel", {
        x: 100,
        opacity: 0,
        scale: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".desktop-frontend-project-dsc-travel",
          start: "top 47%",
        },
      });
    });
    // Project -2
    mm.add("(min-width:1024px)", () => {
      gsap.from(".frontend-project-name-wear ", {
        x: 100,
        opacity: 0,
        scale: 0,
        delay: 0.5,
        scrollTrigger: {
          trigger: ".desktop-frontend-project-dsc-wear",
          start: "top 47%",
      
        },
      });
    });

    // Project -1
    mm.add("(min-width:1024px)", () => {
      gsap.from(".frontend-paragrap-travel", {
        y: 100,
        opacity: 0,
        scale: 0,
        delay: 1,
        scrollTrigger: {
          trigger: ".desktop-frontend-project-dsc-travel",
          start: "top 47%",

        },
      });
    });

    // project- 2
    mm.add("(min-width:1024px)", () => {
      gsap.from(".frontend-paragrap-wear ", {
        y: 100,
        opacity: 0,
        scale: 0,
        delay: 0.8,
        scrollTrigger: {
          trigger: ".desktop-frontend-project-dsc-wear",
          start: "top 47%",
        },
      });
    });
  });
  return (
    <div className="frontend-projects  mx-2 2xl:mx-10">
      <h1 className="text-xl text-[#0B44FF] font-semibold my-5 2xl:text-2xl ">
        Frontend Projects
      </h1>

      {/* Responsive for Mobile */}
      <div className="frontend-project-box bg-[#18181B] p-3 rounded-[2rem] lg:hidden 2xl:hidden">
        <div className="frontend-project-box-1">
          <h2 className="ml-5 my-5 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="frontend-project-1 my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="gsap-frontend-image-1 right">
              <Image
                src="/Projects/travelagency.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="frontend-project-dsc-travel left  h-[20rem]">
              <h2 className="frontend-project-name-travel text-2xl font-semibold">
                Animated Travel Agency Website
              </h2>
              <div className="frontend-paragrap-travel mt-5">
                <p className="text-sm">
                  A visually appealing and user-friendly travel agency website
                  built with React. The project features smooth animations using
                  GSAP and Swiper JS for interactive sliders, providing an
                  engaging user experience. The website incorporates essential
                  tools like react-hook-form for form handling and
                  react-router-dom for navigation. Styling is crafted with CSS3,
                  ensuring responsiveness and modern design. The site
                  demonstrates a seamless integration of animations, navigation,
                  and user interactions, making it a perfect platform for travel
                  enthusiasts to explore and book trips.
                </p>
              </div>
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-5 mt-20"></div>

        <div className="frontend-project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="proejct-2 my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="gsap-frontend-image-2 right">
              <Image
                src="/Projects/wear.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="frontend-project-dsc-wear left flex flex-col">
              <h2 className="frontend-project-name-wear text-2xl font-semibold">
                Wear Collection E-com Website
              </h2>
              <div className="frontend-paragrap-wear mt-5">
                <p className="text-sm">
                  This is a fully functional, responsive clothing e-commerce
                  website developed using React.js, HTML, CSS, and JavaScript.
                  Designed with a focus on smooth user experience, the website
                  offers intuitive navigation, a clean and stylish UI, and a
                  responsive layout adaptable to both desktop and mobile
                  devices. Key features include a product listing page with
                  filter options, a dynamic product detail view, an interactive
                  shopping cart, and an elegant checkout flow. This project
                  highlights my skills in creating interactive, user-friendly
                  web applications and demonstrates my understanding of
                  e-commerce design principles.
                </p>
              </div>
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-5">
              <button className="bg-[#1E49F6] p-2  text-xl font-semibold rounded-full">
                See More Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive for Desktop */}
      <div className="hidden lg:block 2xl:block frontend-project-box bg-[#18181B] p-3 rounded-[2rem]">
        <div className="desktop-frontend-project-box-1">
          <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="desktop-frontend-project-dsc-travel left w-[80%] h-[20rem]">
              <h2 className="frontend-project-name-travel text-2xl">
                Animated Travel Agency Website
              </h2>
              <div className="frontend-paragrap-travel mt-5">
                <p>
                  A visually appealing and user-friendly travel agency website
                  built with React. The project features smooth animations using
                  GSAP and Swiper JS for interactive sliders, providing an
                  engaging user experience. The website incorporates essential
                  tools like react-hook-form for form handling and
                  react-router-dom for navigation. Styling is crafted with CSS3,
                  ensuring responsiveness and modern design. The site
                  demonstrates a seamless integration of animations, navigation,
                  and user interactions, making it a perfect platform for travel
                  enthusiasts to explore and book trips.
                </p>
              </div>
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
            <div className="gsap-frontend-image-1 right w-[50%]">
              <Image
                src="/Projects/travelagency.png"
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

        <div className="desktop-frontend-project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="gsap-frontend-image-2 right w-[50%]">
              <Image
                src="/Projects/wear.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="desktop-frontend-project-dsc-wear left w-[80%] h-[20rem]">
              <h2 className="frontend-project-name-wear text-2xl">
                Wear Collection E-com Website
              </h2>
              <div className="frontend-paragrap-wear mt-5">
                <p>
                  This is a fully functional, responsive clothing e-commerce
                  website developed using React.js, HTML, CSS, and JavaScript.
                  Designed with a focus on smooth user experience, the website
                  offers intuitive navigation, a clean and stylish UI, and a
                  responsive layout adaptable to both desktop and mobile
                  devices. Key features include a product listing page with
                  filter options, a dynamic product detail view, an interactive
                  shopping cart, and an elegant checkout flow. This project
                  highlights my skills in creating interactive, user-friendly
                  web applications and demonstrates my understanding of
                  e-commerce design principles.
                </p>
              </div>
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#1E49F6] p-5  text-2xl font-semibold rounded-full">
            See More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrontendProject;

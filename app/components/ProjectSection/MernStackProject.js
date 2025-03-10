"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const MernStackProject = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-mern-image-1 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".mern-project-box-1",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
    // Project 2
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-mern-image-2 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".mern-project-box-2",
          // markers: true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".mern-project-name-citysling ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".mern-project-dsc-citysling",
          // markers: true,
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });
    // Project -2
    mm.add("(max-width:435px)", () => {
      gsap.from(".mern-project-name-foodplaza ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".mern-project-dsc-foodplaza",
          // markers: true,
          start: "top 80%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });

    // Project -1
    mm.add("(max-width:435px)", () => {
      gsap.from(".mern-paragrap-citysling ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".mern-project-dsc-citysling",
          // markers: true,
          start: "top 70%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });

    // project- 2
    mm.add("(max-width:435px)", () => {
      gsap.from(".mern-paragrap-foodplaza ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".mern-project-dsc-foodplaza",
          // markers: true,
          start: "top 70%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });

    //  Responsive for Desktop (2xl and above)
    // Project - 1 CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-mern-image-1 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".desktop-mern-project-box-1",
          // markers: true,
          start: "top 70%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });
    // Project 2  FoodPlaza
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-mern-image-2 ", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: ".desktop-mern-project-box-2",
          // markers: true,
          start: "top 60%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });

    // Project -1  CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".mern-project-name-citysling", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".desktop-mern-project-dsc-citysling",
          // markers: true,
          start: "top 40%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });
    // Project -2  FoodPlaza
    mm.add("(min-width:1024px)", () => {
      gsap.from(".mern-project-name-foodplaza ", {
        x: 100,
        opacity: 0,
        scale: 0,
        duration: 3,
        delay: 1,
        scrollTrigger: {
          trigger: ".desktop-mern-project-dsc-foodplaza",
          // markers: true,
          start: "top 40%",
          end: "top 60%",
          scrub: 2,
        },
      });
    });

    // Project -1  CitySling E-com
    mm.add("(min-width:1024px)", () => {
      gsap.from(".mern-paragrap-citysling", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 5,
        delay: 2,
        scrollTrigger: {
          trigger: ".desktop-mern-project-dsc-citysling",
          // markers: true,
          start: "top 30%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });

    // project- 2  FoodPlaza
    mm.add("(min-width:1024px)", () => {
      gsap.from(".mern-paragrap-foodplaza ", {
        y: 100,
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 2,
        scrollTrigger: {
          trigger: ".desktop-mern-project-dsc-foodplaza",
          // markers: true,
          start: "top 30%",
          end: "top 70%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="frontend-projects  mx-2 my-10 2xl:my-20 2xl:mx-10">
      <h1 className="text-xl text-[#0B44FF] font-semibold my-5 2xl:text-2xl">
        MERN Stack Projects
      </h1>

      {/* Responsive for Mobile */}
      <div className="mern-project-box bg-[#18181B] p-3 rounded-[2rem] lg:hidden 2xl:hidden">
        <div className="mern-project-box-1">
          <h2 className="ml-5 my-5 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="my-5 ml-5 flex justify-center flex-col  gap-10">
            <div className="gsap-mern-image-1 right">
              <Image
                src="/Projects/citysling.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="mern-project-dsc-citysling left h-[20rem]">
              <h2 className="mern-project-name-citysling text-2xl font-semibold">
                CitySling Bag E-Com Website
              </h2>
              <div className="mern-paragrap-citysling mt-5">
                <p className="text-sm">
                  This full-stack e-commerce application is designed for a city
                  sling bag store, built using EJS for templating, Node.js for
                  backend logic, and Tailwind CSS for modern styling. The
                  application uses MongoDB Atlas for secure and efficient data
                  storage and includes authentication with JWT and password
                  encryption with bcrypt to protect user data. Featuring a
                  dynamic landing page displaying the latest products, the
                  project is structured with an MVC model to ensure scalable,
                  production-grade code. This project demonstrates my full-stack
                  development skills, with a focus on security, scalability, and
                  clean design.
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
        <div className="border border-red-500 mx-5 mt-24"></div>

        <div className="mern-project-box-2">
          <h2 className="flex justify-end  mr-5 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="gsap-mern-image-2 right ">
              <Image
                src="/Projects/foodplaza.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="mern-project-dsc-foodplaza left h-[20rem]">
              <h2 className="mern-project-name-foodplaza text-2xl font-semibold">
                Food Plaza Restaurant Website
              </h2>
              <div className="mern-paragrap-foodplaza mt-5">
                <p className="text-sm">
                  This full-stack restaurant application, Food Plaza, showcases
                  a wide variety of meal options, including breakfast, lunch,
                  and dinner, to provide users with a complete dining
                  experience. Developed with the MERN stack (MongoDB, Express,
                  React, Node.js), the project features secure authentication
                  using JWT and bcrypt for password encryption. Key
                  functionalities include form validation, a search feature for
                  easy menu navigation, and a loading bar for smooth user
                  interaction. Styled with CSS for a clean, appealing interface,
                  this project demonstrates my skills in creating interactive,
                  user-friendly full-stack applications with an emphasis on
                  security and performance.
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
            <div className="flex justify-center mt-20">
              <button className="bg-[#1E49F6] p-2  text-xl font-semibold rounded-full">
                See More Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*Responsive for Desktop 2xl breakpoint */}
      <div className="mern-project-box hidden lg:block 2xl:block bg-[#18181B] p-3 rounded-[2rem]">
        <div className="desktop-mern-project-box-1">
          <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="desktop-mern-project-dsc-citysling left w-[80%] h-[20rem]">
              <h2 className="mern-project-name-citysling text-2xl">
                CitySling Bag E-Com Website
              </h2>
              <div className="mern-paragrap-citysling mt-5">
                <p>
                  This full-stack e-commerce application is designed for a city
                  sling bag store, built using EJS for templating, Node.js for
                  backend logic, and Tailwind CSS for modern styling. The
                  application uses MongoDB Atlas for secure and efficient data
                  storage and includes authentication with JWT and password
                  encryption with bcrypt to protect user data. Featuring a
                  dynamic landing page displaying the latest products, the
                  project is structured with an MVC model to ensure scalable,
                  production-grade code. This project demonstrates my full-stack
                  development skills, with a focus on security, scalability, and
                  clean design.
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
            <div className="gsap-mern-image-1 right w-[50%]">
              <Image
                src="/Projects/citysling.png"
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

        <div className="desktop-mern-project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="gsap-mern-image-2 right w-[50%]">
              <Image
                src="/Projects/foodplaza.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="desktop-mern-project-dsc-foodplaza left w-[80%] h-[20rem]">
              <h2 className="mern-project-name-foodplaza text-2xl">
                Food Plaza Restaurant Website
              </h2>
              <div className="mern-paragrap-foodplaza mt-5">
                <p>
                  This full-stack restaurant application, Food Plaza, showcases
                  a wide variety of meal options, including breakfast, lunch,
                  and dinner, to provide users with a complete dining
                  experience. Developed with the MERN stack (MongoDB, Express,
                  React, Node.js), the project features secure authentication
                  using JWT and bcrypt for password encryption. Key
                  functionalities include form validation, a search feature for
                  easy menu navigation, and a loading bar for smooth user
                  interaction. Styled with CSS for a clean, appealing interface,
                  this project demonstrates my skills in creating interactive,
                  user-friendly full-stack applications with an emphasis on
                  security and performance.
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

export default MernStackProject;

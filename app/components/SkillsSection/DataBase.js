"use client"
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const DataBase = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".gsap-animation-database", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".gsap-animation-database",
          // markers:true,
          start: "top 70%",
          end: "top 40%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".gsap-animation-database", {
        opacity: 0,
        scale: 0,
        duration: 2,
        delay: 1,
        rotate: 360,
        scrollTrigger: {
          trigger: ".database",
          // markers:true,
          start: "top 50%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });
  return (
    <div className="programming-lang bg-zinc-800 p-2 my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        Database
      </h3>
      {/*Responsive For Mobile*/}
      <div className="database  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="gsap-animation-database mongoDB p-2 flex flex-col items-center gap-6">
          <Image
            src="/Skills/mongodbskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">mongoDB</p>
        </div>
        <div className="gsap-animation-database mySQL p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/MYSQLskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">MYSQL</p>
        </div>
      </div>

      {/* Responsive for Desktop*/}
      <div className="database hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="gsap-animation-database mongoDB p-5 flex flex-col items-center gap-6">
          <Image
            src="/Skills/mongodbskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">mongoDB</p>
        </div>
        <div className="gsap-animation-database mySQL p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/MYSQLskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">MYSQL</p>
        </div>
      </div>
    </div>
  );
};

export default DataBase;

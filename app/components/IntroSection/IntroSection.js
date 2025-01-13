"use client";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const IntroSection = () => {
  useGSAP(() => {
    gsap.from(".intro-animation", {
      y: 100,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
    });
    gsap.from(".animation-box-profileimg", {
      scale: 0,
      duration: 2,
      // width:"5%"
    });
  });
  return (
    <div className="intro-container   flex justify-between">
      <div className="left-container w-[50%] text-white mt-20 ml-20 ">
        <div className="intro-paragrap">
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
              And I'm a{" "}
              <span className="text-[#0B44FF]">MERN Stack Developer</span>
            </p>
          </div>

          <div className=" intro-animation sub-intro w-[100%] ml-5 mt-2">
            <p>
              I am a passionate and versatile full stack developer with
              expertise in both frontend and backend technologies. I specialize
              in building efficient, scalable, and user-friendly applications,
              utilizing a wide range of modern tools and frameworks. From
              crafting seamless user interfaces to ensuring robust server-side
              logic.
            </p>
          </div>
        </div>

        <div className="social-links flex gap-10 mt-5">
          <div className="github">
            <Link href="#">
              <img
                className="linkedinimg w-[3rem] rounded-full"
                src="/Social Links/linkedin.png"
                alt="loading.."
              />
            </Link>
          </div>
          <div className="github">
            <Link href="#">
              <img
                className="linkedinimg  w-[3.6rem] rounded-full"
                src="/Social Links/github.png"
                alt="loading.."
              />
            </Link>
          </div>
          <div className="whatsapp">
            <Link href="#">
              <img
                className=" linkedinimg w-[3.2rem] rounded-full"
                src="/Social Links/whatsapp.png"
                alt="loading.."
              />
            </Link>
          </div>
        </div>
        <div className="CV-download mt-10 ml-5 ">
          <a href="/CV/Resume.pdf">
            <img src="CV Download.png" alt="loading" />
          </a>
        </div>
      </div>

      <div className="right-container mr-20  mt-5">
        <div className="animation-box-profileimg">
          <img className="profile-img h-[40rem]" src="Profile Pic.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

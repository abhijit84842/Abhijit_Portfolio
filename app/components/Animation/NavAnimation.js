"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link"
import AboutMe from "../AboutSection/AboutMe";

const NavAnimation = () => {
    useGSAP(()=>{
        gsap.from(".navLink", {
          x:100,
          duration:1,
          opacity:0,
          stagger:0.2,
        })
      })
  return (
    <div className="animation-box-nav flex gap-20 mr-20 text-xl font-semibold text-white">
      <div className="navLink text-[#F61E1E]">
        <Link href={"/"}>Home</Link>
      </div>
      <div className="navLink">
        <Link href={"#about"}>About Me</Link>
        <div className="blank"></div>
      </div>
      <div className="navLink">
        <Link href={"#skills"}>Skills</Link>
        <div className="blank"></div>
      </div>
      <div className="navLink">
        <Link href={"#exprience"}>Exprience</Link>
        <div className="blank"></div>
      </div>
      <div className="navLink">
        <Link href={""}>Projects</Link>
        <div className="blank"></div>
      </div>
      <div className="navLink">
        <Link href={"#contact"}>Contact Me</Link>
        <div className="blank"></div>
      </div>
    </div>
  );
};

export default NavAnimation;

"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link"

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
        <Link href={""}>About Me</Link>
      </div>
      <div className="navLink">
        <Link href={""}>Skills</Link>
      </div>
      <div className="navLink">
        <Link href={""}>Exprience</Link>
      </div>
      <div className="navLink">
        <Link href={""}>Projects</Link>
      </div>
      <div className="navLink">
        <Link href={""}>Contact Me</Link>
      </div>
    </div>
  );
};

export default NavAnimation;

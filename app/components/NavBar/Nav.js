"use client";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import Link from "next/link";

const NavBar = () => {
  useGSAP(() => {
    gsap.from(".navLink", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 0.2,
    });
  });
  return (
    <div className="main-container hidden flex justify-between p-2 bg-slate-900 w-full fixed lg:flex justify-between p-2 bg-slate-900 w-full fixed">
      <div>
        <h2 className="ml-10 text-xl font-semibold text-[#17E5CD]">
          Abhijit
        </h2>
      </div>

      <nav className="flex gap-8 mr-5 text-lg text-white ">
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
          <Link href={"/pages/projectall"}>Projects</Link>
          <div className="blank"></div>
        </div>
        <div className="navLink">
          <Link href={"#contact"}>Contact Me</Link>
          <div className="blank"></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";



const NavBar = () => {
  useGSAP(()=>{
    gsap.from(".navLink", {
      x:100,
      duration:1,
      opacity:0,
      stagger:0.2,
    })
  })
  return (
    <div className="flex justify-between mt-2">
      <div>
        <h2 className="ml-20 text-2xl font-semibold text-[#17E5CD]">Abhijit</h2>
      </div>

      <nav className="flex gap-20 mr-20 text-xl font-semibold text-white">
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
      </nav>
    </div>
  );
};

export default NavBar;

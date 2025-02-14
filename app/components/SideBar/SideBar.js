"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const SideBar = ({ CloseSidebar }) => {
  useGSAP(() => {
    gsap.from(".navLink", {
      x: 100,
      duration: 0.6,
      opacity: 0,
      stagger: 0.2,
    });
  });
  return (
    <div className="main-container bg-slate-900 w-[20rem] h-[100vh] mt-2 rounded-md">
      <div className="flex justify-end ">
        <IoMdCloseCircleOutline color="red" size={40} onClick={CloseSidebar} />
      </div>

      <div className="sub-container">
        <h2 className="text-[3rem] flex justify-center text-[#17E5CD]">
          Abhijit
        </h2>
        <div className="link flex flex-col gap-8 ml-2 ">
          <div className="navLink text-[#F61E1E]" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href="/">
              Home
            </Link>
          </div>
          <div className="navLink" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href={"#about"}>
              About Me
            </Link>
            <div className="blank"></div>
          </div>
          <div className="navLink" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href={"#exprience"}>
              Exprience
            </Link>
            <div className="blank"></div>
          </div>
          <div className="navLink" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href={"#skills"}>
              Skills
            </Link>
            <div className="blank"></div>
          </div>
          <div className="navLink" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href={"/pages/projectall"}>
              Projects
            </Link>
            <div className="blank"></div>
          </div>
          <div className="navLink" onClick={CloseSidebar}>
            <Link className="text-[2rem]" href={"#contact"}>
              Contacts
            </Link>
            <div className="blank"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

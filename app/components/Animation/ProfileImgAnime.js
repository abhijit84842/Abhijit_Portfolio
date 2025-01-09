"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const ProfileImgAnime = () => {
    useGSAP(()=>{
        gsap.from(".profile-img", {
            scale:0,
            duration:2,
            // width:"5%"
        })
    })
  return (
    <div className="animation-box-profileimg">
      <img className="profile-img h-[40rem]" src="Profile Pic.png" alt="" />
    </div>
  );
};

export default ProfileImgAnime;

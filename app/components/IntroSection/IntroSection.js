import React from "react";
import IntroAnimation from "../Animation/IntroAnimation";
import Link from "next/link";
import ProfileImgAnime from "../Animation/ProfileImgAnime";

const IntroSection = () => {
  return (
    <div className="intro-container   flex justify-between">
      <div className="left-container w-[50%] text-white mt-20 ml-20 ">
        <div className="intro-paragrap">
          <IntroAnimation />
        </div>

        <div className="social-links flex gap-10 mt-5">
        <div className="github">
            <Link href="#">
              <img className="linkedinimg w-[3rem] rounded-full" src="/Social Links/linkedin.png" alt="loading.." />
            </Link>
          </div>
          <div className="github">
            <Link href="#">
              <img className="linkedinimg  w-[3.6rem] rounded-full" src="/Social Links/github.png" alt="loading.." />
            </Link>
          </div>
          <div className="whatsapp">
            <Link href="#">
              <img className=" linkedinimg w-[3.2rem] rounded-full" src="/Social Links/whatsapp.png" alt="loading.." />
            </Link>
          </div>
        </div>
        <div className="CV-download mt-10 ml-5 ">
          <a href="/CV/Resume.pdf">
            <img  src="CV Download.png" alt="loading" />
          </a>
        </div>
      </div>

      <div className="right-container mr-20  mt-5">
        <ProfileImgAnime />
      </div>
    </div>
  );
};

export default IntroSection;

"use client";
import React from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";

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
    <div>
      <div className="intro-container sm:hidden  2xl:hidden">
        <div className="right-container  flex justify-center">
          <div className="animation-box-profileimg">
            <Image
              src="/profilepic.png"
              alt="loading.."
              loading="lazy"
              width={250}
              height={250}
            />
          </div>
        </div>
        <div className="left-container   text-white mt-2 ml-2">
          <div className="intro-paragrap">
            <div className="intro-animation">
              <p className="text-sm font-semibold">
                <span className="text-[#F61E1E]">Hi</span>, Its Me
              </p>
            </div>
            <div className="intro-animation">
              <p className="text-xl font-extrabold mt-1 text-[#FB2A2A]">
                Abhijit Das
              </p>
            </div>
            <div className="intro-animation">
              <p className="text-lg font-semibold mt-2">
                And I am a{" "}
                <span className="text-[#0B44FF]">MERN Stack Developer</span>
              </p>
            </div>

            <div className="intro-animation sub-intro w-[80%] ml-2 mt-2">
              <p className="text-xs">
                I am a passionate and versatile full stack developer with
                expertise in both frontend and backend technologies. I
                specialize in building efficient, scalable, and user-friendly
                applications, utilizing a wide range of modern tools and
                frameworks. From crafting seamless user interfaces to ensuring
                robust server-side logic.
              </p>
            </div>
          </div>

          <div className="social-links flex gap-10 mt-2">
            <div className="linkedin">
            <Link href={"https://www.linkedin.com/in/abhijit-das-1a41a2234"} target="_blank">
                <Image
                  src="/Social Links/linkedin.png"
                  alt="loading.."
                  loading="lazy"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
            <div className="github">
            <Link href="https://github.com/abhijit84842" target="_blank">
                <Image
                  src="/Social Links/github.png"
                  alt="loading.."
                  loading="lazy"
                  width={35}
                  height={35}
                />
              </Link>
            </div>
            <div className="whatsapp">
            <Link href="https://wa.me/+919002527215" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/Social Links/whatsapp.png"
                  alt="loading.."
                  loading="lazy"
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <div className="CV-download mt-5 ml-5 ">
            <a href="/CV/Resume.pdf">
              <Image
                src="/cvdownload.png"
                alt="loading.."
                loading="lazy"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>

{/*Responsive for lg breakpoint */}
      <div className="hidden lg:block">
        <div className="intro-container  flex justify-between">
          <div className="lg:left-container w-[50%] text-white mt-20 ml-5 2xl:ml-20">
            <div className="intro-paragrap">
              <div className="intro-animation">
                <p className="lg:text-2xl font-semibold 2xl:text-3xl font-semibold">
                  <span className="text-[#F61E1E]">Hi</span>, Its Me
                </p>
              </div>
              <div className="intro-animation">
                <p className="lg:text-4xl font-extrabold mt-2 text-[#FB2A2A] 2xl:text-5xl font-extrabold mt-2 text-[#FB2A2A]">
                  Abhijit Das
                </p>
              </div>
              <div className="intro-animation">
                <p className="lg:text-3xl font-semibold mt-5 2xl:text-4xl font-semibold mt-5">
                  And I am a{" "}
                  <span className="text-[#0B44FF]">MERN Stack Developer</span>
                </p>
              </div>

              <div className="intro-animation sub-intro w-[100%] ml-5 mt-2">
                <p>
                  I am a passionate and versatile full stack developer with
                  expertise in both frontend and backend technologies. I
                  specialize in building efficient, scalable, and user-friendly
                  applications, utilizing a wide range of modern tools and
                  frameworks. From crafting seamless user interfaces to ensuring
                  robust server-side logic.
                </p>
              </div>
            </div>

            <div className="social-links flex gap-10 mt-5">
              <div className="github">
                <Link href={"https://www.linkedin.com/in/abhijit-das-1a41a2234"} target="_blank">
                  <Image
                    src="/Social Links/linkedin.png"
                    alt="loading.."
                    loading="lazy"
                    width={55}
                    height={55}
                  />
                </Link>
              </div>
              <div className="github">
                <Link href="https://github.com/abhijit84842" target="_blank">
                  <Image
                    src="/Social Links/github.png"
                    alt="loading.."
                    loading="lazy"
                    width={60}
                    height={60}
                  />
                </Link>
              </div>
              <div className="whatsapp">
                <Link href="https://wa.me/+919002527215" target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/Social Links/whatsapp.png"
                    alt="loading.."
                    loading="lazy"
                    width={55}
                    height={55}
                  />
                </Link>
              </div>
            </div>
            <div className="CV-download mt-10 ml-5 ">
              <a href="/CV/Resume.pdf">
                <Image
                  src="/cvdownload.png"
                  alt="loading.."
                  loading="lazy"
                  width={200}
                  height={200}
                />
              </a>
            </div>
          </div>

          <div className="right-container  mr-10 mt-14 2xl:hidden">
            <div className="animation-box-profileimg">
              <Image
                src="/profilepic.png"
                alt="loading.."
                loading="lazy"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className=" hidden right-container  mr-20 mt-14 2xl:block">
            <div className="animation-box-profileimg">
              <Image
                src="/profilepic.png"
                alt="loading.."
                loading="lazy"
                width={550}
                height={550}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;

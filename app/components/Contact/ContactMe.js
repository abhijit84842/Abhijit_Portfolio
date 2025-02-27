"use client";
import Image from "next/image";
import React from "react";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const ContactMe = () => {
  gsap.registerPlugin(ScrollTrigger);

  let mm = gsap.matchMedia();

  useGSAP(() => {
    // Responsive for Mobile
    mm.add("(max-width:435px)", () => {
      gsap.from(".contact-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".contact-main",
          // markers:true,
          start: "top 60%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".contact-top-heading", {
        x: 100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ".contact-main",
          // markers:true,
          start: "top 70%",
          end: "top 30%",
          scrub: 2,
        },
      });
    });
  });

  return (
    <div className="contact-main " id="contact">
      <h1 className="contact-top-heading text-[#FB2A2A] flex justify-center  text-2xl font-semibold my-10 2xl:my-20 2xl:text-4xl">
        Contact Me
      </h1>
      {/* Responsive For Mobile */}
      <div className="contact-sub-container bg-[#18181B] mx-2 my-10 flex justify-center flex-col gap-10 p-2 rounded-[2rem] lg:hidden 2xl:hidden">
        <div className="contact-left  flex justify-center p-2">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={300}
            height={200}
          />
        </div>
        <div className="contact-right   p-2">
          <form
            className="bg-[#29292F] p-5 flex flex-col justify-center gap-10 rounded-lg"
            action=""
          >
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Name.."
            />
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Email.."
            />
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Subject.."
            />
            <textarea
              className="h-[10rem] rounded-md p-2 outline-none text-black"
              name=""
              id=""
              placeholder="Message.."
            ></textarea>
            <div className="flex justify-center">
              <button
                className="bg-red-500 text-2xl w-[15rem] p-2 rounded-full"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Responsive For Desktop */}

      <div className="contact-sub-container hidden  bg-[#18181B] rounded-[2rem]  my-10 lg:mx-2  lg:flex lg:justify-between lg:gap-10 lg:p-2 2xl:flex 2xl:justify-between 2xl:gap-20 2xl:p-5  2xl:mx-10">
        <div className="contact-left lg:flex lg:justify-center lg:p-2 2xl:hidden">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={400}
            height={100}
          />
        </div>
        <div className="contact-left w-[50%]  p-5 lg:hidden 2xl:flex 2xl:justify-center">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={500}
            height={400}
          />
        </div>
        <div className="contact-right lg:w-[50%] lg:p-5 2xl:w-[40%] 2xl:p-10 ">
          <form
            className="bg-[#29292F] p-10 flex flex-col justify-center gap-10 rounded-[50px]"
            action=""
          >
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Name.."
            />
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Email.."
            />
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              placeholder="Subject.."
            />
            <textarea
              className="h-[10rem] rounded-md p-2 outline-none text-black"
              name=""
              id=""
              placeholder="Message.."
            ></textarea>
            <div className="flex justify-center">
              <button
                className="bg-red-500 text-2xl w-[15rem] p-2 rounded-full"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

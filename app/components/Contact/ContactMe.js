"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useForm } from "react-hook-form";

const ContactMe = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const serviceID = "service_6pyy1rx";
    const templateID = "template_v48o69h";
    const publicKey = "7-6v9d4lFnkvMmJi2";

    try {
      await emailjs.send(serviceID, templateID, data, publicKey);
    } catch (error) {
      console.log(error.message);
    }
  };

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

      <div className="contact-sub-container bg-[#18181B] rounded-[2rem]  my-10 mx-2  lg:mx-2  lg:flex lg:justify-between lg:gap-10 lg:p-2 2xl:flex 2xl:justify-between 2xl:gap-20 2xl:p-5  2xl:mx-10">
        <div className="contact-left  flex justify-center p-2 lg:hidden 2xl:hidden">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={300}
            height={200}
          />
        </div>
        <div className="contact-left hidden lg:flex lg:justify-center lg:p-2 2xl:hidden">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={400}
            height={100}
          />
        </div>
        <div className="contact-left w-[50%] hidden  p-5 lg:hidden 2xl:flex 2xl:justify-center">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={500}
            height={400}
          />
        </div>
        <div className="contact-right p-5 mt-5 lg:w-[50%] lg:p-5 2xl:w-[40%] 2xl:p-10 ">
          <form
            className="bg-[#29292F] p-10 flex flex-col justify-center gap-10 rounded-lg lg:rounded-[50px] 2xl:rounded-[50px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              {...register("from_name", {
                required: "name is required..",
              })}
              placeholder="Name.."
            />
            {errors.from_name && <p>{errors.from_name.message}</p>}
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              {...register("from_email", {
                required: "email required...",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="Email.."
            />
            {errors.from_email && <p>{errors.from_email.message}</p>}
            <input
              className="h-[3rem] rounded-md p-2 outline-none text-black"
              type="text"
              {...register("from_subject", {
                required: "subject is required..",
              })}
              placeholder="Subject.."
            />
            {errors.from_subject && <p>{errors.from_subject.message}</p>}
            <textarea
              className="h-[10rem] rounded-md p-2 outline-none text-black"
              {...register("message", {
                required: "plz write some messages..",
              })}
              placeholder="Message.."
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
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

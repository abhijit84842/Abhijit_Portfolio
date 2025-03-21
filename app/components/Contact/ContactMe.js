"use client";
import Image from "next/image";
import emailjs from "@emailjs/browser";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { toast } from "react-toastify";

const ContactMe = () => {
  const [disabelButton, setDisableButton] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const serviceID = "service_6pyy1rx";
    const templateID = "template_v48o69h";
    const publicKey = "7-6v9d4lFnkvMmJi2";

    try {
      let res = await emailjs.send(serviceID, templateID, data, publicKey);
      if (res) {
        toast.success("Message sent successfully..", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          // transition: Bounce,
        });
        setDisableButton(true);
        reset(); // Reset the form after submission
      }
    } catch (error) {
      toast.error('Soory! Message not sent..', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        // transition: Bounce,
        });
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
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top 90%",
          end: "top 50%",
          scrub: 2,
        },
      });
    });

    // Responsive for Desktop
    mm.add("(min-width:1024px)", () => {
      gsap.from(".contact-top-heading", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top 90%",
          end: "top 50%",
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
              type="number"
              {...register("from_phno", {
                minLength:{
                  value:10,
                  message:"minimum 10 digits required.."
                },
                maxLength:{
                  value:10,
                  message:"maximum 10 digits alllowed.."
                },
              
                required: "phno is required..",
              })}
              placeholder="Ph no.."
            />
            {errors.from_phno && <p>{errors.from_phno.message}</p>}
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
              {disabelButton ? (
                <button
                  className="bg-red-500 text-2xl w-[15rem] p-2 rounded-full blur-[1px]"
                  type="submit"
                  disabled={true}
                >
                  Send Message
                </button>
              ) : (
                <button
                  className="bg-red-500 text-2xl w-[15rem] p-2 rounded-full"
                  type="submit"
                >
                  Send Message
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

import Image from "next/image";
import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-main " id="contact">
      <h1 className="text-[#FB2A2A] flex justify-center  text-2xl font-semibold my-10 2xl:my-20 2xl:text-4xl">
        Contact Me
      </h1>



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


      <div className="contact-sub-container hidden  bg-[#18181B] mx-10 my-10 lg:flex lg:justify-between 2xl:flex justify-between gap-20 p-5 rounded-[2rem]">
        <div className="contact-left w-[50%] flex justify-center p-5">
          <Image
            src="/Contact/Contact.png"
            alt="loading.."
            loading="lazy"
            width={500}
            height={400}
          />
        </div>
        <div className="contact-right  w-[40%] p-10">
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

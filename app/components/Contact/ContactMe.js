import React from "react";

const ContactMe = () => {
  return (
    <div className="contact-main ">
      <h1 className="text-[#FB2A2A] flex justify-center  text-4xl font-semibold my-20">
        Contact Me
      </h1>
      <div className="contact-sub-container bg-[#18181B] mx-10 my-10 flex justify-between gap-20 p-5">
        <div className="contact-left w-[50%] flex justify-center p-5">
          <img
            className="w-[35rem] h-[35rem]"
            src="/Contact/contact.png"
            alt=""
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
            <button className="bg-red-500 text-2xl w-[15rem] p-2 rounded-full" type="submit" >
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

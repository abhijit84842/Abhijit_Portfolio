import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const MernStackProject = () => {
  return (
    <div className="frontend-projects  mx-2 my-10 2xl:my-20 2xl:mx-10">
      <h1 className="text-xl text-[#0B44FF] font-semibold my-5 2xl:text-2xl">
        MERN Stack Projects
      </h1>

      <div className="mern-project-box bg-[#18181B] p-3 rounded-[2rem] lg:hidden 2xl:hidden">
        <div className="project-box-2">
          <h2 className="ml-5 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="my-5 ml-5 flex justify-center flex-col  gap-10">
            <div className="right">
              <Image
                src="/Projects/citysling.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            <div className="left h-[20rem]">
              <h2 className="text-2xl font-semibold">
                CitySling Bag E-Com Website
              </h2>
              <div className="mt-5">
                <p className="text-sm">
                  This full-stack e-commerce application is designed for a city
                  sling bag store, built using EJS for templating, Node.js for
                  backend logic, and Tailwind CSS for modern styling. The
                  application uses MongoDB Atlas for secure and efficient data
                  storage and includes authentication with JWT and password
                  encryption with bcrypt to protect user data. Featuring a
                  dynamic landing page displaying the latest products, the
                  project is structured with an MVC model to ensure scalable,
                  production-grade code. This project demonstrates my full-stack
                  development skills, with a focus on security, scalability, and
                  clean design.
                </p>
              </div>
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-5 mt-24"></div>

        <div className="project-box-2">
          <h2 className="flex justify-end  mr-5 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="my-5 ml-5 flex justify-center flex-col gap-10">
            <div className="right ">
              <Image
                src="/Projects/foodplaza.png"
                alt="loading.."
                loading="lazy"
                width={300}
                height={300}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="left h-[20rem]">
              <h2 className="text-2xl font-semibold">
                Food Plaza Restaurant Website
              </h2>
              <div className="mt-5">
                <p className="text-sm">
                  This full-stack restaurant application, Food Plaza, showcases
                  a wide variety of meal options, including breakfast, lunch,
                  and dinner, to provide users with a complete dining
                  experience. Developed with the MERN stack (MongoDB, Express,
                  React, Node.js), the project features secure authentication
                  using JWT and bcrypt for password encryption. Key
                  functionalities include form validation, a search feature for
                  easy menu navigation, and a loading bar for smooth user
                  interaction. Styled with CSS for a clean, appealing interface,
                  this project demonstrates my skills in creating interactive,
                  user-friendly full-stack applications with an emphasis on
                  security and performance.
                </p>
              </div>
              <div className="mt-5 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
            <div className="flex justify-center mt-20">
              <button className="bg-[#1E49F6] p-2  text-xl font-semibold rounded-full">
                See More Projects
              </button>
            </div>
          </div>
        </div>
      </div>





      <div className="mern-project-box hidden lg:block 2xl:block bg-[#18181B] p-3 rounded-[2rem]">
        <div className="project-box-2">
          <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="left w-[80%] h-[20rem]">
              <h2 className="text-2xl">CitySling Bag E-Com Website</h2>
              <div className="mt-5">
                <p>
                  This full-stack e-commerce application is designed for a city
                  sling bag store, built using EJS for templating, Node.js for
                  backend logic, and Tailwind CSS for modern styling. The
                  application uses MongoDB Atlas for secure and efficient data
                  storage and includes authentication with JWT and password
                  encryption with bcrypt to protect user data. Featuring a
                  dynamic landing page displaying the latest products, the
                  project is structured with an MVC model to ensure scalable,
                  production-grade code. This project demonstrates my full-stack
                  development skills, with a focus on security, scalability, and
                  clean design.
                </p>
              </div>
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
            <div className="right w-[50%]">
              <Image
                src="/Projects/citysling.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>
        <div className="border border-red-500 mx-20 my-10"></div>

        <div className="project-box-2">
          <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
            Project 2
          </h2>
          <div className="my-5 ml-10 flex justify-end gap-20">
            <div className="right w-[50%]">
              <Image
                src="/Projects/foodplaza.png"
                alt="loading.."
                loading="lazy"
                width={500}
                height={500}
                className="transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>
            <div className="left w-[80%] h-[20rem]">
              <h2 className="text-2xl">Food Plaza Restaurant Website</h2>
              <div className="mt-5">
                <p>
                  This full-stack restaurant application, Food Plaza, showcases
                  a wide variety of meal options, including breakfast, lunch,
                  and dinner, to provide users with a complete dining
                  experience. Developed with the MERN stack (MongoDB, Express,
                  React, Node.js), the project features secure authentication
                  using JWT and bcrypt for password encryption. Key
                  functionalities include form validation, a search feature for
                  easy menu navigation, and a loading bar for smooth user
                  interaction. Styled with CSS for a clean, appealing interface,
                  this project demonstrates my skills in creating interactive,
                  user-friendly full-stack applications with an emphasis on
                  security and performance.
                </p>
              </div>
              <div className="mt-10 ml-10 flex gap-2 ">
                <FaLink />
                <Link className="text-amber-400" href={""}>
                  {" "}
                  Visit Project..
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center my-10">
          <button className="bg-[#1E49F6] p-5  text-2xl font-semibold rounded-full">
            See More Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default MernStackProject;

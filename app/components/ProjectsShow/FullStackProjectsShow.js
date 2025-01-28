"use client";
import Link from "next/link";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import styles from "./ProjectShow.module.css";
// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

const FullStackProjectsShow = () => {
  return (
    <div className="sub-container bg-slate-800 p-5 my-10 rounded-lg">
      <div className="fullstack-projects-box">
        <h2 className="mt-5 text-3xl mb-5 text-red-500 font-semibold">
          Full Stack Projects
        </h2>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          //  autoplay={{
          //   delay:4500,
          //   disableOnInteraction:false
          //  }}
          //  loop={true}
          modules={[FreeMode, Pagination, Autoplay]}
          className={styles.firstSwiper}
        >
          <SwiperSlide>
            {" "}
            <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
              <img
                className="w-[20rem]"
                src="/ProjectShow/CitySlingImg.png"
                alt="loading.."
              />
              <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                CitySling Bag E-com Website
              </p>
              <p className="text-black text-sm">
                Full-stack e-commerce application is designed for a city sling
                bag store, built using EJS for templating, Node.js for backend
                logic, and Tailwind CSS for modern styling. The application uses
                MongoDB Atlas data storage and includes
                authentication with JWT and password encryption with bcrypt to
                protect user data.
                <span>
                  <Link className="text-blue-700" href={""}>
                    See more..
                  </Link>
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
              <img
                className="w-[20rem]"
                src="/ProjectShow/Wear Collections Img.png"
                alt="loading.."
              />
              <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                Wear Collections E-com
              </p>
              <p className="text-black ">
                A e-com website developed using React Js,HTML,CSS and
                Javascript.Designed with a focus on smooth user experience. This
                project highlights my skills in creating interactive,
                user-friendly web applications.
                <span>
                  <Link className="text-blue-700" href={""}>
                    See more..
                  </Link>
                </span>
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default FullStackProjectsShow;

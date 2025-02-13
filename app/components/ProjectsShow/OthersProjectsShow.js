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
import Image from "next/image";

const OthersProjectsShow = () => {
  return (
    <div className="sub-container bg-slate-800 p-5 my-10 rounded-lg">
      <div className="fullstack-projects-box">
        <h2 className="mt-5 text-3xl mb-5 text-red-500 font-semibold">
          Others Projects
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
              <Image
                src="/ProjectShow/feedbackimg.png"
                alt="loading...."
                loading="lazy"
                width={500}
                height={500}
              />
              <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                Student Feedback System in Php
              </p>
              <p className="text-black text-sm">
                The Student Feedback System is a web-based platform built with
                HTML, CSS, JavaScript, and PHP that allows students to submit
                feedback on faculty.This system helps improve academic quality
                by collecting and analyzing student opinions efficiently...
                <span>
                  <Link
                    className="text-blue-700 text-lg"
                    href={"/pages/projectall/overview/studentfeedbackoverview"}
                  >
                    See more..
                  </Link>
                </span>
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
              <Image
                src="/ProjectShow/gymmanagement.png"
                alt="loading...."
                loading="lazy"
                width={500}
                height={500}
              />
              <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                Gym Management System Using PHP
              </p>
              <p className="text-black text-sm">
                The Gym Management System is a web-based application built using
                PHP that helps gym owners and administrators efficiently manage
                their gym operations. The system provides functionalities such
                as member registration, membership plans,
                trainer management..
                <span>
                  <Link
                    className="text-blue-700 text-lg"
                    href={"/pages/projectall/overview/gymmanagementoverview"}
                  >
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

export default OthersProjectsShow;

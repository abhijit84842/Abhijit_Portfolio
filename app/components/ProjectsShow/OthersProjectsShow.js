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
    <div className="sub-container bg-slate-800 rounded-lg my-5 p-2 2xl:p-5 2xl:my-10 ">
      <div className="fullstack-projects-box">
        <h2 className=" text-xl text-red-500 font-semibold my-2 lg:my-5 lg:text-3xl 2xl:mt-5 2xl:text-3xl 2xl:mb-5 ">
          Others Projects
        </h2>

        <div className="swiper-container lg:hidden 2xl:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            // loop={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className={styles.firstSwiper}
          >
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mx-2 mb-2">
                <Link href="/pages/projectall/overview/studentfeedbackoverview">
                  <Image
                    src="/ProjectShow/feedbackimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Student Feedback System is a web-based platform built with
                  HTML, CSS, JavaScript, and PHP that allows students to submit
                  feedback on faculty.This system helps improve academic quality
                  by collecting and analyzing student opinions efficiently...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={
                        "/pages/projectall/overview/studentfeedbackoverview"
                      }
                    >
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mx-2 mb-2">
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="/ProjectShow/gymmanagement.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Gym Management System is a web-based application built
                  using PHP that helps gym owners and administrators efficiently
                  manage their gym operations. The system provides
                  functionalities such as member registration, membership plans,
                  trainer management..
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/gymmanagementoverview"}
                    >
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mx-2 mb-2">
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="/ProjectShow/timetableimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Automatic Timetable Generator is a web-based system built
                  using PHP, HTML, and CSS that automates the process of
                  creating timetables for educational institutions. It
                  efficiently assigns subjects, faculty, and time slots while
                  ensuring no conflicts in scheduling...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/timetableoverview"}
                    >
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/*Responsive lg breakpoint for ipad pro */}
        <div className="swiper-container hidden lg:block 2xl:hidden">
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            // loop={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className={styles.firstSwiper}
          >
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mb-2">
                <Link href="/pages/projectall/overview/studentfeedbackoverview">
                  <Image
                    src="/ProjectShow/feedbackimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Student Feedback System is a web-based platform built with
                  HTML, CSS, JavaScript, and PHP that allows students to submit
                  feedback on faculty.This system helps improve academic quality
                  by collecting and analyzing student opinions efficiently...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={
                        "/pages/projectall/overview/studentfeedbackoverview"
                      }
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
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="/ProjectShow/gymmanagement.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Gym Management System is a web-based application built
                  using PHP that helps gym owners and administrators efficiently
                  manage their gym operations. The system provides
                  functionalities such as member registration, membership plans,
                  trainer management..
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/gymmanagementoverview"}
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
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="/ProjectShow/timetableimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Automatic Timetable Generator is a web-based system built
                  using PHP, HTML, and CSS that automates the process of
                  creating timetables for educational institutions. It
                  efficiently assigns subjects, faculty, and time slots while
                  ensuring no conflicts in scheduling...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/timetableoverview"}
                    >
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/*Responsive 2xl break point for big screen */}
        <div className="swiper-container hidden 2xl:block">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[FreeMode, Pagination, Autoplay]}
            className={styles.firstSwiper}
          >
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <Link href="/pages/projectall/overview/studentfeedbackoverview">
                  <Image
                    src="/ProjectShow/feedbackimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Student Feedback System is a web-based platform built with
                  HTML, CSS, JavaScript, and PHP that allows students to submit
                  feedback on faculty.This system helps improve academic quality
                  by collecting and analyzing student opinions efficiently...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={
                        "/pages/projectall/overview/studentfeedbackoverview"
                      }
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
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="/ProjectShow/gymmanagement.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Gym Management System is a web-based application built
                  using PHP that helps gym owners and administrators efficiently
                  manage their gym operations. The system provides
                  functionalities such as member registration, membership plans,
                  trainer management..
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/gymmanagementoverview"}
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
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="/ProjectShow/timetableimg.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    className="transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <p className="text-black text-sm">
                  The Automatic Timetable Generator is a web-based system built
                  using PHP, HTML, and CSS that automates the process of
                  creating timetables for educational institutions. It
                  efficiently assigns subjects, faculty, and time slots while
                  ensuring no conflicts in scheduling...
                  <span>
                    <Link
                      className="text-blue-700 text-sm"
                      href={"/pages/projectall/overview/timetableoverview"}
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
    </div>
  );
};

export default OthersProjectsShow;

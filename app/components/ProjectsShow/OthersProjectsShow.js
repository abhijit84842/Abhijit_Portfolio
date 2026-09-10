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
    <div
      className="sub-container bg-slate-800 rounded-lg my-5 p-2 2xl:p-5 2xl:my-10 "
      id="othersprojects"
    >
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
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024250/studentFeedBackSystem_eyvfq2.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <div>
                  <p className="text-sm/6 tracking-wide line-clamp-5 text-black/80">
                    The Student Feedback System is a web-based platform built
                    with HTML, CSS, JavaScript, and PHP that allows students to
                    submit feedback on faculty.This system helps improve
                    academic quality by collecting and analyzing student
                    opinions efficiently
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/studentfeedbackoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mx-2 mb-2">
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789025161/Gym_Management_kcpnky.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <div>
                  <p className="text-sm/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Gym Management System is a web-based application built
                    using PHP that helps gym owners and administrators
                    efficiently manage their gym operations. The system provides
                    functionalities such as member registration, membership
                    plans, trainer management
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/gymmanagementoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem] mx-2 mb-2">
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024823/Automatic_Time_Table_Generator_uwepwv.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <div>
                  <p className="text-sm/6 tracking-wide line-clamp-5 text-black/80">
                    The Automatic Timetable Generator is a web-based system
                    built using PHP, HTML, and CSS that automates the process of
                    creating timetables for educational institutions. It
                    efficiently assigns subjects, faculty, and time slots while
                    ensuring no conflicts in scheduling
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/timetableoverview"}
                  >
                    See more
                  </Link>
                </div>
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
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024250/studentFeedBackSystem_eyvfq2.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Student Feedback System is a web-based platform built
                    with HTML, CSS, JavaScript, and PHP that allows students to
                    submit feedback on faculty.This system helps improve
                    academic quality by collecting and analyzing student
                    opinions efficiently
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/studentfeedbackoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789025161/Gym_Management_kcpnky.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Gym Management System is a web-based application built
                    using PHP that helps gym owners and administrators
                    efficiently manage their gym operations. The system provides
                    functionalities such as member registration, membership
                    plans, trainer management
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/gymmanagementoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024823/Automatic_Time_Table_Generator_uwepwv.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Automatic Timetable Generator is a web-based system
                    built using PHP, HTML, and CSS that automates the process of
                    creating timetables for educational institutions. It
                    efficiently assigns subjects, faculty, and time slots while
                    ensuring no conflicts in scheduling
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/timetableoverview"}
                  >
                    See more
                  </Link>
                </div>
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
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024250/studentFeedBackSystem_eyvfq2.png"
                    alt="loading...."
                    loading="lazy"
                    priority={false}
                    width={500}
                    height={500}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Student Feedback System Using Php
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Student Feedback System is a web-based platform built
                    with HTML, CSS, JavaScript, and PHP that allows students to
                    submit feedback on faculty.This system helps improve
                    academic quality by collecting and analyzing student
                    opinions efficiently
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/studentfeedbackoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <Link href="/pages/projectall/overview/gymmanagementoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789025161/Gym_Management_kcpnky.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Gym Management System Using PHP
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Gym Management System is a web-based application built
                    using PHP that helps gym owners and administrators
                    efficiently manage their gym operations. The system provides
                    functionalities such as member registration, membership
                    plans, trainer management
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/gymmanagementoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <Link href="/pages/projectall/overview/timetableoverview">
                  <Image
                    src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789024823/Automatic_Time_Table_Generator_uwepwv.png"
                    alt="loading...."
                    loading="lazy"
                    width={500}
                    height={500}
                    priority={false}
                    quality={100}
                    className="transition-transform duration-300 ease-in-out hover:scale-110 rounded-md"
                  />
                  <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                    Automatic Time Table Generator
                  </p>
                </Link>
                <div>
                  <p className="text-base/6 tracking-wide line-clamp-5 text-black/80">
                    {" "}
                    The Automatic Timetable Generator is a web-based system
                    built using PHP, HTML, and CSS that automates the process of
                    creating timetables for educational institutions. It
                    efficiently assigns subjects, faculty, and time slots while
                    ensuring no conflicts in scheduling
                  </p>
                  <Link
                    className="text-blue-700 text-sm"
                    href={"/pages/projectall/overview/timetableoverview"}
                  >
                    See more
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OthersProjectsShow;

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./Projectoverview.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";
import Link from "next/link";

const AutomaticTimeTable = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-2 2xl:p-10">
      <h1 className="font-semibold flex justify-center text-xl my-5 lg:text-4xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mb-10">
        Automatic Time Table Generator Using PHP
      </h1>
      <div className="sub-container bg-zinc-700 rounded-lg p-1 my-5 2xl:p-3">
        <h2 className="font-semibold text-red-500 ml-2 my-2 lg:my-5 lg:text-2xl  2xl:text-2xl 2xl:py-2 2xl:pl-5">
          Project Images :-
        </h2>

        <Swiper
          styles={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className={styles.mySwiper2}
        >
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790171511/timetable_1_ybb9mh.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790171512/timetable_2_gbhipu.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790171727/timetable_3_dpga8z.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790172668/timetable_4_tgjyhb.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790172667/timetable_5_qvekrv.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173150/timetable_6_rxzvwa.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173162/timetable_7_t5o3ic.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173165/timetable_8_b23qvq.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173392/timetable_9_gu0hlg.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173402/timetable_10_utaw4t.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173553/timetable_11_ghezhp.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173659/timetable_12_x4qfy3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
        </Swiper>

        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper}
          breakpoints={{
            375: { slidesPerView: 3, spaceBetween: 5 }, // phone SE
            390: { slidesPerView: 4, spaceBetween: 5 }, // iphone 12 pro
            1024: { slidesPerView: 4, spaceBetween: 5 }, // ipad tablets
            1280: { slidesPerView: 4, spaceBetween: 10 }, // for laptop and desktop
          }}
        >
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790172464/timetable_1_Small_jqvubn.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790172465/timetable_2_Small_zoci3s.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790172465/timetable_3_Small_lclugt.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173801/timetable_4_Small_q1nhb7.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173802/timetable_5_Small_egeajh.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173805/timetable_6_Small_val76d.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173807/timetable_7_Small_ammuss.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173810/timetable_8_Small_fkzhuy.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173812/timetable_9_Small_ysn4zv.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173815/timetable_10_Small_u7yymn.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173818/timetable_11_Small_cqiicq.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790173820/timetable_12_Small_vrfwfu.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
        </Swiper>

        <div className="project-description mt-5 2xl:mt-10">
          <h2 className="font-semibold text-red-500 text-xl my-5 ml-2 2xl:text-2xl 2xl:py-2 2xl:pl-5">
            Project Description :-
          </h2>
          <div className="description ml-2 2xl:px-10">
            <p>
              The <b>Automatic Timetable Generator</b> is a web-based system
              developed using <b>PHP, HTML, and CSS</b> that simplifies the
              process of scheduling classes in educational institutions. This
              system eliminates the need for manual timetable creation by
              allowing administrators to efficiently generate class schedules
              for teachers and students while ensuring no conflicts in timings.
            </p>
            <p>
              The project features a secure admin login where only authenticated
              administrators can access the system using a valid user ID and
              password. Once logged in, the admin can{" "}
              <b>add, update, and delete</b> teacher and student details. A key
              feature of the system is its ability to generate a structured
              timetable for each teacher, assigning subjects and class timings
              systematically. Students can easily view their class routines
              through the system, making it convenient for them to stay updated
              with their schedules.
            </p>
            <p>
              The system is designed to store all data securely in a{" "}
              <b>MySQL database,</b> ensuring efficient record-keeping and easy
              retrieval of information. Additionally, it is hosted on a local
              XAMPP server, making it easy to test and deploy. This project
              provides an effective solution for institutions to automate
              timetable generation, reducing errors and saving time.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Key Features :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              1. Admin Authentication & Security
            </h3>
            <li className="ml-10">
              Secure login system for the admin with an authentication ID and
              password.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">2. Admin Dashboard</h3>
            <li className="ml-10">
              Admin can add, update, and delete teacher details.
            </li>
            <li className="ml-10">
              Admin can add, update, and delete student details.
            </li>
            <li className="ml-10">
              Admin can view teachers and students details.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              3. Automatic Timetable Generation
            </h3>
            <li className="ml-10">
              Admin can create structured class schedules for teachers.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">4. Student Dashboard</h3>
            <li className="ml-10">
              Students can view their class routines easily.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              5. Database Management
            </h3>
            <li className="ml-10">
              All teacher, student, and timetable data is securely stored in
              MySQL.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">6. Local Hosting</h3>
            <li className="ml-10">
              Runs on XAMPP Server for smooth operation and testing.
            </li>
          </ul>
        </div>
        <div className="technology">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Technology Use :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10">HTML, CSS</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Backend:</h3>
            <li className="ml-10">PHP</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Database & Storage:</h3>
            <li className="ml-10">MYSQL</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              Authentication & Security:
            </h3>
            <li className="ml-10">Sessions for admin authentication</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Server:</h3>
            <li className="ml-10">XAMPP (Apache, MySQL, PHP)</li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Automatic_Time_Table_Generator"
          >
            See Project on gitHub
          </Link>
        </div>
        <div className="figma-design">
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Download PPT :-
          </h2>
          <Link
            className="ml-10 text-lime-400"
            href="https://res.cloudinary.com/drdu5lnsq/raw/upload/v1790231679/Automated_Timetable_Generator_hewskg.pptx"
          >
            Click here to download ppt..
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AutomaticTimeTable;

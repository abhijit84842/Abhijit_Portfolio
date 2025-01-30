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
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Link from "next/link";

const CitySling = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        City Sling E-com Website Overview
      </h1>
      <div className="sub-container bg-zinc-700 rounded-lg p-3">
        <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
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
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
        >
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
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
        >
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>

        <div className="project-description mt-10">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Project Description :-
          </h2>
          <div className="description px-10">
            <p>
              This full-stack e-commerce application is designed for a city
              sling bag store, built using EJS for templating, Node.js for
              backend logic, and Tailwind CSS for modern styling. The
              application uses MongoDB Atlas for secure and efficient data
              storage and includes authentication with JWT and password
              encryption with bcrypt to protect user data. Featuring a dynamic
              landing page displaying the latest products, the project is
              structured with an MVC model to ensure scalable, production-grade
              code. This project demonstrates my full-stack development skills,
              with a focus on security, scalability, and clean design.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Features :-
          </h2>
          <ul className="ml-10">
            <li>Use Ejs</li>
            <li>Use JWT </li>
            <li>Use bcrypt</li>
            <li>Use cookie</li>
            <li>sssfss</li>
          </ul>
        </div>
        <div className="technology">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Technology Use :-
          </h2>
          <ul className="ml-10">
            <li>JWT</li>
            <li>Node js</li>
            <li>Javascript</li>
            <li>Authentication</li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link className="ml-10 text-blue-500" href={"#"}>
            See Project on github
          </Link>
        </div>
        <div className="figma-design">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Figma Design :-
          </h2>
          <Link className="ml-10" href={"#"}>
            See desing on figma
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CitySling;

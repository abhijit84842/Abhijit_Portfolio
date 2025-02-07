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

const BmiCalculator = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        BMI Calculator Using React Js
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
              src="/Overview/frontendprojects/bmicalculator/bmi3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi4.PNG"
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
              src="/Overview/frontendprojects/bmicalculator/bmi3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/bmicalculator/bmi4.PNG"
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
              The BMI (Body Mass Index) Calculator is a simple yet effective web
              application built using React.js that allows users to calculate
              their BMI based on their weight and height. The application
              determines whether the user is underweight, normal weight,
              overweight, or obese, providing valuable health insights. This BMI
              calculator is designed with a clean and modern UI using Tailwind
              CSS, ensuring a smooth and responsive user experience across all
              devices. The app utilizes useState to manage the BMI value and the
              corresponding message displayed based on the calculated result.
              For input handling, the app leverages useRef hooks, allowing users
              to enter their weight and height efficiently. A reload button is
              also included, enabling users to reset the form and enter new
              values without refreshing the entire page. This BMI calculator is
              an excellent tool for users looking to monitor their health and
              understand their BMI category. It serves as a practical and
              user-friendly application with a seamless interface and smooth
              functionality.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Key Features :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">1. BMI Calculation</h3>
            <li className="ml-10">
              Accurately calculates BMI based on weight and height.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              2. Health Status Message
            </h3>
            <li className="ml-10">
              Displays whether the user is underweight, normal weight,
              overweight, or obese.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              3. useRef for Input Handling
            </h3>
            <li className="ml-10">
              Takes values directly from the input fields efficiently.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              4. useState for State Management
            </h3>
            <li className="ml-10">
              Handles BMI results and status messages dynamically.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">5. Reload Button</h3>
            <li className="ml-10">
              Allows users to reset the form and enter new values quickly.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. UI Design with Tailwind CSS
            </h3>
            <li className="ml-10">Ensures a modern and interactive design.</li>
          </ul>
        </div>

        <div className="technology">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Technology Use :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10">
              <span className="text-xl">React.js - </span> Core framework for
              building the BMI calculator.
            </li>
            <li className="ml-10">
              <span className="text-xl">Tailwind CSS - </span>Provides a clean
              and modern, interactive UI.
            </li>
            <li className="ml-10">
              <span className="text-xl">useState Hook S - </span>Manages BMI
              calculations and messages dynamically.
            </li>
            <li className="ml-10">
              <span className="text-xl">useRef Hook - </span>Handles input
              values efficiently.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/Frontend%20Project(React%20Js)/BMI%20calculator%20using%20React"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculator;

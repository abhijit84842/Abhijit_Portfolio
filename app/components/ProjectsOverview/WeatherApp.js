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

const WeatherApp = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-2 2xl:p-10">
      <h1 className="font-semibold flex justify-center text-xl my-5 lg:text-4xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mb-10">
        Weather App Using React Js
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
              src="/Overview/frontendprojects/weatherapp/weather 1.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 2.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 4.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 5.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 6.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 7.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 8.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 9.png"
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
          breakpoints={{
            375: { slidesPerView: 3, spaceBetween: 5 }, // phone SE
            390: { slidesPerView: 4, spaceBetween: 5 }, // iphone 12 pro
            1024: { slidesPerView: 4, spaceBetween: 5 }, // ipad tablets
            1280: { slidesPerView: 4, spaceBetween: 10 }, // for laptop and desktop
          }}
        >
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 1.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 2.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 4.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 5.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 6.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 7.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 8.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/weatherapp/weather 9.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>

        <div className="project-description mt-5 2xl:mt-10">
          <h2 className="font-semibold text-red-500 text-xl my-5 ml-2 2xl:text-2xl 2xl:py-2 2xl:pl-5">
            Project Description :-
          </h2>
          <div className="description ml-2 2xl:px-10">
            <p>
              The <b>Real-Time Weather App</b> is an advanced weather
              forecasting application developed using <b>React.js</b> for
              frontend functionality and <b>Tailwind CSS</b> for styling. This
              app provides users with real-time weather updates based on the
              city name entered in the search bar. It fetches live weather data
              from a <b>free weather API</b>, ensuring accuracy and reliability.
              The app features a <b>temperature unit conversion system</b>,
              allowing users to switch between Celsius and Fahrenheit
              effortlessly. In addition to temperature details, the app provides
              a detailed breakdown of weather conditions, including{" "}
              <b>
                wind speed (km/h), air pressure, humidity levels, visibility
                (km), pressure (psi), and cloud cover (%)
              </b>
              . One of the standout features is the display of current sunrise
              and sunset timings, offering users precise information about the
              day’s light conditions. This project demonstrates expertise in{" "}
              <b>
                React.js development, API integration, state management, and
                performance optimization
              </b>
              . It serves as an ideal tool for users who need quick and reliable
              weather updates on the go.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Key Features :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              1. City-Based Weather Search:
            </h3>
            <li className="ml-10">
              Users can enter a city name in the search bar to get real-time
              weather updates.
            </li>
            <li className="ml-10">
              The app fetches weather data from a free weather API.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              2. Temperature Unit Conversion:
            </h3>
            <li className="ml-10">
              Users can toggle between Celsius (°C) and Fahrenheit (°F) for
              temperature display.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              3. Detailed Weather Information:
            </h3>
            <li className="ml-10">
              Displays key weather metrics, including:
              <div>
                <p>✅ Wind Speed (km/h)</p>
                <p>✅ Air Pressure</p>
                <p>✅ Humidity Levels</p>
                <p>✅ Visibility (km)</p>
                <p>✅ Pressure (psi)</p>
                <p>✅ Cloud Cover (%)</p>
              </div>
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              4. Sunrise & Sunset Time Display:
            </h3>
            <li className="ml-10">
              The app shows current sunrise and sunset times based on the
              selected city.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              5. Optimized Rendering for Performance:
            </h3>
            <li className="ml-10">
              Uses React optimization techniques to minimize unnecessary
              re-renders.
            </li>
            <li className="ml-10">
              Efficient API calls ensure faster data retrieval.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              6. Modern & Stylish UI:
            </h3>
            <li className="ml-10">
              Styled with Tailwind CSS for a clean and visually appealing
              design.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              7. Optimized with MVC Structure
            </h3>
            <li className="ml-10">
              Ensures scalable and maintainable code organization.
            </li>
          </ul>
        </div>

        <div className="technology">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Technology Use :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10 text-sm">
              <span className="text-xl">React.js - </span> for building the UI
              and handling state.
            </li>
            <li className="ml-10 text-sm">
              <span className="text-lg">Tailwind CSS - </span>Creates
              interactive carousels and sliders for project showcases.
            </li>
            <li className="ml-10 text-sm">
              <span className="text-lg">Tailwind CSS - </span>Ensures a clean,
              modern design.
            </li>
            <li className="ml-10 text-sm">
              <span className="text-lg">API Integration - </span>Free Weather
              API (for real-time weather data)
            </li>
            <li className="ml-10 text-sm">
              <span className="text-lg">State Management - </span>useState &
              useEffect hooks for managing data.
            </li>
            <li className="ml-10 text-sm">
              <span className="text-lg"> Performance Optimization - </span>
              Memoization techniques to reduce re-renders.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/Frontend%20Project(React%20Js)/Weather%20app%20using%20ReactJs"
            target="_blank"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;

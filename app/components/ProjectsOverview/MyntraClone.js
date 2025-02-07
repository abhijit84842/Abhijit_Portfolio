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

const MyntraClone = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        Myntra Clone Using React
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
              src="/Overview/frontendprojects/myntra/myntra1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/myntra/myntra2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/myntra/myntra3.PNG"
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
              src="/Overview/frontendprojects/myntra/myntra1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/myntra/myntra2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/myntra/myntra3.PNG"
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
              The Myntra Clone is a fully functional and visually appealing
              e-commerce website built using React.js. This project aims to
              replicate the shopping experience of Myntra by implementing key
              e-commerce functionalities, including product browsing, cart
              management, and dynamic price calculations. The homepage displays
              a well-structured product listing, allowing users to explore
              various fashion categories. Users can add products to their
              shopping cart with a simple click. The functional cart page
              provides a smooth shopping experience by showing selected items,
              their quantities, and total pricing calculations in real-time. A
              cross-symbol delete feature is included, enabling users to quickly
              remove unwanted items from the cart. The pricing is dynamically
              updated as users add or remove products, ensuring accurate total
              cost calculation. The project efficiently utilizes the useState
              hook for state management, making the cart system interactive and
              responsive. For styling, CSS3 is used to maintain a clean and
              modern UI, ensuring a visually engaging and mobile-friendly
              design. The layout is optimized for a seamless user experience,
              allowing shoppers to navigate effortlessly between different
              sections. This Myntra Clone is a great demonstration of
              React&asop;s capability in building scalable and interactive
              e-commerce interfaces while maintaining performance and
              efficiency.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Key Features :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              1. Product Listing Page
            </h3>
            <li className="ml-10">
              Displays available fashion products in a structured grid format.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              2. Add to Cart Button
            </h3>
            <li className="ml-10">
              Allows users to add products to their shopping cart effortlessly.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              3. Functional Cart Page
            </h3>
            <li className="ml-10">
              Displays all selected products with real-time updates.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              4. Remove from Cart Button
            </h3>
            <li className="ml-10">
              Users can remove individual items from the cart.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              5. Cross Symbol Delete Feature
            </h3>
            <li className="ml-10">
              A quick way to remove items using an intuitive delete icon.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. Dynamic Price Calculation
            </h3>
            <li className="ml-10">
              Automatically updates total pricing as items are added or removed.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              7. State Management using useState Hook
            </h3>
            <li className="ml-10">
              Ensures smooth and responsive cart interactions.
            </li>
          </ul>
        </div>

        <div className="technology">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Technology Use :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10">
              <span className="text-xl">React.js - </span>For building a dynamic
              and interactive user interface.
            </li>
            <li className="ml-10">
              <span className="text-xl">useState Hook - </span>Manages cart
              state and updates UI dynamically.
            </li>
            <li className="ml-10">
              <span className="text-xl">CSS3 - </span>Provides a clean, modern
              design.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/MERN%20Stack%20Project/Myntra%20Clone%20Using%20React/Myntra%20Clone"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyntraClone;

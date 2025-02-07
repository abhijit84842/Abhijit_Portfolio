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

const WearCollection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        Wear Collection E-com Website
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
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection7.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection8.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection9.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection10.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection11.PNG"
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
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection7.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection8.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection9.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection10.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/wearcollectionimg/wearcollection11.PNG"
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
              WearCollection is a modern and user-friendly e-commerce website
              built using React.js, designed to provide a seamless shopping
              experience for customers. This project focuses on showcasing a
              diverse range of clothing products categorized into three main
              sections: Men, Women, and Kids. The website features a dynamic UI
              with smooth navigation, a well-structured product display, and an
              interactive shopping cart system. The homepage welcomes users with
              a visually appealing Hero Section, highlighting featured products
              and offers. The Navigation Bar ensures easy browsing across
              different categories, enhancing user experience. Each product page
              displays detailed information, along with a &quot;Similar
              Products&quot; section, which suggests related items to keep
              customers engaged. A fully functional Cart Section is integrated,
              allowing users to add or remove items effortlessly. The website
              efficiently manages state using Redux Toolkit and Context API,
              ensuring a smooth and optimized shopping experience. React Router
              DOM is implemented for seamless page transitions, making
              navigation fast and efficient. For styling, CSS3 and Bootstrap are
              used to create a clean and responsive design, ensuring
              compatibility across various devices. The Footer Section includes
              essential links, customer support information, and social media
              connections, adding a professional touch to the website.
              WearCollection is an excellent demonstration of a scalable and
              interactive e-commerce frontend, combining powerful state
              management, smooth UI components, and an intuitive user
              experience.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Key Features :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              1. Three Clothing Categories
            </h3>
            <li className="ml-10">
              Men, Women, and Kids sections for easy browsing.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              2. Dynamic Hero Section -
            </h3>
            <li className="ml-10">
              Showcases featured products and offers with a stylish design.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              3. Functional Cart System -
            </h3>
            <li className="ml-10">
              Users can add, remove, and manage cart items efficiently.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              4. Similar Products Display -
            </h3>
            <li className="ml-10">
              Suggests related items below product pages to enhance shopping
              experience.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              5. State Management with Redux Toolkit & Context API -
            </h3>
            <li className="ml-10">
              Ensures smooth and efficient state handling.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. React Router DOM -
            </h3>
            <li className="ml-10">
              Enables seamless navigation across different pages.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              7. Navigation Bar & Footer -
            </h3>
            <li className="ml-10">
              Well-structured navigation for smooth browsing and a footer with
              essential details.
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
              <span className="text-xl">React.js - </span>For building a dynamic and interactive user interface.
            </li>
            <li className="ml-10"><span className="text-xl">Redux Toolkit - </span>For efficient and scalable state management.</li>
            <li className="ml-10"><span className="text-xl">Context API - </span>Additional state handling for better flexibility.</li>
            <li className="ml-10"><span className="text-xl">React Router DOM - </span>Manages navigation between different pages.</li>
            <li className="ml-10"><span className="text-xl">CSS3 - </span>Custom styling for a modern and sleek UI.</li>
            <li className="ml-10"><span className="text-xl">Bootstrap - </span>Enhances layout and responsiveness with pre-designed components.</li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/MERN%20Stack%20Project/Wear%20Collection%20E-commerce/Frontend"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WearCollection;

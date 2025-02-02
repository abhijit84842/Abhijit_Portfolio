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

const FoodPlaza = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        FoodPlaza Restaurant Website
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
              src="/Overview/fullstackprojects/foodplaza/foodplaza1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza7.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza8.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza9.PNG"
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
              src="/Overview/fullstackprojects/foodplaza/foodplaza1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza7.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza8.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/foodplaza/foodplaza9.PNG"
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
              Food Plaza is a dynamic and user-friendly restaurant website
              designed to provide a seamless online food browsing experience.
              The website allows users to explore a variety of meals, including
              breakfast, lunch, and dinner, with detailed descriptions and
              affordable pricing. Built using the MERN stack (MongoDB, Express,
              React, Node.js), this full-stack project follows the MVC
              architecture for structured and scalable development. The website
              features a secure authentication system where only the admin has
              access to manage food items and update restaurant information.
              Admin authentication is managed through JWT tokens, ensuring
              secure login and session handling. Passwords are securely stored
              using bcrypt encryption to enhance security. For handling images,
              the website leverages Multer to encode and upload food images.
              Additionally, messages are implemented to provide real-time alert
              notifications for user actions like authentication and data
              modifications. The backend is powered by Node.js and Express.js,
              with MongoDB Atlas as the database solution for efficient data
              management.The development process is streamlined with Nodemon,
              which enables automatic server restarts during code changes.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Key Features :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              1. View Food Categories
            </h3>
            <li className="ml-10">
              Users can browse through different food categories like breakfast,
              lunch, and dinner.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              2. Affordable Pricing
            </h3>
            <li className="ml-10">
              Displays food items with budget-friendly prices
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              3. Admin Authentication
            </h3>
            <li className="ml-10">
              Only admin users can log in and manage the restaurant&apos;s menu.
            </li>
            <li className="ml-10">Admin can add food update and delete.</li>
            <li className="ml-10">Track orders and update order statuses.</li>
            <li className="ml-10">
              Monitor website performance and customer activity.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              4. Image Handling & Storage
            </h3>
            <li className="ml-10">
              Multer for image encoding and secure storage.
            </li>
            <li className="ml-10">
              Efficiently handles large image uploads without performance
              issues.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              5. Development & Deployment
            </h3>
            <li className="ml-10">
              Nodemon for development (auto-reloading for better efficiency).
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. Password Encryption
            </h3>
            <li className="ml-10">
              User passwords are securely hashed using bcrypt.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              7. Secure JWT Authentication
            </h3>
            <li className="ml-10">
              Ensures safe and protected access to admin functionalities.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              8. Email Verification
            </h3>
            <li className="ml-10">
              Ensures that only verified admin can log in and perform actions.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">9. MVC Architecture</h3>
            <li className="ml-10">
              Organizes the project into models, views, and controllers for
              better code management.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              9. Middleware Implementation
            </h3>
            <li className="ml-10">
              Enhances security, logging, error handling, and request validation
              for better backend management.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              11. MongoDB Atlas Database
            </h3>
            <li className="ml-10">
              Stores all food items, admin credentials, and restaurant details
              efficiently.
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
              React.js - For building a dynamic and interactive user interface.
            </li>
            <li className="ml-10">CSS3 - For styling best design.</li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">Backend:</h3>
            <li className="ml-10">
              Node.js - For building the backend logic and APIs.
            </li>
            <li className="ml-10">
              Express.js - For handling server-side routes and requests.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">Database & Storage:</h3>
            <li className="ml-10">
              MongoDB Atlas - For storing user data, products, and orders.
            </li>
            <li className="ml-10">
              Mongoose - For efficient data handling and schema validation.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              Authentication & Security:
            </h3>
            <li className="ml-10">
              JWT (JSON Web Token) - For secure authentication.
            </li>
            <li className="ml-10">
              Bcrypt - For hashing and encrypting passwords.
            </li>
            <li className="ml-10">
              Multer - For secure image upload and encoding.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              Development & Monitoring:
            </h3>
            <li className="ml-10">
              Nodemon - For auto-reloading during development.
            </li>
            <li className="ml-10">
              MVC Architecture - Ensuring a structured, maintainable, and
              scalable codebase.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/Frontend%20Project(React%20Js)/Food_Plaza_app_Using%20React"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPlaza;

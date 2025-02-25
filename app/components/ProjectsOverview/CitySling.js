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

const CitySling = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-1 2xl:p-10">
      <h1 className="font-semibold flex justify-center text-xl my-5 lg:text-4xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mb-10">
        City Sling E-com Website Overview
      </h1>
      <div className="sub-container bg-zinc-700 rounded-lg p-1 my-5 2xl:p-3 ">
        <h2 className="font-semibold text-red-500 ml-2 my-2 lg:my-5 lg:text-2xl  2xl:text-2xl 2xl:py-2 2xl:pl-5">
          Project Images :-
        </h2>

        {/*Responsive 2xl break point forbig screen */}
        <div className="swiper-container">
          <Swiper
            styles={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            // autoplay={{
            //   delay: 3000,
            //   disableOnInteraction: false,
            // }}
            // loop={true}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className={styles.mySwiper2}
          >
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview1.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview9.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview15.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview12.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview17.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview14.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview8.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview16.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview10.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview3.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview4.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview5.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview11.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview7.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview18.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview19.PNG"
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
              375: { slidesPerView: 2, spaceBetween: 5 }, // phone SE
              390: { slidesPerView: 2, spaceBetween: 5 }, // iphone 12 pro
              1024: { slidesPerView: 3, spaceBetween: 5 }, // ipad tablets
              1280: { slidesPerView: 4, spaceBetween: 10 }, // for laptop and desktop
            }}
          >
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview1.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview9.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview15.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview12.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview17.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview14.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview8.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview16.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview10.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview3.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview4.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview5.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview11.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview7.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview18.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slides}>
              <Image
                src="/Overview/fullstackprojects/citysling/cityslingoverview19.PNG"
                alt="loading.."
                loading="lazy"
                layout="fill"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="project-description mt-5 2xl:mt-10">
          <h2 className="font-semibold text-red-500 text-xl my-5 ml-2 2xl:text-2xl 2xl:py-2 2xl:pl-5">
            Project Description :-
          </h2>
          <div className="description ml-2 2xl:px-10">
            <p>
              The CitySling Bag E-Commerce Website is a fully functional online
              store that offers a wide range of stylish and affordable bags for
              men, women, kids, and travel enthusiasts. Built with a robust
              full-stack architecture, this project ensures seamless shopping
              experiences while maintaining security, performance, and
              user-friendly navigation. The website allows users to browse
              through an extensive collection of bags, add items to their cart,
              and securely place orders. It features user and admin
              authentication, secure password encryption, and email verification
              to ensure data privacy and protection. The admin panel enables
              efficient product management, order tracking, and user management.
              With JWT authentication, the system ensures safe login sessions,
              while flash messages provide real-time alerts for a smooth user
              experience. The website follows the MVC (Model-View-Controller)
              architecture, ensuring a clean and scalable codebase. Data is
              stored in MongoDB Atlas, while images are securely uploaded using
              Multer. This project is a perfect blend of modern technologies and
              best development practices, making it a highly scalable and secure
              e-commerce platform.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Key Features :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10 ">
            <h3 className="text-lg font-semibold mb-2">
              1. User Authentication & Security
            </h3>
            <li className="ml-10">
              Secure JWT-based authentication for users and admin.
            </li>
            <li className="ml-10">
              Bcrypt password encryption to ensure user data protection.
            </li>
            <li className="ml-10">
              Email verification to validate users before they can access their
              accounts.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10 ">
            <h3 className="text-lg font-semibold mb-2">
              2. User Dashboard & Shopping Experience
            </h3>
            <li className="ml-10">
              Users can browse categories: Mens Bags, Womens Bags, Kids Bags,
              and Trolley Bags.
            </li>
            <li className="ml-10">
              View product details with high-quality images and descriptions.
            </li>
            <li className="ml-10">
              Add items to the shopping cart and proceed to checkout.
            </li>
            <li className="ml-10">
              Receive flash messages for login, registration, and order updates.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10 ">
            <h3 className="text-lg font-semibold mb-2">3. Admin Dashboard</h3>
            <li className="ml-10">
              Manage products (add, edit, delete bags from inventory).
            </li>
            <li className="ml-10">
              View and manage users (approve, delete, or restrict user access).
            </li>
            <li className="ml-10">Track orders and update order statuses.</li>
            <li className="ml-10">
              Monitor website performance and customer activity.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10 ">
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
          <ul className="list-disc mt-2 ml-5 2xl:ml-10 ">
            <h3 className="text-lg font-semibold mb-2">
              5. Flash Messages & Alerts
            </h3>
            <li className="ml-10">
              Users receive instant flash messages for login/logout, cart
              updates, and order confirmations.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              6. Development & Deployment
            </h3>
            <li className="ml-10">
              Nodemon for development (auto-reloading for better efficiency).
            </li>
            <li className="ml-10">
              Dotenv for environment variables, keeping API keys and sensitive
              data secure.
            </li>
          </ul>
        </div>
        <div className="technology">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Technology Use :-
          </h2>
          <ul className=" list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10">
              EJS (Embedded JavaScript) - For dynamic rendering of pages.
            </li>
            <li className="ml-10">
              Tailwind CSS - For fast, efficient, and responsive styling.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Backend:</h3>
            <li className="ml-10">
              Node.js - For building the backend logic and APIs.
            </li>
            <li className="ml-10">
              Express.js - For handling server-side routes and requests.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Database & Storage:</h3>
            <li className="ml-10">
              MongoDB Atlas - For storing user data, products, and orders.
            </li>
            <li className="ml-10">
              Mongoose - For efficient data handling and schema validation.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
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
            <li className="ml-10">
              Dotenv - For managing environment variables securely.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              Admin & User Management:
            </h3>
            <li className="ml-10">
              Flash Messages - For real-time user notifications.
            </li>
            <li className="ml-10">
              Config Package - For easy management of configurations.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
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
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/MERN%20Stack%20Project/CitySling_E-com_in_NodeJs"
          >
            See Project on gitHub
          </Link>
        </div>
        <div className="figma-design mb-5">
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Figma Design :-
          </h2>
          <Link
            className="ml-10 text-lime-400"
            href="https://www.figma.com/design/3FH9gGvqy3SRoLwzIbTwlY/CitySling-Banner?node-id=0-1&p=f&t=p9LdIBIXC5G1Y6du-0"
          >
            See desing on figma
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CitySling;

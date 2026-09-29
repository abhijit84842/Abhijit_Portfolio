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

// import icons
import { FaUserTie } from "react-icons/fa6";
import { RiAdminFill } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";

const FoodPlaza = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-2 2xl:p-10">
      <h1 className="font-semibold flex justify-center text-xl my-5 lg:text-4xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mb-10">
        FoodPlaza Restaurant Website
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
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789111249/FoodPlaza_1_v5r4jl.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789111797/FoodPlaza_2_z2idzu.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789112179/FoodPlaza_3_obdrmm.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789112732/FoodPlaza_4_ddhwoq.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789112945/FoodPlaza_5_savcdb.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789113162/FoodPlaza_6_wczbg3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789113516/FoodPlaza_7_qvde1g.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789119152/FoodPlaza_8_z2403a.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789119311/FoodPlaza_9_zqgw2z.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789119720/FoodPlaza_10_kdlhxu.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789120079/FoodPlaza_11_kuibqc.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789120709/FoodPlaza_12_jj1kws.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789121184/FoodPlaza_13_evuvkj.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789121326/FoodPlaza_14_ctyg4r.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789122288/FoodPlaza_15_yrytdz.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789122942/FoodPlaza_16_m3braf.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789123527/FoodPlaza_17_a5vhfu.png"
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
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629825/FoodPlaza_1_Small_rkfios.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629827/FoodPlaza_2_Small_oyp5me.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629829/FoodPlaza_3_Small_blbtp5.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629832/FoodPlaza_4_Small_iwifu8.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629834/FoodPlaza_5_Small_xnklg9.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629837/FoodPlaza_6_Small_dveoqh.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629839/FoodPlaza_7_Small_laqyub.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629802/FoodPlaza_8_Small_h2ahtm.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629804/FoodPlaza_9_Small_d1ssig.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629805/FoodPlaza_10_Small_umssxi.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629808/FoodPlaza_11_Small_ah9oqq.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629810/FoodPlaza_12_Small_awjx1x.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629812/FoodPlaza_13_Small_dznofl.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629815/FoodPlaza_14_Small_sjwqvn.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629817/FoodPlaza_15_Small_wba9qv.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629820/FoodPlaza_16_Small_lzsnoe.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1789629822/FoodPlaza_17_Small_supfml.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
        </Swiper>
        <div className="project-documentaion my-5 flex flex-col gap-5">
          <div className="project-description">
            <h2 className="text-2xl font-semibold text-red-500">
              What is FoodPlaza ?
            </h2>
            <p className="tracking-wide my-2 ml-5 text-lg">
              <strong className="text-red-400">**FoodPlaza**</strong> is a
              full-stack restaurant-owned food delivery platform built with
              <strong>**Next.js, Node.js, Express, and MongoDB**</strong>. It
              connects <strong>Customers, Admins, and Delivery Boys</strong>{" "}
              through dedicated role-based workflows. Customers can browse food,
              manage carts, place orders using{" "}
              <strong className="text-red-400">
                **Razorpay or Cash on Delivery**
              </strong>
              , track deliveries in real time, and submit reviews. The platform
              features
              <strong className="text-red-400">**Socket.IO</strong> real-time
              updates, live location tracking,{" "}
              <strong>5 km delivery assignment</strong>, OTP-based delivery
              verification, Google authentication, Cloudinary image management,
              and delivery earnings analytics**. The Admin Panel provides
              complete restaurant and order management, while the Delivery Boy
              Panel handles assignments, completed orders, and earnings.
            </p>
          </div>
          <div className="technology-stack">
            <h2 className="text-2xl font-semibold text-red-500">
              Technology Stack :-
            </h2>
            <div className="my-2 ml-5 flex flex-col gap-5">
              <div className="frontend-technology">
                <h2 className="text-xl font-semibold text-blue-400">
                  Frontend :-
                </h2>
                <ul className="ml-2 my-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">• Next.js - </span>
                    <span className="font-normal">
                      Used as the main frontend framework to build the FoodPlaza
                      web application and its pages.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• React - </span>
                    <span className="font-normal">
                      Used to build reusable and interactive UI components for
                      Customer, Admin, and Delivery Boy panels.
                    </span>
                  </li>

                  <li>
                    <span className="font-semibold">• Redux Toolkit - </span>
                    <span className="font-normal">
                      Used for centralized management of application and
                      cart-related state.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Redux Persist - </span>
                    <span className="font-normal">
                      Used to persist Redux state across page reloads and
                      navigation.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• React Hook Form - </span>
                    <span className="font-normal">
                      React Hook Form - Used for form handling and validation
                      across authentication and other forms.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Socket.IO Client - </span>
                    <span className="font-normal">
                      Used on the frontend to receive and send real-time order,
                      delivery, and shop-status events.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• React Toastify - </span>
                    <span className="font-normal">
                      Used to display user-friendly toast notifications and
                      alerts.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">
                      • Custom Image Magnifier -{" "}
                    </span>
                    <span className="font-normal">
                      Used to provide a zoomed view of food images, including
                      mobile lens-size control.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="backend-technology ">
                <h2 className="text-xl font-semibold text-blue-400">
                  Backend :-
                </h2>
                <ul className="my-2 ml-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">• Node.js - </span>
                    <span className="font-normal">
                      Used as the backend runtime environment for FoodPlaza
                      server-side operations.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Express.js - </span>
                    <span className="font-normal">
                      Used to build backend APIs and handle application requests
                      and routes.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">
                      • JWT (JSON Web Token) -{" "}
                    </span>
                    <span className="font-normal">
                      Used as part of the authentication system for securing
                      authenticated user sessions.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• bcrypt - </span>
                    <span className="font-normal">
                      Used to securely encrypt/hash passwords and verify login
                      credentials.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Mongoose - </span>
                    <span className="font-normal">
                      Used for MongoDB data modeling and database operations.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Multer - </span>
                    <span className="font-normal">
                      Used for handling image/file uploads on the backend.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Nodemailer - </span>
                    <span className="font-normal">
                      Used to send OTP emails, including the delivery
                      verification OTP.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Socket.IO - </span>
                    <span className="font-normal">
                      Used to provide real-time communication between Customers,
                      Admins, and Delivery Boys.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• cookie-parser - </span>
                    <span className="font-normal">
                      Used for handling authentication-related cookies.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• CORS - </span>
                    <span className="font-normal">
                      Used to manage cross-origin requests between the frontend
                      and backend.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• nanoid - </span>
                    <span className="font-normal">
                      Used to generate random IDs for food orders.
                    </span>
                  </li>

                  <li>
                    <span className="font-semibold">• dotenv - </span>
                    <span className="font-normal">
                      Used to manage environment variables and sensitive
                      configuration values.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Nodemon - </span>
                    <span className="font-normal">
                      Used during development to automatically restart the
                      backend server when code changes.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="database">
                <h2 className="text-xl font-semibold text-blue-400">
                  Database :-
                </h2>
                <ul className="ml-2 my-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">• MongoDB Atlas - </span>
                    <span className="text-normal">
                      Used as the cloud database for storing users, foods,
                      orders, delivery information, and other application data.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="stylling">
                <h2 className="text-xl font-semibold text-blue-400">
                  Styling :-
                </h2>
                <ul className="ml-2 my-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">• Tailwind CSS - </span>
                    <span className="font-normal">
                      Used for responsive styling and designing the
                      application&apos;s mobile, desktop, and large-screen
                      interfaces.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• GSAP - </span>
                    <span className="font-normal">
                      Used to create interactive UI animations.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Swiper.js - </span>
                    <span className="font-normal">
                      Used to create carousel and slider-based UI sections.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Swiper.js - </span>
                    <span className="font-normal">
                      Used to create carousel and slider-based UI sections.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="External Service">
                <h2 className="text-xl font-semibold text-blue-400">
                  External Services :-
                </h2>
                <ul className="my-2 ml-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">
                      • Firebase Authentication -{" "}
                    </span>
                    <span className="font-normal">
                      Used to implement Google authentication for supported
                      users.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Cloudinary - </span>
                    <span className="font-normal">
                      Used to store food and profile images in cloud storage and
                      use their URLs in the application.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Razorpay - </span>
                    <span className="font-normal">
                      Used to provide online payment functionality for customer
                      orders.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Geoapify - </span>
                    <span className="font-normal">
                      Used for obtaining location-related information such as
                      latitude, longitude, name, state, and pincode.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• Chart.js - </span>
                    <span className="font-normal">
                      Used to visualize Delivery Boy daily, weekly, and monthly
                      earnings.
                    </span>
                  </li>
                </ul>
              </div>
              <div className="Maps and Location">
                <h2 className="text-xl font-semibold text-blue-400">
                  Maps & Location :-
                </h2>
                <ul className="my-2 ml-2 text-lg flex flex-col gap-2">
                  <li>
                    <span className="font-semibold">• Leaflet - </span>
                    <span className="font-normal">
                      Used to display interactive maps for location and delivery
                      tracking.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">• React-Leaflet - </span>
                    <span className="font-normal">
                      Used to integrate Leaflet maps into the React/Next.js
                      application.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">
                      • Browser Geolocation API -{" "}
                    </span>
                    <span className="font-normal">
                      Used with watchPosition() to continuously track the
                      current location of Users and Delivery Boys.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="Three Powerfull User Roles">
            <h2 className="text-2xl font-semibold text-red-500">
              Three Powerful User Roles :-{" "}
            </h2>
            <div className="ml-5 my-2 flex flex-col gap-5">
              <div className="customer">
                <div className="flex items-center gap-2">
                  <FaUserTie size={20} color="yellow" />
                  <h2 className="text-xl font-semibold text-blue-400">
                    Customer
                  </h2>
                </div>

                <div className="ml-5">
                  <h3 className="my-2  text-lg font-semibold text-white/80">
                    Customers Can :
                  </h3>
                  <ul className="list-disc ml-5 text-lg  flex flex-col gap-2 ">
                    <li>Create an account / Login</li>
                    <li>Login with Google</li>
                    <li>Browse restaurant foods</li>
                    <li>View individual food details</li>
                    <li>Zoom food images</li>
                    <li>Add/remove cart items</li>
                    <li>Wishlited the food items</li>
                    <li>Change quantities</li>
                    <li>Save multiple addresses</li>
                    <li>Select an address from the map</li>
                    <li>Place orders</li>
                    <li>Pay using Razorpay</li>
                    <li>Use Cash on Delivery</li>
                    <li>View order history</li>
                    <li>Search orders by food name</li>
                    <li>Request order cancellation</li>
                    <li>Track Delivery Boy in real time</li>
                    <li>Rate food</li>
                    <li>Submit feedback</li>
                    <li>User can manage their profile details</li>
                  </ul>
                </div>
              </div>
              <div className="customer">
                <div className="flex items-center gap-2">
                  <RiAdminFill size={20} color="red" />
                  <h2 className="text-xl font-semibold text-blue-400">
                    Restaurant Admin
                  </h2>
                </div>

                <div className="ml-5">
                  <h3 className="my-2  text-lg font-semibold text-white/80">
                    Admin Can :
                  </h3>

                  <ul className="list-disc ml-5 text-lg  flex flex-col gap-2 ">
                    <li>Control restaurant open/closed status</li>
                    <li>Manage profile</li>
                    <li>Add food</li>
                    <li>Edit food</li>
                    <li>Delete food</li>
                    <li>Manage orders</li>
                    <li>Update order status</li>
                    <li>Approve/reject cancellation requests</li>
                    <li>View complete order history</li>
                    <li>Search orders by Order ID/customer name</li>
                    <li>Place orders</li>
                    <li>Pay using Razorpay</li>
                    <li>Use Cash on Delivery</li>
                    <li>View order history</li>
                    <li>Search orders by food name</li>
                    <li>Receive real-time new-order notifications</li>
                  </ul>
                </div>
              </div>
              <div className="customer">
                <div className="flex items-center gap-2">
                  <TbTruckDelivery size={20} color="orange" />
                  <h2 className="text-xl font-semibold text-blue-400">
                    Delivery Boy
                  </h2>
                </div>

                <div className="ml-5">
                  <h3 className="my-2  text-lg font-semibold text-white/80">
                    Delivery Boys Can :
                  </h3>
                  <ul className="list-disc ml-5 text-lg  flex flex-col gap-2 ">
                    <li>View available orders</li>
                    <li>Accept/decline orders</li>
                    <li>View completed orders</li>
                    <li>Track earnings</li>
                    <li>View Total earnings</li>
                    <li>View daily earnings</li>
                    <li>View weekly earnings</li>
                    <li>View monthly earnings</li>
                    <li>Update profile details</li>
                    <li>View complete order history</li>
                    <li>Receive new delivery assignments in real time</li>
                    <li>
                      Can track real time delivery route on map current location
                      to delivery location
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="Architecture Section">
            <h2 className="text-2xl font-semibold text-red-500">
              Architecture Section
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza follows a full-stack architecture connecting
                Customers, Admins, and Delivery Boys through a Next.js frontend.
                <strong className="text-red-400">
                  Redux Toolkit and Redux Persist
                </strong>{" "}
                manage application state, while Node.js and Express.js handle
                REST APIs and business logic. MongoDB Atlas stores users, foods,
                orders, Delivery Boys, reviews, and earnings. Socket.IO enables
                real-time order and delivery communication, while external
                services such as Razorpay, Firebase, Cloudinary, Geoapify, and
                Nodemailer provide payments, authentication, image storage,
                location services, and email notifications.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790665887/Architecture_System_ckxykn.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Complete Order Journey">
            <h2 className="text-2xl font-semibold text-red-500">
              Complete Order Journey
            </h2>
            <div className="ml-5">
              <p className="tracking-wide text-lg my-2">
                The complete FoodPlaza order workflow integrates cart
                management, payment processing, real-time Socket.IO
                communication, location-based delivery assignment,{" "}
                <strong className="text-red-400">
                  live map tracking, and OTP-based delivery verification
                </strong>
                . Each role receives real-time updates throughout the order
                lifecycle.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790606002/Complete_Order_Journey_h5w8ke.png"
                  }
                  alt="loading.."
                  quality={100}
                  width={1152}
                  height={768}
                  priority={false}
                  className=" rounded-md shadow-2xl my-5"
                />
              </div>
            </div>
          </div>
          <div className="Real-Time Architechture">
            <h2 className="text-2xl font-semibold text-red-500">
              Real-Time Architecture
            </h2>
            <div className="ml-5">
              <p className="tracking-wide text-lg my-2">
                FoodPlaza uses Socket.IO to provide real-time communication
                between Customers, Admins, and Delivery Boys. Order creation,
                delivery acceptance, order status, delivery completion, and shop
                availability updates are synchronized instantly across the
                platform without requiring page refreshes.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790606699/Real_Time_Architechture_yg4ymz.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  quality={100}
                  priority={false}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Live Delivery Tracking">
            <h2 className="text-2xl font-semibold text-red-500">
              Live Delivery Tracking
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza implements a real-time delivery tracking system using
                the Browser Geolocation API,{" "}
                <strong className="text-red-400">watchPosition()</strong>,
                MongoDB, Socket.IO, Geoapify, Leaflet, and React-Leaflet. The
                Delivery Boy&apos;s location is continuously updated and
                synchronized with the backend, allowing customers to view the
                Delivery Boy&apos;s live location and route on an interactive
                map throughout the delivery process.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790607194/Live_Tracking_ign8cx.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  quality={100}
                  priority={false}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Smart Delivery Assignment">
            <h2 className="text-2xl font-semibold text-red-500">
              Smart Delivery Assignment
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza uses a location-aware delivery assignment system to
                efficiently identify available Delivery Boys when an order moves
                to Out for Delivery. The system searches for Delivery Boys
                within a <strong>5 km range</strong>, filters out those
                currently handling orders using a{" "}
                <strong className="text-red-400">Set for O(1)</strong>{" "}
                membership checks, identifies available riders, creates the
                delivery assignment, and broadcasts it in real time using
                Socket.IO. The assignment ID is then stored with the order for
                tracking and future reference.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790661052/Smart_Delivery_Assignment_de7gtm.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Secure Delivery Verification">
            <h2 className="text-2xl font-semibold text-red-500">
              Secure Delivery Verification
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza uses an OTP-based delivery verification system to
                ensure that an order is confirmed only after successful customer
                verification. When the Delivery Boy{" "}
                <strong>marks an order as delivered</strong>, a 6-digit OTP is
                generated, stored with a{" "}
                <strong className="text-red-400">5-minute expiry</strong>, and
                sent to the customer via Nodemailer. The customer enters the
                OTP, and after successful validation, the order is marked as
                completed. The workflow also includes loading states,
                validation, disabled actions, and OTP resend functionality.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790661370/Secure_Delivery_Verfication_dhpche.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Authentication System">
            <h2 className="text-2xl font-semibold text-red-500">
              Authentication System
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza implements a role-based authentication system for
                <strong>Admins, Customers, and Delivery Boys</strong>. Users can
                authenticate using email and password with{" "}
                <strong>bcrypt</strong> verification or through
                <strong>Google Authentication using Firebase</strong>. After
                successful authentication, the user&apos;s current{" "}
                <strong>location is stored for location-based features</strong>.
                The platform also provides a password recovery workflow where
                users receive an OTP, verify it, and set a new password.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790662131/Authentication_System_xwhlgw.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Food Experience">
            <h2 className="text-2xl font-semibold text-red-500">
              Food Experience
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza provides a rich food-detail experience where customers
                can explore food images, detailed descriptions, customer
                reviews, and <strong>related food recommendations</strong>. A
                custom <strong className="text-red-400">image magnifier</strong>{" "}
                allows users to inspect food images closely with responsive lens
                sizing for mobile devices. The page also includes a convenient
                side cart for managing selected items, while up to three related
                foods can be added directly to the cart for a seamless ordering
                experience.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790662520/Food_Experience_qiu4xm.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="High Performance Cart Experience">
            <h2 className="text-2xl font-semibold text-red-500">
              High Performance Cart Experience
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza provides a dynamic cart system where users can add or
                remove food items, increase or decrease quantities, and{" "}
                <strong>
                  see updated prices without a complete page reload
                </strong>
                . To optimize frequent cart interactions,{" "}
                <strong className="text-red-400">debouncing</strong> is used to
                reduce repeated API calls by processing the final action after a
                short delay. This keeps cart updates efficient while maintaining
                a responsive side-cart and pricing experience.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790662994/High_Performance_Cart_Experience_iqkpdp.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Payment System">
            <h2 className="text-2xl font-semibold text-red-500">
              Payment System
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza supports two payment methods:{" "}
                <strong>Cash on Delivery and Razorpay Online Payment</strong>.
                During checkout, customers can select their preferred payment
                option. COD orders proceed directly to order confirmation and
                delivery, while Razorpay handles online payment before the order
                is confirmed. Both workflows ultimately connect to the same
                order-processing and delivery system.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790664788/Payment_System_m6suto.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Restaurant Control System">
            <h2 className="text-2xl font-semibold text-red-500">
              Restaurant Control System
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza provides an Admin-controlled restaurant availability
                system that allows the restaurant to switch between{" "}
                <strong className="text-red-400">Open and Closed states</strong>
                . When open, customers can browse the menu, add items, and place
                orders normally. When closed, the customer interface{" "}
                <strong>displays the Shop Closed state</strong>, checkout and
                order placement are <strong>blocked</strong>, and customers
                receive a notification. The restaurant status is stored
                independently, so it remains controlled by the Admin rather than
                depending on whether the Admin is currently logged in.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790665288/Restaurant_Controll_System_onxo27.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Delievry Boy Analytics">
            <h2 className="text-2xl font-semibold text-red-500">
              Delivery Boy Analytics
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza provides a dedicated earnings analytics dashboard for
                Delivery Boys using{" "}
                <strong className="text-red-400">Chart.js</strong>. The
                dashboard presents Today&apos;s Earnings through a{" "}
                <strong>bar chart</strong>, Weekly Earnings through a{" "}
                <strong>seven-day line chart</strong>, and Monthly Earnings
                through a monthly <strong>bar chart</strong>. It also includes
                summary cards for Today&apos;s Earnings and Total Earnings,
                giving Delivery Boys a clear view of their earnings and
                performance across different time periods.
              </p>
              <div className="flex justify-center">
                <Image
                  src={
                    "https://res.cloudinary.com/drdu5lnsq/image/upload/v1790665556/DeliveryBoy_Analytics_icqsgf.png"
                  }
                  alt="loading.."
                  width={1152}
                  height={768}
                  priority={false}
                  quality={100}
                  className="rounded-md shadow-2xl"
                />
              </div>
            </div>
          </div>
          <div className="Engineering Highlights">
            <h2 className="text-2xl font-semibold text-red-500">
              Engineering Highlights
            </h2>
            <div className="ml-5">
              <p className="text-lg tracking-wide my-2">
                FoodPlaza goes beyond a traditional frontend implementation by
                combining secure authentication, real-time communication,
                location-based services, performance optimization, and business
                logic into a complete full-stack system. The project implements
                role-based access control, JWT and bcrypt-based authentication,
                persistent Redux state, Socket.IO real-time synchronization,
                live location tracking, and a 5 km delivery assignment mechanism
                with O(1) availability checks using Set. It also includes
                debounced cart operations, OTP-based delivery verification with
                expiry, Razorpay payments, Cloudinary image management,
                MongoDB/Mongoose data handling, and responsive interfaces across
                devices.
              </p>
              <ul className="list-disc text-lg my-2 ml-5">
                <li>Role-based authentication & authorization</li>
                <li>JWT authentication</li>
                <li>bcrypt password verification</li>
                <li>Redux state persistence</li>
                <li>Real-time Socket.IO communication</li>
                <li>Browser-based live location tracking</li>
                <li>5 km delivery assignment logic</li>
                <li>O(1) Delivery Boy availability lookup using Set</li>
                <li>Debounced cart operations</li>
                <li>OTP-based delivery verification</li>
                <li>OTP expiry mechanism</li>
                <li>Razorpay integration</li>
                <li>Cloudinary image management</li>
                <li>MongoDB/Mongoose data management</li>
                <li>Responsive mobile and desktop UI</li>
                <li>Real-time UI state synchronization</li>
              </ul>
            </div>
          </div>
          <div className="Github Link">
            <h2 className="text-2xl font-semibold text-red-500">Github Link</h2>
            <div className="ml-5 my-2">
              <Link
                href={
                  "https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/MERN%20Stack%20Project/foodplaza_using_next_js"
                }
                target="_blank"
                className="text-blue-500"
              >
                See Project on GitHub
              </Link>
            </div>
          </div>
          <div className="Project Documentation">
            <h2 className="text-2xl font-semibold text-red-500">
              Project Documentaion
            </h2>
            <div className="ml-5 my-2">
              <Link
                href={"/Project Documentaion/FoodPlaza/FoodPlaza Doc.pdf"}
                target="_blank"
                className="text-blue-500"
              >
                See Project Documentation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPlaza;

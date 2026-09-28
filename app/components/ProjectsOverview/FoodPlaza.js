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
        <div className="project-documentaion my-5">
          <div className="project-description">
            <h2 className="text-2xl font-semibold text-red-500">
              What is FoodPlaza ?
            </h2>
            <p className="tracking-wide my-2 ml-5 text-lg">
              **FoodPlaza** is a full-stack restaurant-owned food delivery
              platform built with **Next.js, Node.js, Express, and MongoDB**. It
              connects Customers, Admins, and Delivery Boys through dedicated
              role-based workflows. Customers can browse food, manage carts,
              place orders using **Razorpay or Cash on Delivery**, track
              deliveries in real time, and submit reviews. The platform features
              **Socket.IO real-time updates, live location tracking, 5 km
              delivery assignment, OTP-based delivery verification, Google
              authentication, Cloudinary image management, and delivery earnings
              analytics**. The Admin Panel provides complete restaurant and
              order management, while the Delivery Boy Panel handles
              assignments, completed orders, and earnings.
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
                      application's mobile, desktop, and large-screen
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
                <h2 className="text-xl font-semibold text-blue-400">
                  Customer
                </h2>
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
                <h2 className="text-xl font-semibold text-blue-400">
                  Restaurant Admin
                </h2>
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
                <h2 className="text-xl font-semibold text-blue-400">
                  Delivery Boy
                </h2>
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
          <div className="Complete Order Journey">
            <h2 className="text-2xl font-semibold text-red-500">
              Complete Order Journey
            </h2>
            <div className="ml-5">
              <p className="tracking-wide text-lg my-2">
                The complete FoodPlaza order workflow integrates cart
                management, payment processing, real-time Socket.IO
                communication, location-based delivery assignment, live map
                tracking, and OTP-based delivery verification. Each role
                receives real-time updates throughout the order lifecycle.
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
        </div>
      </div>
    </div>
  );
};

export default FoodPlaza;

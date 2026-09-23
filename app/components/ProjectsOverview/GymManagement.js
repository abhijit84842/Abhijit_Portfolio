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

const GymManagement = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-2 2xl:p-10">
      <h1 className="font-semibold flex justify-center text-xl my-5 lg:text-4xl 2xl:flex 2xl:justify-center 2xl:text-5xl 2xl:mb-10">
        Gym Management System Using PHP
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
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790148159/gym_1_zcf5hx.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790148160/gym_2_toeqh0.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790148170/gym_3_txgvng.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790148242/gym_4_iqsitf.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170122/gym_5_kupzgj.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170122/gym_6_hozzmg.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170473/gym_7_hln506.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170123/gym_8_wtly7p.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170126/gym_9_nkmhta.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170128/gym_10_smzymu.png"
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
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170188/gym_1_Small_bsihd4.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170189/gym_2_Small_hh72n0.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170192/gym_3_Small_aq3owr.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170193/gym_4_Small_l8mngx.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170195/gym_5_Small_uu9iml.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170196/gym_6_Small_evnvtd.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170198/gym_7_Small_xss8zg.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170199/gym_8_Small_bq1wl1.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170201/gym_9_Small_khfgzd.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
              quality={100}
              priority={false}
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="https://res.cloudinary.com/drdu5lnsq/image/upload/v1790170202/gym_10_Small_ta7gko.png"
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
              The <b>Gym Management System</b> is a dynamic web application
              designed to streamline the management of a gym, including
              trainers, gym workers, and students. Developed using{" "}
              <b>PHP, HTML, CSS, and JavaScript,</b> this system provides an
              efficient way for administrators to handle gym-related operations.{" "}
              <b>The MySQL database</b> is used for securely storing all
              records, ensuring smooth data management.
            </p>
            <p>
              The system includes an <b>admin dashboard</b> where only
              authenticated administrators can log in using a secure{" "}
              <b>user ID and password.</b>
              Admins have full control over the management of{" "}
              <b>trainers, gym workers, and students</b>—they can{" "}
              <b>add, update, and delete</b> records as needed. The system uses{" "}
              <b>SweetAlert</b> to display user-friendly confirmation messages
              when adding, updating, or deleting records, enhancing the overall
              experience.
            </p>
            <p>
              The <b>landing page</b> is visually engaging, featuring a{" "}
              <b>Bootstrap Carousel Slider</b> to showcase images of the gym and
              services. Additionally, the landing page includes a{" "}
              <b>blog section</b> and a packages section to display gym-related
              articles and available membership plans. The project runs on a
              local <b>XAMPP server,</b> making it easy to test and deploy.
            </p>
            <p>
              This <b>Gym Management System</b> simplifies gym administration,
              ensuring efficient record-keeping, data security, and an intuitive
              interface for managing gym-related activities.
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
              Trainer Management :- Admin can add, update, and delete gym
              Trainers.
            </li>
            <li className="ml-10">
              Gym Worker Management :- Admin can add,update and delete gym
              workers.
            </li>
            <li className="ml-10">
              Student Management :- Admin can add,update and delete student
              records
            </li>
            <li className="ml-10">
              View Records :- Admin can see Trainers, Students and Workers
              details.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              3. Landing Page with Carousel
            </h3>
            <li className="ml-10">
              Features a Bootstrap Carousel Slider on the landing page for a
              dynamic UI.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">4. Blog Section</h3>
            <li className="ml-10">
              Displays gym-related articles or fitness tips.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">5. Packages Section</h3>
            <li className="ml-10">Showcases different gym membership plans.</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              6. User-Friendly Alerts
            </h3>
            <li className="ml-10">
              SweetAlert used for confirmation pop-ups on adding, updating, and
              deleting records.
            </li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">
              7. Database Management
            </h3>
            <li className="ml-10">Uses MySQL to securely store all data.</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">8. Local Hosting</h3>
            <li className="ml-10">
              The project is deployed and tested using XAMPP Server.
            </li>
          </ul>
        </div>
        <div className="technology">
          <h2 className="font-semibold text-red-500 my-5 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            Technology Use :-
          </h2>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">Frontend:</h3>
            <li className="ml-10">HTML, CSS, JavaScript, Bootstrap</li>
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
            <h3 className="text-lg font-semibold mb-2">Server:</h3>
            <li className="ml-10">XAMPP (Apache, MySQL, PHP)</li>
          </ul>
          <ul className="list-disc mt-2 ml-5 2xl:ml-10">
            <h3 className="text-lg font-semibold mb-2">UI Enhancements:</h3>
            <li className="ml-10">SweetAlert for better user interaction</li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="font-semibold text-red-500 my-2 text-xl 2xl:text-2xl  2xl:py-2 2xl:pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Gym_Management_System_PHP"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GymManagement;

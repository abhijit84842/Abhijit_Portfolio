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
import TravelAgencyVideo from "./OverviewVideo/TravelAgencyVideo";

const TravelAgency = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        Animated Travel Agency Website
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
          //   autoplay={{
          //     delay: 3000,
          //     disableOnInteraction: false,
          //   }}
          loop={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className={styles.mySwiper2}
        >
          <SwiperSlide>
            <TravelAgencyVideo />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld5.PNG"
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
              src="/Overview/frontendprojects/travelagency/viewworld6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/travelagency/viewworld5.PNG"
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
              ViewWorld Travel Agency is a visually stunning and interactive
              travel booking platform built using React.js. This project is
              designed to provide an engaging and smooth user experience through
              animations and dynamic content. The website showcases breathtaking
              destinations with an immersive design that captivates users from
              the first interaction. The landing page introduces users to the
              agency&apos;s services with a sleek and modern UI, incorporating
              GSAP animations and smooth scroll effects powered by
              ScrollTrigger. The gallery section beautifully displays
              high-quality images of different travel destinations, enhanced
              with hover scaling effects to add interactivity. The &quot;Book Now&quot;
              section allows users to easily make travel reservations using a
              well-validated form built with React Hook Form. The &quot;Reviews&quot;
              section features animated customer testimonials, creating a
              dynamic and trustworthy feel. The &quot;Contact Us&quot; section ensures
              easy communication between the users and the agency, while the
              footer adds a polished finishing touch with essential links and
              information. This project is an excellent showcase of modern
              front-end development techniques, blending animation,
              interactivity, and responsive design to create a seamless travel
              booking experience.
            </p>
          </div>
        </div>
        <div className="project-features">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Key Features :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              1. GSAP Animations & ScrollTrigger
            </h3>
            <li className="ml-10">
              Smooth scrolling, entrance animations, and interactive motion
              effects.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">2. Landing Page</h3>
            <li className="ml-10">
              Eye-catching hero section with engaging animations.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">3. Gallery Section</h3>
            <li className="ml-10">
              High-quality images with hover scale effects for a visually
              appealing experience.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">4. Book Now Section</h3>
            <li className="ml-10">
              A fully functional booking form with validation using React Hook
              Form.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              5. Animated Review Section
            </h3>
            <li className="ml-10">
              Customer testimonials displayed with beautiful animations.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. Contact Us Section
            </h3>
            <li className="ml-10">
              Simple and effective form to facilitate user inquiries.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">7. Smooth Navigation</h3>
            <li className="ml-10">
              Implemented with React Router DOM for seamless page transitions.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              8. Beautiful Footer Section
            </h3>
            <li className="ml-10">
              A well-structured footer with essential links and company details.
            </li>
          </ul>
        </div>

        <div className="technology">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            Technology Use :-
          </h2>
          <ul className="ml-10 list-disc mt-2">
            <li className="ml-10">
              <span className="text-xl">React.js -</span> For building a dynamic
              and interactive user interface.
            </li>
            <li className="ml-10">
              <span className="text-xl">
                GSAP (GreenSock Animation Platform) -
              </span>{" "}
              For creating smooth animations and interactive elements.
            </li>
            <li className="ml-10">
              <span className="text-xl ">ScrollTrigger -</span> Enables
              animation triggers based on scroll position.
            </li>
            <li className="ml-10">
              <span className="text-xl">Swiper.js -</span> Adds a smooth slider
              effect for the review section.
            </li>
            <li className="ml-10">
              <span className="text-xl">React Router DOM -</span> For handling
              navigation and routing.
            </li>
            <li className="ml-10">
              <span className="text-xl">CSS3 -</span> For clean, modern,
              and responsive styling.
            </li>
            <li className="ml-10">
              <span className="text-xl">React Hook Form -</span> For form
              validation and input management.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Web_Development_Projects_2024/tree/master/Frontend%20Project(React%20Js)/Travel%20Agency%20Using%20React"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelAgency;

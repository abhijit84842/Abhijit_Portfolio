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

const Portfolio = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container p-10">
      <h1 className="flex justify-center text-5xl font-semibold mb-10">
        Animated Portfolio Using Next Js
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
              src="/Overview/frontendprojects/portfolioimg/portfolio1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio7.PNG"
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
              src="/Overview/frontendprojects/portfolioimg/portfolio1.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio2.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio3.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio4.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio5.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio6.PNG"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/frontendprojects/portfolioimg/portfolio7.PNG"
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
              This animated portfolio website is a high-performance, visually
              captivating platform built with Next.js and GSAP animations to
              create a seamless and interactive user experience. The website
              showcases projects with dynamic scroll-based effects powered by
              GSAP ScrollTrigger, enhancing user engagement through smooth
              animations and transitions. The project showcase section is built
              using Swiper JS, allowing users to browse through projects with an
              intuitive and sleek slider. Each project is displayed with
              high-quality images and detailed descriptions, ensuring a
              professional and interactive portfolio presentation. For styling,
              Tailwind CSS is used to maintain a responsive and visually
              appealing layout, ensuring smooth adaptability across all screen
              sizes. The site architecture follows the MVC
              (Model-View-Controller) structure, ensuring clean, maintainable,
              and production-grade code. The contact form is powered by React
              Hook Form, providing seamless validation and user-friendly
              interactions. Additionally, React Player is integrated to showcase
              video content within the portfolio, enhancing the multimedia
              experience. The project is deployed on Vercel, ensuring fast
              loading speeds, server-side rendering, and overall optimization
              for a production-ready environment.
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
              Smooth entrance animations and scroll-based interactive effects.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              2. Swiper JS for Project Showcase
            </h3>
            <li className="ml-10">
              A sleek slider displaying projects with images and descriptions.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              3. Responsive UI with Tailwind CSS
            </h3>
            <li className="ml-10">
              Ensures a modern and mobile-friendly design.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              4. React Hook Form for Contact Form Validation
            </h3>
            <li className="ml-10">
              Provides seamless and user-friendly form handling.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              5. React Player Integration
            </h3>
            <li className="ml-10">
              Enables embedding and playing project-related videos.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              6. React Icons for Enhanced UI
            </h3>
            <li className="ml-10">
              Adds modern and interactive icons to the interface.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              7. Optimized with MVC Structure
            </h3>
            <li className="ml-10">
              Ensures scalable and maintainable code organization.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              8. Production-Grade Code
            </h3>
            <li className="ml-10">
              Follows best practices for clean and efficient development.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              9. SEO-Friendly 
            </h3>
            <li className="ml-10">
            Optimized for search engines to enhance discoverability and ranking.
            </li>
          </ul>
          <ul className="ml-10 list-disc mt-2">
            <h3 className="text-lg font-semibold mb-2">
              10. Deployed on Vercel
            </h3>
            <li className="ml-10">
              Provides fast performance, server-side rendering, and a reliable
              hosting solution.
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
              <span className="text-xl">Next.js - </span> High-performance React framework with SSR and
              optimization.
            </li>
            <li className="ml-10">
            <span className="text-xl">Swiper JS - </span>Creates interactive carousels and sliders for project
              showcases.
            </li>
            <li className="ml-10">
            <span className="text-xl">Tailwind CSS - </span>Ensures a clean, modern, and responsive design.
            </li>
            <li className="ml-10">
            <span className="text-xl">React Hook Form - </span>Handles form validation efficiently.
            </li>
            <li className="ml-10">
            <span className="text-xl">React Player - </span>Embeds and plays videos within the portfolio.
            </li>
            <li className="ml-10">
            <span className="text-xl">React Icons - </span>Adds intuitive and visually appealing icons.
            </li>
            <li className="ml-10">
            <span className="text-xl">React DOM - </span>Enhances routing and UI interactions.
            </li>
            <li className="ml-10">
            <span className="text-xl">Vercel Deployment - </span>Ensures fast performance and easy hosting.
            </li>
          </ul>
        </div>
        <div className="github-link">
          <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
            GitHub Link :-
          </h2>
          <Link
            className="ml-10 text-blue-500"
            href="https://github.com/abhijit84842/Abhijit_Portfolio"
          >
            See Project on gitHub
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

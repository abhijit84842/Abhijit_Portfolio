"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./Projectoverview.module.css"

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";


const CitySling = () => {
     const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="main-container bg-zinc-900 m-10 rounded-md">
    <h1 className="flex justify-center text-3xl font-semibold p-2">
      City Sling E-com Website Overview
    </h1>
    <div className="sub-container px-10 mt-10">
      <div className="project-images-box bg-zinc-700 rounded-lg">
        <h2 className="text-2xl font-semibold text-red-500 py-2 pl-5">
          Project Images
        </h2>

        <Swiper
          styles={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className={styles.mySwiper2}
        >
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview1.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview2.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
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
              src="/Overview/fullstackprojects/cityoverview1.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview2.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
          <SwiperSlide className={styles.slides}>
            <Image
              src="/Overview/fullstackprojects/cityoverview3.png"
              alt="loading.."
              loading="lazy"
              layout="fill"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  </div>
  )
}

export default CitySling
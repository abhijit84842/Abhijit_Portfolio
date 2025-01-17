"use client";
import Link from "next/link";
import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import styles from "./ProjectShow.module.css"
// import required modules
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';

const FrontendProjectsShow = () => {
  return (
    <div className="sub-container bg-slate-800 p-5 my-10 rounded-lg">
      <div className="mernstack-projects-box">
        <h2 className="mt-5 text-3xl mb-5 text-red-500 font-semibold">
          Frontend Projects
        </h2>
      
          <Swiper
             slidesPerView={3}
             spaceBetween={30}
             freeMode={true}
             pagination={{
               clickable: true,
             }}
            //  autoplay={{
            //   delay:4500,
            //   disableOnInteraction:false
            //  }}
            //  loop={true}
             modules={[FreeMode, Pagination , Autoplay]}
             className={styles.firstSwiper}
          >
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <img
                  className="w-[20rem]"
                  src="/ProjectShow/TravelAgency.png"
                  alt="loading.."
                />
                <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                  View World Travel Agency
                </p>
                <p className="text-black">
                  The project features smooth animations using GSAP and Swiper
                  JS for interactive sliders, providing an engaging user
                  experience. The website incorporates essential tools like
                  react-hook-form for form handling and react-router-dom for
                  navigation.{" "}
                  <span>
                    <Link className="text-blue-700" href={""}>
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <img
                  className="w-[20rem]"
                  src="/ProjectShow/Wear Collections Img.png"
                  alt="loading.."
                />
                <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                  Wear Collections E-com
                </p>
                <p className="text-black ">
                  A e-com website developed using React Js,HTML,CSS and
                  Javascript.Designed with a focus on smooth user experience.
                  This project highlights my skills in creating interactive,
                  user-friendly web applications.
                  <span>
                    <Link className="text-blue-700" href={""}>
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <img
                  className="w-[20rem]"
                  src="/ProjectShow/Myntra Clone.png"
                  alt="loading.."
                />
                <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                  Myntra Clone
                </p>
                <p className="text-black ">
                  The Myntra Clone project is a simplified replica of the
                  popular e-commerce platform, built using React.js, HTML, and
                  CSS. This application features a dynamic product catalog
                  powered by dummy JSON data.
                  <span>
                    <Link className="text-blue-700" href={""}>
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <img
                  className="w-[20rem]"
                  src="/ProjectShow/Myntra Clone.png"
                  alt="loading.."
                />
                <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                  Myntra Clone
                </p>
                <p className="text-black ">
                  The Myntra Clone project is a simplified replica of the
                  popular e-commerce platform, built using React.js, HTML, and
                  CSS. This application features a dynamic product catalog
                  powered by dummy JSON data.
                  <span>
                    <Link className="text-blue-700" href={""}>
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="crad bg-slate-200 w-[20rem] p-4 rounded-lg h-[35rem]">
                <img
                  className="w-[20rem]"
                  src="/ProjectShow/Myntra Clone.png"
                  alt="loading.."
                />
                <p className="text-red-500 text-xl mt-2 font-semibold mb-2 mt-3">
                  Myntra Clone
                </p>
                <p className="text-black ">
                  The Myntra Clone project is a simplified replica of the
                  popular e-commerce platform, built using React.js, HTML, and
                  CSS. This application features a dynamic product catalog
                  powered by dummy JSON data.
                  <span>
                    <Link className="text-blue-700" href={""}>
                      See more..
                    </Link>
                  </span>
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
  );
};

export default FrontendProjectsShow;

"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";

const MyFlagshipProject = () => {
  // check screen sizes
  const [isMobileMode, setIsMobileMode] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileMode(window.innerWidth < 640);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.addEventListener("resize", checkScreenSize);
    };
  }, []);
  return (
    <div className="flagship-main-container mx-2 my-10 2xl:my-20 2xl:mx-10">
      <div className="flagship-sub-container">
        <h1 className="text-xl text-[#0B44FF] font-semibold my-5 lg:text-2xl 2xl:text-2xl">
          My Flagship Projects
        </h1>
        <div className="flagship-project-box bg-[#18181B] p-3">
          <h2 className="ml-5 my-5  text-lg font-semibold text-[#FB2A2A] lg:text-xl 2xl:text-xl lg:ml-10 2xl:ml-10 lg:my-10 2xl:my-10">
            Project 1
          </h2>

          <div className="show-img-of-project w-full h-full">
            {isMobileMode ? (
              <Image
                src={
                  "https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933258/foodPlaza_Flagship_Banner_Mobile_xfj5tx.png"
                }
                width={300}
                height={300}
                quality={100}
                alt="loading.."
                loading="lazy"
                className="w-full h-auto  object-contain rounded-md my-10 "
              />
            ) : (
              <Image
                src={
                  "https://res.cloudinary.com/drdu5lnsq/image/upload/v1788933259/foodPlaza_Flagship_Banner_Desktop_x3vzoi.png"
                }
                width={1920}
                height={700}
                quality={100}
                alt="loading.."
                loading="lazy"
                className="w-full h-auto  object-contain rounded-md my-10 "
              />
            )}

            <h2 className="text-2xl ml-2 my-3 font-semibold lg:ml-10 2xl:ml-10">
              Food Plaza — Full-Stack Food Delivery Platform
            </h2>
            <div className="ml-2 flex flex-col gap-5 2xl:flex-row  2xl:justify-betwen 2xl:gap-[20rem] 2xl:items-center lg:flex-row  lg:justify-between lg:gap-[20rem] lg:items-center lg:ml-10 2xl:ml-10">
              <p className="text-sm/7 lg:text-lg/8 2xl:text-lg/8 tracking-wide text-white/80">
                FoodPlaza — a production-style full-stack food delivery
                ecosystem built with Next.js, Node.js, Express.js, and MongoDB.
                The platform goes beyond basic food ordering by implementing
                customer ordering & reviews, cart and checkout, real-time order
                tracking, delivery-partner workflows, earnings analytics, order
                management, and role-based access, creating a complete
                multi-role delivery experience from restaurant → customer →
                delivery partner.
              </p>

              <div className="flex gap-2 items-center text-lg lg:text-xl 2xl:text-xl  w-full">
                <FaLink />
                <Link href={"#"} className="text-amber-400">
                  Visit Project...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFlagshipProject;

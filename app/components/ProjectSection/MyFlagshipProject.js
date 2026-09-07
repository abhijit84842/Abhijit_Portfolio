import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLink } from "react-icons/fa";

const MyFlagshipProject = () => {
  return (
    <div className="flagship-main-container mx-2 my-10 2xl:my-20 2xl:mx-10">
      <div className="flagship-sub-container">
        <h1 className="text-xl text-[#0B44FF] font-semibold my-5 2xl:text-2xl">
          My Flagship Project
        </h1>
        <div className="flagship-project-box bg-[#18181B] p-3">
          <h2 className="ml-10  text-lg font-semibold text-[#FB2A2A]">
            Project 1
          </h2>
          <h2 className="text-2xl ml-10 my-3 font-semibold">
            Food Plaza — MERN-Stack Food Delivery Platform
          </h2>
          <div className="show-img-of-project">
            <Image
              src={"/Projects/FoodPlaza Flagship Banner.png"}
              width={1920}
              height={700}
              quality={100}
              alt="loading.."
              loading="lazy"
              className="w-full h-auto object-contain rounded-md my-10"
            />

            <div className="flex justify-between gap-[20rem]">
              
                <p className="text-lg">
                  FoodPlaza — a production-style full-stack food delivery
                  ecosystem built with Next.js, Node.js, Express.js, and
                  MongoDB. The platform goes beyond basic food ordering by
                  implementing customer ordering & reviews, cart and checkout,
                  real-time order tracking, delivery-partner workflows, earnings
                  analytics, order management, and role-based access, creating a
                  complete multi-role delivery experience from restaurant →
                  customer → delivery partner.
                </p>
             
              <div className="flex gap-2 items-center text-xl  w-full">
                <FaLink />
                <Link href={"#"} className="text-amber-400">Visit Project</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFlagshipProject;

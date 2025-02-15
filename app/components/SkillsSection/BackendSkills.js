import Image from "next/image";
import React from "react";

const BackendSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-2 my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">Backend Technology</h3>


      <div className="nodejs  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="python p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/nodejsskills.png"
            alt="loading..."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">Node Js</p>
        </div>
        <div className="express-js p-2 flex flex-col items-center gap-8">
          <Image
            src="/Skills/expressskills.png"
            alt="loading..."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">Express Js</p>
        </div>
        <div className="jwt-auth p-2 flex flex-col items-center gap-7">
          <Image
            src="/Skills/jwtskills.png"
            alt="loading..."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">JWT</p>
        </div>
        <div className="socket-io p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/socketskills.png"
            alt="loading..."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">Socket.Io</p>
        </div>
        <div className="mongoDb-aggregation p-2 flex flex-col items-center gap-7 ">
          <Image
            src="/Skills/aggregationskills.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-sm font-semibold">
            Aggregation Pipeline
          </p>
        </div>
      </div>



      <div className="nodejs hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="python p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/nodejsskills.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Node Js</p>
        </div>
        <div className="express-js p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/expressskills.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Express Js</p>
        </div>
        <div className="jwt-auth p-5 flex flex-col items-center gap-7">
          <Image
            src="/Skills/jwtskills.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">JWT</p>
        </div>
        <div className="socket-io p-5 flex flex-col items-center gap-7">
          <Image
            src="/Skills/socketskills.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Socket.Io</p>
        </div>
        <div className="mongoDb-aggregation p-5 flex flex-col items-center gap-9 ">
          <Image
            src="/Skills/aggregationskills.png"
            alt="loading..."
            loading="lazy"
            width={100}
            height={100}
          />

          <p className="text-white text-lg font-semibold">
            Aggregation Pipeline
          </p>
        </div>
      </div>
    </div>
  );
};

export default BackendSkills;

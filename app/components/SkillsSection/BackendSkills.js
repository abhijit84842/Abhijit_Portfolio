import Image from "next/image";
import React from "react";

const BackendSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
      <h3 className="text-2xl text-white font-semibold">Backend Technology</h3>
      <div className="nodejs  flex justify-start gap-20 mt-5">
        <div className="python p-5 flex flex-col items-center gap-5">
          <Image
            src="/skills/node js 1.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Node Js</p>
        </div>
        <div className="express-js p-5 flex flex-col items-center gap-8">
          <Image
            src="/skills/express 1.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Express Js</p>
        </div>
        <div className="jwt-auth p-5 flex flex-col items-center gap-7">
          <Image
            src="/skills/jwt 1.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">JWT</p>
        </div>
        <div className="socket-io p-5 flex flex-col items-center gap-7">
          <Image
            src="/skills/socket.png"
            alt="loading..."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Socket.Io</p>
        </div>
        <div className="mongoDb-aggregation p-5 flex flex-col items-center gap-9 ">
          <Image
            src="/skills/aggregation.png"
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

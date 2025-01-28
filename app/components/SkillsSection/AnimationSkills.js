import Image from "next/image";
import React from "react";

const AnimationSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5  mb-10 mx-5 rounded-lg">
      <h3 className="text-2xl text-white font-semibold">Animation</h3>
      <div className="prolang  flex justify-start gap-20 mt-5">
        <div className="gsap  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/gsapskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">GSAP</p>
        </div>
        <div className="swiper w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
          <Image
            src="/Skills/swiperskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Swiper Js</p>
        </div>
        <div className="canva w-[8rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8 ">
          <Image
            src="/Skills/scrollskills.png"
            alt="loading.."
            loading="lazy"
            width={100}
            height={100}
          />

          <p className="text-white text-lg font-semibold">Scroll Trigger</p>
        </div>
      </div>
    </div>
  );
};

export default AnimationSkills;

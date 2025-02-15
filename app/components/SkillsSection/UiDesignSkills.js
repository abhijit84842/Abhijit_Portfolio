import Image from "next/image";
import React from "react";

const UiDesignSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-2  my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-2 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">
        UI Design
      </h3>

      <div className="prolang  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="figma p-2 flex flex-col items-center gap-6">
          <Image
            src="/Skills/figmaskills.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-white text-sm font-semibold">Figma</p>
        </div>
        <div className="canva p-2 flex flex-col items-center gap-7">
          <Image
            src="/Skills/canvaskills.png"
            alt="loading.."
            loading="lazy"
            width={45}
            height={45}
          />

          <p className="text-white text-sm font-semibold">Canva</p>
        </div>
      </div>

      <div className="prolang hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="figma p-5 flex flex-col items-center gap-2">
          <Image
            src="/Skills/figmaskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Figma</p>
        </div>
        <div className="canva p-5 flex flex-col items-center gap-3">
          <Image
            src="/Skills/canvaskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">Canva</p>
        </div>
      </div>
    </div>
  );
};

export default UiDesignSkills;

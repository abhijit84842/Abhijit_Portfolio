"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";

const ImageMagnifier = ({ src, zoom = 5, lensSize = 300 }) => {
  const containerRef = useRef(null);
  const [lensStyle, setLensStyle] = useState({
    display: "none",
    backgroundPosition: "0% 0%",
  });

  // for desktop mode
  const handleMouseMove = (e) => {
    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();

    const x = e.clientX - left;
    const y = e.clientY - top;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    setLensStyle({
      display: "block",
      left: `${x - 50}px`,
      top: `${y - 50}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  const handleMouseLeave = () => {
    setLensStyle({ display: "none" });
  };

  // for mobile mode
  const handleTouch = (e) => {
    const touch = e.touches[0];

    const container = containerRef.current;
    const { left, top, width, height } = container.getBoundingClientRect();

    const x = touch.clientX - left;
    const y = touch.clientY - top;

    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    setLensStyle({
      display: "block",
      left: `${x - lensSize / 2}px`,
      top: `${y - lensSize / 2}px`,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    });
  };

  const handleTouchEnd = () => {
    setLensStyle({ display: "none" });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouch}
      onTouchMove={handleTouch}
      onTouchEnd={handleTouchEnd}
      className="relative w-[30rem] h-[30rem] overflow-hidden border-2 border-gray-300 "
      style={{ backgroundImage: `url(${src})`, backgroundSize: "cover" }}
    >
      <Image
        src={src}
        alt="loading.."
        priority={false}
        loading="lazy"
        fill
        className="w-full h-full object-cover pointer-events-none"
      />
      <div
        className="absolute rounded-full border border-black shadow-lg"
        style={{
          width: `${lensSize}px`,
          height: `${lensSize}px`,
          display: lensStyle.display,
          left: `calc(${lensStyle.left})`,
          top: `calc(${lensStyle.top})`,
          backgroundImage: `url(${src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${zoom * 100}%`,
          backgroundPosition: lensStyle.backgroundPosition,
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

export default ImageMagnifier;

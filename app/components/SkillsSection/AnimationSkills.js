import React from 'react'

const AnimationSkills = () => {
  return (
      
    <div className="programming-lang bg-zinc-800 p-5  mb-10 mx-5 rounded-lg">
    <h3 className="text-2xl text-white font-semibold">Animation</h3>
    <div className="prolang  flex justify-start gap-20 mt-5">
      <div className="gsap  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
        <img
          className="w-[5rem] h-[10rem]"
          src="/skills/gsap.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">GSAP</p>
      </div>
      <div className="swiper w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
        <img
          className="w-[5rem] h-[10rem] "
          src="/skills/swiper.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">Swiper Js</p>
      </div>
      <div className="canva w-[8rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-3 ">
        <img
          className="w-[7rem] h-[10rem]"
          src="/skills/scroll.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">Scroll Trigger</p>
      </div>
    </div>
  </div>
  )
}

export default AnimationSkills
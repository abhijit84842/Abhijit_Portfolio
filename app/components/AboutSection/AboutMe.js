import Image from "next/image";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="about-main-container">
      <div
        className="about-container my-10  flex justify-around flex-col gap-5 lg:hidden"
        id="about"
      >
        <div className="top-heading  flex justify-center">
          <p className="text-[#F61E1E] text-3xl font-semibold">About Me</p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/aboutprofilepic.png"
            alt="loading.."
            loading="lazy"
            width={250}
            height={250}
          />
        </div>

        <div className=" about-right  w-[90%]  mt-2">
          <div className="paragrap text-zinc-200 w-[100%] ">
            <p className=" text-base  p-2 leading-6 tracking-wider ">
              I am a dedicated full stack developer with a strong passion for
              crafting dynamic and responsive web applications. With hands-on
              experience in front-end technologies like HTML, CSS, JavaScript,
              and frameworks such as React, as well as back-end expertise in
              Node.js, Express, and databases like MongoDB and SQL, I bring a
              holistic approach to development. I enjoy solving complex
              challenges, optimizing code, and building solutions that are both
              functional and user-centric. Whether working on individual
              projects or collaborating within a team, I am always focused on
              delivering top-quality results.When I am not coding, I am
              exploring new technologies, contributing to open-source projects,
              or honing my skills to stay ahead in the ever-evolving tech world.
            </p>
          </div>
          <div className="mt-3 flex justify-center ">
            <Link className="bg-red-500 p-2 rounded-lg font-semibold" href="#">
              More About Me
            </Link>
          </div>
        </div>
      </div>

      <div
        className="hidden about-container my-20  flex justify-around gap-5 lg:flex justify-around gap-5"
        id="about"
      >
        <div>
          <Image
            src="/aboutprofilepic.png"
            alt="loading.."
            loading="lazy"
            width={350}
            height={350}
            className=" mt-20 2xl:hidden "
          />

          <Image
            src="/aboutprofilepic.png"
            alt="loading.."
            loading="lazy"
            width={400}
            height={400}
            className="hidden 2xl:block"
          />
        </div>

        <div className=" about-right  w-[50%] mt-20">
          <div className="top-heading  w-[60%]">
            <p className="text-[#F61E1E] text-4xl font-semibold">About Me</p>
          </div>
          <div className="paragrap text-white w-[100%] mt-10 ml-5 ">
            <p className=" text-xl leading-8">
              I am a dedicated full stack developer with a strong passion for
              crafting dynamic and responsive web applications. With hands-on
              experience in front-end technologies like HTML, CSS, JavaScript,
              and frameworks such as React, as well as back-end expertise in
              Node.js, Express, and databases like MongoDB and SQL, I bring a
              holistic approach to development. I enjoy solving complex
              challenges, optimizing code, and building solutions that are both
              functional and user-centric. Whether working on individual
              projects or collaborating within a team, I am always focused on
              delivering top-quality results.When I am not coding, I am
              exploring new technologies, contributing to open-source projects,
              or honing my skills to stay ahead in the ever-evolving tech world.
            </p>
          </div>
          <div className=" flex justify-center mt-10 ">
            <Link className="bg-red-500 font-semibold p-2 rounded-full 2xl:p-5" href="#">
              More About Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

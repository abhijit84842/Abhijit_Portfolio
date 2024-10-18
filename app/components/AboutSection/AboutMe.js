import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="about-container mt-10  flex justify-around gap-5">
      <img
        className="h-[30rem]  bg-green-500"
        src="About Profile Pic.png"
        alt="loading.."
      />

      <div className="about-right  w-[50%] mt-20">
        <div className="top-heading  w-[60%]">
          <p className="text-[#F61E1E] text-4xl font-semibold">About Me</p>
        </div>
        <div className="paragrap text-white w-[100%] mt-10 ml-5 ">
          <p className="tracking-tight leading-8">
            I'm a dedicated full stack developer with a strong passion for
            crafting dynamic and responsive web applications. With hands-on
            experience in front-end technologies like HTML, CSS, JavaScript, and
            frameworks such as React, as well as back-end expertise in Node.js,
            Express, and databases like MongoDB and SQL, I bring a holistic
            approach to development. I enjoy solving complex challenges,
            optimizing code, and building solutions that are both functional and
            user-centric. Whether working on individual projects or
            collaborating within a team, I’m always focused on delivering
            top-quality results.When I’m not coding, I’m exploring new
            technologies, contributing to open-source projects, or honing my
            skills to stay ahead in the ever-evolving tech world.
          </p>
        </div>
        <div className="bg-red-500  mt-10 ml-5 w-[20%] p-2 rounded-full text-white font-semibold ">
        <Link className="ml-2" href="#">More About Me</Link>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;

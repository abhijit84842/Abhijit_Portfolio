import React from "react";

const Skills = () => {
  return (
    <div className="skills-container my-20">
      <h1 className="text-[#FB2A2A] flex justify-center text-4xl font-semibold my-20">
        Skills
      </h1>
      <div className="skills-type bg-stone-700 mx-20 rounded-md">
        <div className="tech-heading mt-5 p-5">
          <h2 className="text-[#FB2A2A] text-3xl font-semibold">
            Technical Skills
          </h2>
        </div>

        <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
          <h3 className="text-2xl text-white font-semibold">
            Programming Languages
          </h3>
          <div className="prolang  flex justify-start gap-20 mt-5">
            <div className="python p-5 flex flex-col items-center gap-4">
              <img
                className="w-[4rem]"
                src="/skills/python 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Python</p>
            </div>
            <div className="java p-5 flex flex-col items-center gap-4">
              <img
                className="w-[5rem]"
                src="/skills/java 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Core Java</p>
            </div>
            <div className="javascript p-5 flex flex-col items-center gap-4">
              <img
                className="w-[4rem]"
                src="/skills/javascript 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">JavaScript</p>
            </div>
          </div>
        </div>

        <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
          <h3 className="text-2xl text-white font-semibold">
            Frontend Technology
          </h3>
          <div className="prolang flex justify-start gap-7 mt-5">
            <div className="html5  w-[7rem] min-w-[7rem] h-[11rem] p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/html5 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">HTML5</p>
            </div>
            <div className="css3 w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/css 3 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">CSS3</p>
            </div>
            <div className="javascript w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8 ">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/javascript 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">JavaScript</p>
            </div>
            <div className="reactjs w-[7rem] min-w-[7rem] h-[11rem]    p-2 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/react.png"
                alt="loading.."
              />
              <p className="text-white text-[20px] font-semibold">React Js</p>
            </div>
            <div className="redux-toolkit w-[7rem] min-w-[7rem]  h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/redux 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Redux Toolkit</p>
            </div>
            <div className="nextjs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/next js 2 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Next Js</p>
            </div>
            <div className="ejs w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/ejs.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">EJS</p>
            </div>
            <div className="tailwindcss w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/Tailwind css.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Tailwind Css</p>
            </div>
            <div className="bootstrap w-[7rem] min-w-[7rem] h-[11rem]  p-5 flex flex-col items-center gap-8">
              <img
                className="w-[5rem] h-[10rem]"
                src="/skills/bootstrap--v2 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">BootStrap5</p>
            </div>
          </div>
        </div>
        <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
          <h3 className="text-2xl text-white font-semibold">
            Backend Technology
          </h3>
          <div className="nodejs  flex justify-start gap-20 mt-5">
            <div className="python p-5 flex flex-col items-center gap-3">
              <img
                className="w-[5rem]"
                src="/skills/node js 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Node Js</p>
            </div>
            <div className="express-js p-5 flex flex-col items-center gap-6">
              <img
                className="w-[5.5rem]"
                src="/skills/express 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Express Js</p>
            </div>
            <div className="jwt-auth p-5 flex flex-col items-center gap-7">
              <img
                className="w-[5rem]"
                src="/skills/jwt 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">JWT</p>
            </div>
            <div className="jwt-auth p-5 flex flex-col items-center gap-7">
              <img
                className="w-[5rem]"
                src="/skills/socket.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Socket.Io</p>
            </div>
          </div>
        </div>

        <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
          <h3 className="text-2xl text-white font-semibold">Database</h3>
          <div className="prolang  flex justify-start gap-20 mt-5">
            <div className="mongoDB p-5 flex flex-col items-center gap-2">
              <img
                className="w-[5rem]"
                src="/skills/mongoDB 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">mongoDB</p>
            </div>
            <div className="mySQL p-5 flex flex-col items-center gap-5">
              <img
                className="w-[4rem]"
                src="/skills/MYSQL.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">MYSQL</p>
            </div>
          </div>
        </div>

        <div className="programming-lang bg-zinc-800 p-5  mb-10 mx-5 rounded-lg">
          <h3 className="text-2xl text-white font-semibold">UI Design</h3>
          <div className="prolang  flex justify-start gap-20 mt-5">
            <div className="figma p-5 flex flex-col items-center gap-2">
              <img
                className="w-[5rem]"
                src="/skills/figma 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Figma</p>
            </div>
            <div className="canva p-5 flex flex-col items-center gap-3">
              <img
                className="w-[5rem]"
                src="/skills/canva 1.png"
                alt="loading.."
              />
              <p className="text-white text-lg font-semibold">Canva</p>
            </div>
          </div>
        </div>
        <div className=" mt-10  p-5 ">
          <div className="p-2 ">
            <h2 className="text-[#FB2A2A] text-3xl font-semibold">
              Professional Skills
            </h2>
          </div>
          <div className="bg-zinc-800 flex justify-start gap-20 my-5 p-5 rounded-lg">
            <div className=" p-5 flex flex-col items-center gap-5">
              <img
                className="w-[6rem]"
                src="/skills/communication skills 1.png"
                alt="loading.."
              />
              <p className="text-lg text-white font-semibold">
                Communication Skill
              </p>
            </div>
            <div className=" p-5 flex flex-col items-center gap-5">
              <img
                className="w-[6rem]"
                src="/skills/team work 1.png"
                alt="loading.."
              />
              <p className="text-lg text-white font-semibold">Team Work</p>
            </div>
            <div className="p-5 flex flex-col items-center gap-7 ">
              <img
                className="w-[6rem]"
                src="/skills/problem 1.png"
                alt="loading.."
              />
              <p className="text-lg text-white font-semibold">
                Problem Solving
              </p>
            </div>
            <div className=" p-5 flex flex-col items-center gap-7 ">
              <img
                className="w-[6rem]"
                src="/skills/creativity 1.png"
                alt="loading.."
              />
              <p className="text-lg text-white font-semibold">Creativity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

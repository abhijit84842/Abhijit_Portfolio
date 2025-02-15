import Image from "next/image";
import React from "react";

const DataBase = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-2 my-5 mx-2 rounded-lg 2xl:my-10 2xl:mx-5 2xl:p-5">
      <h3 className="text-xl text-white font-semibold 2xl:text-2xl">Database</h3>



      <div className="prolang  flex justify-start flex-wrap gap-5 mt-5 2xl:hidden">
        <div className="mongoDB p-2 flex flex-col items-center gap-6">
          <Image
            src="/Skills/mongodbskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">mongoDB</p>
        </div>
        <div className="mySQL p-2 flex flex-col items-center gap-5">
          <Image
            src="/Skills/MYSQLskills.png"
            alt="loading.."
            loading="lazy"
            width={50}
            height={50}
          />

          <p className="text-white text-sm font-semibold">MYSQL</p>
        </div>
      </div>


      <div className="prolang hidden 2xl:flex justify-start gap-20 mt-5">
        <div className="mongoDB p-5 flex flex-col items-center gap-6">
          <Image
            src="/Skills/mongodbskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">mongoDB</p>
        </div>
        <div className="mySQL p-5 flex flex-col items-center gap-5">
          <Image
            src="/Skills/MYSQLskills.png"
            alt="loading.."
            loading="lazy"
            width={70}
            height={70}
          />

          <p className="text-white text-lg font-semibold">MYSQL</p>
        </div>
      </div>
    </div>
  );
};

export default DataBase;

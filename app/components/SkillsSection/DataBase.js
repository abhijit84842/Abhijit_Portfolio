import Image from "next/image";
import React from "react";

const DataBase = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5 my-10 mx-5 rounded-lg">
      <h3 className="text-2xl text-white font-semibold">Database</h3>
      <div className="prolang  flex justify-start gap-20 mt-5">
        <div className="mongoDB p-5 flex flex-col items-center gap-6">
          <Image
            src="/Skills/mongoDBskills.png"
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

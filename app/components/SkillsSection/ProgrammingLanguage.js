import React from 'react'

const ProgrammingLanguage = () => {
  return (
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

  )
}

export default ProgrammingLanguage
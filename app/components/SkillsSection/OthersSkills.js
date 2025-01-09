import React from 'react'

const OthersSkills = () => {
  return (
    <div className="programming-lang bg-zinc-800 p-5  mb-10 mx-5 rounded-lg">
    <h3 className="text-2xl text-white font-semibold">Others Skills</h3>
    <div className="prolang  flex justify-start gap-20 mt-5">
      <div className="figma p-5 flex flex-col items-center gap-2">
        <img
          className="w-[5rem]"
          src="/skills/git.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">Git & GitHub</p>
      </div>
    </div>
  </div>
  )
}

export default OthersSkills
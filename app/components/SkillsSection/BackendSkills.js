import React from 'react'

const BackendSkills = () => {
  return (
    
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
      <div className="socket-io p-5 flex flex-col items-center gap-7">
        <img
          className="w-[5rem]"
          src="/skills/socket.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">Socket.Io</p>
      </div>
      <div className="mongoDb-aggregation p-5 flex flex-col items-center gap-2 ">
        <img
          className="w-[10rem]"
          src="/skills/aggregation.png"
          alt="loading.."
        />
        <p className="text-white text-lg font-semibold">Aggregation Pipeline</p>
      </div>
    </div>
  </div>
  )
}

export default BackendSkills
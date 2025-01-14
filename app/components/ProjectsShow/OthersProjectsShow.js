import Link from 'next/link'
import React from 'react'

const OthersProjectsShow = () => {
  return (
    <div className="sub-container bg-slate-800 p-5 my-10 rounded-lg">
    <div className="others-projects-box">
        <h2 className="mt-5 text-2xl mb-5 text-red-500">Others Projects</h2>
        <div className="flex justify-between">
        <div className="crad bg-slate-50 w-[20rem] p-2 rounded-lg">
            <img  src="/Projects/citysling.png" alt="loading.." />
            <p className="text-red-500 text-xl mt-2 font-semibold">CitySling E-com Website</p>
            <p className="text-black ">This full-stack e-commerce application is designed for a city sling bag store, built using EJS for templating, Node.js for backend logic, and Tailwind CSS for modern styling. <span><Link className='text-blue-700' href={""}>See more..</Link></span></p>
        </div>
        <div className="crad bg-slate-50 w-[20rem] p-2 rounded-lg">
            <img  src="/Projects/citysling.png" alt="loading.." />
            <p className="text-red-500 text-xl mt-2 font-semibold">CitySling E-com Website</p>
            <p className="text-black ">This full-stack e-commerce application is designed for a city sling bag store, built using EJS for templating, Node.js for backend logic, and Tailwind CSS for modern styling. <span><Link className='text-blue-700' href={""}>See more..</Link></span></p>
        </div>
        <div className="crad bg-slate-50 w-[20rem] p-2 rounded-lg">
            <img  src="/Projects/citysling.png" alt="loading.." />
            <p className="text-red-500 text-xl mt-2 font-semibold">CitySling E-com Website</p>
            <p className="text-black ">This full-stack e-commerce application is designed for a city sling bag store, built using EJS for templating, Node.js for backend logic, and Tailwind CSS for modern styling. <span><Link className='text-blue-700' href={""}>See more..</Link></span></p>
        </div>
        </div>
       
    </div>
  </div>
  )
}

export default OthersProjectsShow
import React from 'react'

const MernStackProject = () => {
  return (
    <div className="frontend-projects  mx-10 my-20">
    <h1 className="text-2xl text-[#0B44FF] font-semibold mb-5">
      MERN Stack Projects
    </h1>
    <div className="mern-project-box bg-[#18181B] p-3">
      <div className="project-box-2">
        <h2 className="ml-10 text-lg font-semibold text-[#FB2A2A]">
          Project 1
        </h2>
        <div className="my-5 ml-10 flex justify-end gap-20">
          <div className="left w-[80%] h-[20rem]">
            <h2 className="text-2xl">CitySling Bag E-Com Website</h2>
            <div className="mt-5">
              <p>
                This full-stack e-commerce application is designed for a
                city sling bag store, built using EJS for templating,
                Node.js for backend logic, and Tailwind CSS for modern
                styling. The application uses MongoDB Atlas for secure and
                efficient data storage and includes authentication with
                JWT and password encryption with bcrypt to protect user
                data. Featuring a dynamic landing page displaying the
                latest products, the project is structured with an MVC
                model to ensure scalable, production-grade code. This
                project demonstrates my full-stack development skills,
                with a focus on security, scalability, and clean design.
              </p>
            </div>
            <div className="mt-20 ml-20">
              <p>See details...</p>
            </div>
          </div>
          <div className="right w-[50%]">
            <img src="/Projects/citysling.png" alt="loading.." />
          </div>
        </div>
      </div>
      <div className="border border-red-500 mx-20 my-10"></div>

      <div className="project-box-2">
        <h2 className="flex justify-end  mr-10 my-10 text-lg font-semibold text-[#FB2A2A]">
          Project 2
        </h2>
        <div className="my-5 ml-10 flex justify-end gap-20">
          <div className="right w-[50%]">
            <img src="/Projects/foodplaza.png" alt="loading.." />
          </div>
          <div className="left w-[80%] h-[20rem]">
            <h2 className="text-2xl">Food Plaza Restaurant Website</h2>
            <div className="mt-5">
              <p>
                This full-stack restaurant application, Food Plaza,
                showcases a wide variety of meal options, including
                breakfast, lunch, and dinner, to provide users with a
                complete dining experience. Developed with the MERN stack
                (MongoDB, Express, React, Node.js), the project features
                secure authentication using JWT and bcrypt for password
                encryption. Key functionalities include form validation, a
                search feature for easy menu navigation, and a loading bar
                for smooth user interaction. Styled with CSS for a clean,
                appealing interface, this project demonstrates my skills
                in creating interactive, user-friendly full-stack
                applications with an emphasis on security and performance.
              </p>
            </div>
            <div className="mt-20 ml-20">
              <p>See details...</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button className="bg-[#1E49F6] p-5  text-2xl rounded-full">
          See More Projects...
        </button>
      </div>
    </div>
  </div>

  )
}

export default MernStackProject
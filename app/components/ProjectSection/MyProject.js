import React from 'react'

const MyProject = () => {
  return (
    <div className='project-container my-20'>
        <div className='sub-container'>
            <h1 className='text-[#FB2A2A] flex justify-center  text-4xl font-semibold my-20'>My Projects</h1>
            <div className='projects-nav'>
                <div className='flex justify-center gap-20 text-2xl'>
                <p>Frontend Projects</p>
                <p>Full Stack Projects</p>
                <p>UI & UX Design</p>
                <p>Others Projects</p>
                </div>
                
                <div className='blank-div border border-red-500 mx-20 my-10'></div>
            </div>
            <div className='frontend-projects  mx-10'>
                <h1 className='text-2xl text-[#0B44FF] font-semibold my-5'>Frontend Projects</h1>
                <div className='frontend-project-box bg-[#18181B]'>
                    <h1>Project 1</h1>
                    <div className='bg-[#18181B] my-5 ml-10'>
                        <h2>Wear Collection E-com Website</h2>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default MyProject

import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='main-container bg-zinc-900 m-10 rounded-md'>
        <h1 className='flex justify-center text-3xl font-semibold p-5'>City Sling E-com Website Overview</h1>
        <div className='sub-container '>
         
          <div className='project-images-box bg-green-500'>
          <h2 className='text-2xl font-semibold text-red-500'>Project Images</h2>
            <Image src="" alt='loading..' loading='lazy' width={500} height={500}/>
          </div>
          <div>

          </div>
        </div>


    </div>
  )
}

export default page
import React from 'react'
import Link from 'next/link'

const IntroSection = () => {
  return (
    <div className='intro-container   flex justify-between'>
        <div className='left-container w-[50%] text-white mt-20 ml-20 '>
          <p className='text-3xl font-semibold'> <span className='text-[#F61E1E]'>Hi</span>, It's Me</p>
          <p className='text-5xl font-extrabold mt-2 text-[#FB2A2A]'>Abhijit Das</p>
          <p className='text-4xl font-semibold mt-5'>And I'm a <span className='text-[#0B44FF]'>MERN Stack Developer</span></p>
          <div className='sub-intro w-[100%] ml-5 mt-2'>
            <p>I am a passionate and versatile full stack developer with expertise in both front-end and back-end technologies. I specialize in building efficient, scalable, and user-friendly applications, utilizing a wide range of modern tools and frameworks. From crafting seamless user interfaces to ensuring robust server-side logic.</p>
          </div>
          <div className='social-links flex mt-5'>
            <div className='linkedin'>
              <Link href="#">
              <img src="/Social Links/linkedin.png" alt="" /></Link>
            </div>
            <div className='github'>
              <Link href="#">
              <img src="/Social Links/github.png" alt="" />
              </Link>
            </div>
            <div className='whatsapp'>
              <Link href="#">
              <img src="/Social Links/whatsapp.png" alt="" />
              </Link>
            </div>
          </div>
          <div className='CV-download mt-10 ml-5 '>
            <a href="/CV/Resume.pdf">
            <img src="CV Download.png" alt="loading" /></a>
          </div>
        </div>
        <div className='right-container mr-20  mt-5'>
          <img className='h-[40rem]' src="Profile Pic.png" alt="" />
        </div>
    </div>
  )
}

export default IntroSection
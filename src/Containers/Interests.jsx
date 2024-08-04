import React from 'react'

export const Interests = () => {
  return (
    <div className='md:w-[60%] w-full p-2'>
      <h1 className='text-4xl font-extrabold text-[#291c3a] text-start p-10'>Lets discuss on<br/> Something <span className='text-red-700'>cool</span> together</h1>
      <small className=' text-[#291c3a]'>I'm intrested in ..</small>
      <div className='grid gap-4 pt-4 font-mono'>
      <span className='hover:bg-[#291c3a] bg-transparent text-[#291c3a] hover:text-purple-300  rounded-md hover:shadow-md hover:shadow-purple-600'>Mern Stack Developer </span>
      <span className='hover:bg-[#291c3a] bg-transparent text-[#291c3a] hover:text-purple-300  rounded-md hover:shadow-md hover:shadow-purple-600'>Javascript Developer</span>
      <span className='hover:bg-[#291c3a] bg-transparent text-[#291c3a] hover:text-purple-300  rounded-md hover:shadow-md hover:shadow-purple-600'>React JS Developer </span>
      <span className='hover:bg-[#291c3a] bg-transparent text-[#291c3a] hover:text-purple-300  rounded-md hover:shadow-md hover:shadow-purple-600'>Frontend Developer </span>
    </div></div>
  )
}

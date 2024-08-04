import React from 'react'
import { ide } from '../Constants'

export const Exp = () => {
  return (
    <div className='flex flex-row pr-12 pl-12 items-center p-3 xss:p-4 justify-between text-violet-300 md:h-[6.5rem] h-[3.5rem]  md:bottom-0 bg-gradient-to-r from-[#170B24] via-[#221A37] to-[#221A37]'>
  <div className='text-center items-center flex flex-row gap-5 xxs:gap-2'>
    <h1 className='md:text-8xl text-3xl'>1</h1>
    <div className='flex flex-col'>
      <h3>Year of</h3>
      <span>experience</span>
    </div>
   
  </div>
  <div className=' md:flex h-full items-center justify-center xss:mt-10'>
    <div className='flex flex-row text-center justify-center gap-5 xxs:gap-1'>
      {ide.map((data, index) => (
        <img key={index} className='xl:h-20 xl:w-20 mx-2 h-9 w-9 xxs:h-6 xxs:w-6' src={data} />
      ))}
    </div>
  </div>
</div>

  )
}

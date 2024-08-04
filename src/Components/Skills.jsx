import React from 'react'
import { redux } from '../assets'
import { skills } from '../Constants'
export const Skills = () => {
  return (
    <div className='md:flex justify-end mt-10 text-violet-300 p-5' id="Skills">
      <div className='flex flex-col'>
        <h1 className='text-2xl md:text-3xl font-bold'>Skills</h1>
        <h2 className='md:text-xl font-normal'>Tehnologies I've worked recently.</h2>
        <div className='grid sm:grid-cols-5 grid-cols-3 md:gap-5 gap-6 pr-5 pt-3 items-center'>
        {skills.map((data,index)=>(
                    <div className='md:h-28 md:w-28 h-20 w-20 items-center border border-violet-900 bg-[#291c3a] rounded-md p-1 hover:shadow-xl hover:shadow-purple-600' key={index}>
        <img className='h-18 w-18 bg-dark-voilet rounded-md mx-auto my-auto' src={data} />
        </div>
        ))}
</div></div>
    </div>
  )
}

import React from 'react'
import { oneshield } from '../assets'
import { experience } from '../Constants'
oneshield
export const Experience = () => {
  return (
    <div className='flex flex-col gap-3 p-5 mt-4 text-violet-300' id="Experience">
          <h1 className='text-2xl md:text-3xl font-bold'>Work Experience</h1>
          <p className='text-base md:text-xl font-normal'>Organization's I've worked with.. </p>
        <div className='grid md:grid-cols-2 grid-cols-1  md:gap-5  text-violet-200'>
            {experience.map((data,index)=>(<div key={index} className=' shadow-lg shadow-purple-600 rounded-lg border border-[#221A37] p-5 font-mono bg-gradient-to-r from-[#170B24] via-[#221A37] to-[#221A37]'>
                <img src={data.logo} className='h-10 w-auto bg-dark-voilet rounded-md mx-auto my-auto'  />

                <h1 className='font-extrabold'>{data.company}</h1>
                <small className='md:float-end'>{data.location}</small>
                <h1 className='pt-3'>{data.role}</h1>
                <h2 className='w-full ml-4 pt-3 break-words max-h-40 text-ellipsis'>{data.work_one}</h2>
                <h2 className='w-full ml-4 pt-3 break-words max-h-40 text-ellipsis'>{data.work_two}</h2>

                <small className='float-end'>{data.date}</small>
            </div>))}
           
        </div>


    </div>
  )
}

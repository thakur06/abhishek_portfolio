import React from 'react'
import { ShopVilla } from '../assets'
import { IconBrandGithub } from '@tabler/icons-react'
export const ProjectCard = ({ data }) => {
  return (
    <div className='shadow-inner shadow-violet-800 drop-shadow-xl md:h-[21rem] p-2 min-w-32 max-w-96 md:max-w-60 bg-[#dccfed] text-black rounded-lg overflow-y-hidden'>
      <img className='border border-ulra-voilet md:h-28 rounded-md w-full' src={data.imgSrc} />
      <h3 className='font-bold'>{data.name}</h3>
      <p className='w-full h-24 text-wrap overflow-y-scroll no-scrollbar'>{data.description}</p>
<div className='mt-2'>
      <small className=''>
        <span className='text-blue-700'>{data.stack[0]}</span> <span className='text-green-700'>{data.stack[1]}</span> <span className='text-yellow-700'>{data.stack[2]}</span>
      </small>
      </div>
      <button className='w-full bg-[#291c3a] text-[#E1EAEd] text-center rounded-md mt-5' ><a href={data.url} target='_blank'>View code &rarr;</a></button>
    </div>
  )
}
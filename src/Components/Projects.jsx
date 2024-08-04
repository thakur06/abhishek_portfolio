import React from 'react'
import { ProjectCard } from '../Containers/ProjectCard'
import { project } from '../Constants'
import { data } from 'autoprefixer'

export const Projects = () => {
  return (
    <>
    <div className='h-auto  text-violet-300 mt-10 p-5' id="Projects">
    <h1 className='text-2xl md:text-3xl font-bold'>Projects</h1>
    <p className='text-base md:text-xl font-normal'>Some Thing's I've built so far</p>
        <div className='grid grid-rows-2 md:flex md:flex-row justify-center md:justify-start overflow-x-auto no-scrollbar gap-4 pt-5'>
      {project.map((data,index)=>(<ProjectCard key={index} data={data}/>))}
        
    </div>
    </div> 
    </>
  )
}

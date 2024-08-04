import React from 'react'
import { About } from './About'
import { Skills } from './Skills'
import { Projects } from './Projects'
import { Beams } from '../Lib/Beams'
import { Experience } from './Experience'
export const Body = () => {
  return (
    <>


<div className="md:h-full w-full rounded-md bg-gradient-to-b from-[#170B24] via-[#221a37] to-[#261d3c] relative flex flex-col  p-7  antialiased">

    <div className='flex justify-between flex-col h-auto z-10'>
   <About/>
   <Experience/>
   <Skills/>
   <Projects/>
   </div>


      <Beams />
    </div>
    
    </>
  )
}

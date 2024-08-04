import { useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Exp } from './Components/Exp'
import { Body } from './Components/Body'
import { Contact } from './Components/Contact'


function App() {

  return (
    <>
    <div className='dark:bg-[#E1ebed]'>
         <Hero/>
   <Exp/>
    </div>

   <Body/>
   <Contact/>

    </>
  )
}

export default App

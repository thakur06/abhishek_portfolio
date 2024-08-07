import { useEffect, useState } from 'react'
import { Navbar } from './Components/Navbar'
import { Hero } from './Components/Hero'
import { Exp } from './Components/Exp'
import { Body } from './Components/Body'
import { Contact } from './Components/Contact'
import { StartupLoader } from './Components/StartupLoader'

function App() {
const [isLoading, setisLoading] = useState(true)
useEffect(()=>{
setTimeout(()=>{setisLoading(false)},4000)
},[]);
  return (
    <>
   { !isLoading?<><div className='dark:bg-[#E1ebed]'>
         <Hero/>
   <Exp/>
    </div>

   <Body/>
   <Contact/></>:<StartupLoader loading={isLoading}/>
}
    </>
  )
}

export default App

import React,{useState} from 'react'
import { HeroText } from '../Containers/HeroText'
import { hero } from '../assets'
import { Navbar } from './Navbar'
import { Exp } from './Exp'
import { IconBrandGithubFilled , IconBrandLinkedin , IconBrandGmail } from "@tabler/icons-react";
export const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className='flex justify-start w-full mt-0 bg-[#221A37] relative' id="Home">

    
    <img className="" src={hero}/>
    <Navbar toggleMenu={toggleMenu} menuOpen={menuOpen}/>
    {!menuOpen && <HeroText/>}

      </div>
  )
}

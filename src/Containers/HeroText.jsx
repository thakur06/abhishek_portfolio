import React from "react";
import { TypeText } from "../Lib/TypeText";
import { resume } from "../Constants";
import { hello } from "../assets";
import { IconBrandGithub , IconBrandLinkedin , IconBrandGmail } from "@tabler/icons-react";
export function HeroText() {
    const words = [

      {
        text: "I'm",
      },

      {
        text: "Abhishek.",
        className: "text-[#8121D0]"
      },
    ];
    return (
      <div className="flex flex-col items-center xxs:mt-20 xxs:right-1 mt-32 h-[23rem] absolute xl:right-48 right-6 sm:mt-48">
        <div className="flex flex-row ">
                  <h1 className="text-center text-purple-300 items-center text-3xl xxs:text-xl font-bold">Hello </h1>
  <img src={hello} className="h-8 w-8" />
        </div>
<div >
        <TypeText words={words} />
        </div>
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          A Frontend Developer
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 pt-4">
   
          <button className="inline-flex h-12 w-20 sm:w-28 text-xs items-center justify-center rounded-md border border-violet-400 bg-gradient-to-r from-[#170B24] via-[#221A37] to-[#221A37] bg-[length:200%_100%] px-6 font-medium text-purple-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" type={"button"} >
          <a href={resume} download="Abhishek_resume.pdf" > Download CV</a>
          </button>
    
  
          
        
        </div>
        <div className="flex flex-row md:gap-5 pt-5 z-10" >
     <a href="https://github.com/thakur06/" target="_blank"><IconBrandGithub className='md:rounded-full md:border  hover:h-13 hover:w-13 border-violet-300 md:p-2  md:h-12 w-12'  color="#cfb5fd" /></a>   
     <a href="https://www.linkedin.com/in/abhishek-rajput007" target="_blank"><IconBrandLinkedin className='md:rounded-full md:border hover:h-13 hover:w-13 border-violet-300 md:p-2  md:h-12 w-12'color="#cfb5fd" /></a>  
     </div>
      </div>
    );
  }
  
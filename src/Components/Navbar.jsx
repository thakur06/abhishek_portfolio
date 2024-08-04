import React,{useState} from 'react'
import { nav } from "../Constants";
import AnchorLink from "react-anchor-link-smooth-scroll"
import { favicon } from '../assets';

export const Navbar = ({menuOpen,toggleMenu}) => {

  return (
    <nav className="bg-gradient-to-r from-transparent  via-transparent to-zinc-950 border-gray-200 w-full absolute">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        {/* <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={favicon} className="h-8" alt="Abhishek" />
          <span className="self-center text-xl sm:text-2xl font-semibold whitespace-nowrap text-red-600">Abhishek</span>
        </a> */}
        <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
{/* <Links/> */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
   
            {
              nav.map((data,index)=>(
                <li className="w-full md:w-auto  text-end" key={index}>
              <AnchorLink href={`#${data}`} className="block py-2 px-3 md:p-0 rounded  hover:text-purple-600 text-zinc-200 md:hover:bg-transparent ">  {data} </AnchorLink>
            </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

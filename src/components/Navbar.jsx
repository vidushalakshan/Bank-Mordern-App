import React from 'react';
import {close, logo, menu} from "../assets";
import { navLinks } from '../constants';
import style from '../style';

const Navbar = () => {
  return (
    <nav className='flex w-full justify-between items-center navbar py-6'>
        <img src={logo} alt="navLogo" 
        className='w-[124px] h-32px'
        />
        <ul className='flex-1 sm:flex hidden  list-none justify-end items-center '>
            {navLinks.map((nav, index) => (
                <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? "mr-0" : "mr-10"} text-white`}
                >
                    <a href={`${nav.id}`}>{nav.title}</a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Navbar
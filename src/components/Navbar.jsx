import React from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

import { useState } from "react";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <nav className="flex w-full justify-between items-center navbar py-6">
      <img src={logo} alt="navLogo" className="w-[124px] h-32px" />
      <ul className="flex-1 sm:flex hidden  list-none justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => settoggle(!toggle)}
        />
      </div>

      <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className="flex-1 flex  flex-col list-none justify-center items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              index === navLinks.length - 1 ? "mr-0" : "mb-5"
            } text-white`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import style from "../style";

const Footer = () => {
  return (
    <section className={`${style.flexCenter} ${style.paddingY} flex-col`}>
      <div className={`${style.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-[1] mr-10">
          <img
            src={logo}
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${style.paragraph} mt-4 max-w-[312px]`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerLinks.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-medium font-poppins text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>

              <ul className="mt-4 list-none">
                {footerlink.links.map((link, index) => (
                  <li
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer
                            ${
                              index !== footerlink.links.length - 1
                                ? "mb-4"
                                : "mb-0"
                            }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-normal text-center font-poppins text-[18px] leading-[27px] text-white">
            Copyright © 2024 HooBank.All Right Reserved.</p>

        <div className="flex items-center justify-center felx-row">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              alt={social.id}
              key={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer 
                    ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;

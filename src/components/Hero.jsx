import React from "react";

import { discount, robot } from "../assets";
import style from "../style";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section className={`flex md:flex-row flex-col ${style.paddingY}`}>
      <div className={`flex ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounden-[10px] mb-2">
          <img src={discount} alt="discount" 
          className="w-[32px] h-[32px]"
          />
          <p className={`${style.paragraph} ml-2`}>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div> 

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading[100.8px]">
            The Next <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div>
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full ">Payment Method</h1>

        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { arrowUp } from "../assets";
import style from "../style";

const GetStarted = () => {
  return (
    <div className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
        <div className={`${style.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
            <div className={`${style.flexStart} flex-row`}>
                <p>
                    <span>
                        Get
                    </span>
                </p>
                <img src={arrowUp} alt="" />
            </div>

            <p>
                Started
            </p>
        </div>
    </div>
  )
}

export default GetStarted
import React from 'react'
import { stats } from '../constants'
import style from '../style';

const Stats = () => {
  return (
    <div className={`${style.flexCenter} felx-row flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat) => (
            <div key={stat.id} className='flex flex-row items-center justify-start flex-1 m-3'>
                <h4 className='font-semibold font-poppins xs:text-[40.89px] text-[30.86px] xs:leading-[53.16px] leading-[43.16px] text-white'>
                    {stat.value}
                </h4>
                <p className='font-normal font-poppins xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3'>
                    {stat.title}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Stats;
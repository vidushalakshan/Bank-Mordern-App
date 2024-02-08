import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div>
        {stats.map((stat) => (
            <div className='text-white'>
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
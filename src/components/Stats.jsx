import React from 'react'
import { stats } from '../constants'

const Stats = () => {
  return (
    <div>
        {stats.map((stat) => (
            <div className='text-white'>
                <h4>
                    {stat.value}
                </h4>
                <p>
                    {stat.title}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Stats;
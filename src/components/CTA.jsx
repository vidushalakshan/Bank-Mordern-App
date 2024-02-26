import React from 'react';
import Button from './Button';
import style from '../style';


const CTA = () => {
  return (
    <section className={`${style.flexCenter} ${style.marginY} ${style.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex flex-col flex-1'>
            <h2 className={style.heading2}>
                Let's try our service now!
            </h2>
            <p className={`${style.paragraph} max-w-[470px] mt-5`}>
                Everything you need to accept card payments and grow you business anywhare on the planet.
            </p>
        </div>

        <div className={`${style.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
  )
}

export default CTA
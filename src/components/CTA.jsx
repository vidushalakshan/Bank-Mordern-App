import React from 'react';
import Button from './Button';
import style from '../style';


const CTA = () => {
  return (
    <section className={`${style.flexCenter} ${style.marginY} ${style.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div>
            <h2>
                Let's try our service now!
            </h2>
            <p>
                Everything you need to accept card payments and grow you business anywhare on the planet.
            </p>
        </div>

        <div>
            <Button />
        </div>
    </section>
  )
}

export default CTA
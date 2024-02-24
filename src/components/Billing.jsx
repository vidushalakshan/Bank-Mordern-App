import React from 'react';
import { apple, bill, google } from '../assets';
import style,{ layout } from '../style';

const Billing = () => {
  return (
    <section>
        <div>
            <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5]'/>
        </div>
    </section>
  )
}

export default Billing
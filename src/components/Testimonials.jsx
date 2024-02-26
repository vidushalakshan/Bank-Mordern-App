import React from "react";
import style from "../style";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${style.paddingY} ${style.flexCenter} flex-col relative`}
    >
      <div className="relative flex flex-col items-center justify-between w-full mb-6 md:flex-row sm:mb-16 z-[1]">
        <h2 className={style.heading2}>
            What People are <br /> Saying about us
        </h2>
        <div className='w-full mt-6 md:mt-0'>
            <p className={`${style.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payment and grow your business
            anywhare on the planet.
            </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

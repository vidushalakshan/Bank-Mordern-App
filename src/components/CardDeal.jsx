import React from "react";
import Button from "./Button";
import style, {layout} from "../style";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          Find a better card deal <br />
          in few easy steps.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button styles={`mt-10`}/>
      </div>

      <div className={layout.sectionInfo}>
        <img src={card} alt="billing" />
      </div>
    </section>
  );
};

export default CardDeal;

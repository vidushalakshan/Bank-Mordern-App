import React from "react";
import Button from "./Button";
import style, {layout} from "../style";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section>
      <div>
        <h2>
          Find a better card deal <br />
          in few easy steps.
        </h2>
        <p>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>

        <Button />
      </div>

      <div>
        <img src={card} alt="billing" />
      </div>
    </section>
  );
};

export default CardDeal;

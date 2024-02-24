import React from "react";
import { apple, bill, google } from "../assets";
import style, { layout } from "../style";

const Billing = () => {
  return (
    <section>
      <div>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>

      <div>
        <h2>
          Easily control your <br /> billing & invoicing
        </h2>

        <p>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div>
            <img src={apple} alt="apple_store" />
            <img src={google} alt="google_play" />
        </div>
      </div>
    </section>
  );
};

export default Billing;

import React from "react";

import { discount, robot } from "../assets";

const Hero = () => {
  return (
    <section>
      <div>
        <div>
          <img src={discount} alt="discount" />
          <p>
            <span className="text-white">20%</span> Discount For <span className="text-white">1 Month</span> Account
          </p>
        </div> 

        <div>
          <h1 className="text-white">
            The Next <br /> <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div></div>
        </div>

        <h1 className="text-white">Payment Method</h1>

        <p className="text-white">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
    </section>
  );
};

export default Hero;

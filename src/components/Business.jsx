import React from "react";
import style from "../style";
import Button from "./Button";

const Business = () => {
  return (
    <section>
      <div>
        <h2>
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
      </div>
      <Button />
    </section>
  );
};

export default Business;

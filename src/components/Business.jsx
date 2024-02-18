import React from "react";
import style, { layout } from "../style";
import Button from "./Button";
import { features } from "../constants";

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={style.heading2}>
          You do the business, <br className="hidden sm:block" /> we’ll handle
          the money.
        </h2>
        <p className={`${style.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles={"mt-10"} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};


const FeatureCard = ({icon, title, content, index}) => (
  <div>
    <div>
      <img src={icon} alt="star" />
    </div>
    <div>
      <h4>
        {title}
      </h4>
      <p>
        {content}
      </p>
    </div>
  </div>
);

export default Business;

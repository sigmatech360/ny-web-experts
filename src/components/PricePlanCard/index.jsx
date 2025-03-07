import React from "react";

const PricePlanCard = (props) => {
  return (
    <div className={`price_plan_card price_plan_card-${props.variant}`} data-aos="fade-up"
    data-aos-duration="3000">
      <div className="price_plan_card_head">
        <p className="package_name">{props?.name}</p>
        <h2 className="package_price">${props?.price}/Mo</h2>
        <p className="price_plan_card_head-description">{props?.description}</p>
        <button className="price_plan_card-btn">Purchase Now</button>
      </div>
      <ul className="price-plan-card-body">
        {props?.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricePlanCard;

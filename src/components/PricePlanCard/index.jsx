import React from "react";

const PricePlanCard = (props) => {
  return (
    <div
      className={`price_plan_card price_plan_card-${props.variant}`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="price_plan_card_head">
        <p className="package_name">{props?.name}</p>
        <h4 className="package_price">${props?.price}/Mo</h4>
        <p className="price_plan_card_head-description">{props?.description}</p>
        <button className="price_plan_card-btn" onClick={props.onClick}>Purchase Now</button>
      </div>
      <div className="price-plan-card-bodyScroll">
        {props?.list.map((item, index) => (
          <div key={index}>
            {item.heading && <h3 className="price-plan-card-body-heading">{item.heading}</h3>}
            <ul className="price-plan-card-body">
              {item.items.map((listItem, listItemIndex) => (
                <li key={listItemIndex}>{listItem}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricePlanCard;

import React from "react";

const BrandStrategyExpertise = ({
  boxes,
  heading,
  subheading,
  description,
}) => {
  // Duplicate array for infinite loop
  const scrollingData = [...boxes, ...boxes];

  return (
    <section className="brand-srategy-expertise">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="strategy-expertise-head">
              <h6 className="shorttop-head text-white">{heading}</h6>
              <h2 className="mainhead text-white">{subheading}</h2>
              <p>{description}</p>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="marquee-wrapper">
              <div className="marquee-content">
                {scrollingData.map((item, index) => (
                  <div className="strategy-expertise-box" key={index}>
                    <h4>{item.num}</h4>
                    <h5>{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStrategyExpertise;

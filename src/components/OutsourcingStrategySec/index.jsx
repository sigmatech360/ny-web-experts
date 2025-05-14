import React from "react";
import ContentWithIcon from "../ContentWithIcon";

const OutsourcingStrategySec = (props) => {
  return (
    <section className="outstanding-strategy">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-4">
            <div class="sec-head text-center">
              {/* <p class="sec-tag">Our Testimonials</p> */}
              <h2 data-aos="fade-up" data-aos-duration="2000">
                {props.secTitle}
              </h2>
              <p data-aos="fade-up" data-aos-duration="3000">
                {props.secDescription}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our_benefits-icons">
              <div className="row">
                {props.boxesData.map((item, index) => (
                  <div
                    className="col-md-6 mb-4 outstanding-strategy-cols"
                    key={index}
                    data-aos="flip-right"
                    data-aos-delay={index * 200}
                  >
                    <ContentWithIcon
                      icon={item.icon}
                      name={item.name}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="web-creation-content">
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {props.secSubSecTitle}
              </h2>
              <p
                className="grayColor poppins"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.secSubSecDescription}
              </p>
              <button
                className="ny-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {props.btnText || `Get Started`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutsourcingStrategySec;

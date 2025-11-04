import React, { useState } from "react";
import ContentWithIcon from "../ContentWithIcon";
import { Link } from "react-router-dom";
import FormModal from "../FormModal";


const OutsourcingStrategySec = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <>
    
    <section className="outstanding-strategy">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 mb-4">
            <div className="sec-head text-center">
              {/* <p className="sec-tag">Our Testimonials</p> */}
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
              <h3 data-aos="fade-up" data-aos-duration="1000">
                {props.secSubSecTitle}
              </h3>
              <p
                className="grayColor poppins"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.secSubSecDescription}
              </p>
              <button
                // to={"/contact-us"}
                className="ny-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
                onClick={() => setShowModal(true)}
              >
                {props.btnText || `Get Started`}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
};

export default OutsourcingStrategySec;

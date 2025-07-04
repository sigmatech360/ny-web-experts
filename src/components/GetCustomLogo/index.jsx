import React from "react";
import { HiOutlinePhone } from "react-icons/hi";

const GetCustomLogo = (props) => {
  const handleOpenChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize(); // or toggle(), or popup()
    } else {
      console.warn("Tawk_API not available yet.");
    }
  };
  return (
    <section className={`get-custom-logo bg-gradiant ${props.className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h4
              className="get-custom-logo-title"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              It’s Time To Boost Your Brand Online Across New York! Schedule a
              Consultation.
            </h4>
          </div>
          <div className="col-lg-8">
            <div
              className="get-custom-logo-content d-flex"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <div className="get-custom-logo-item">
                <div className="get-custom-logo-item-icon">
                  <HiOutlinePhone />
                </div>
                <div className="get-custom-logo-item-content">
                  <p>Call Us</p>
                  <a href="tel:+19177220955">+1 (917) 722-0955</a>
                </div>
              </div>
              <div className="get-custom-logo-item">
                <div className="get-custom-logo-item-icon">
                  <HiOutlinePhone />
                </div>
                <div className="get-custom-logo-item-content">
                  <p>Start</p>
                  <a href="javascript:;" onClick={handleOpenChat}>
                    Live Chat
                  </a>
                </div>
              </div>
              <div className="get-custom-logo-item">
                <div className="get-custom-logo-item-icon">
                  <HiOutlinePhone />
                </div>
                <div className="get-custom-logo-item-content">
                  <p>Start</p>
                  <a href="mailto:support@nywebexperts.com">
                    support@nywebexperts.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetCustomLogo;

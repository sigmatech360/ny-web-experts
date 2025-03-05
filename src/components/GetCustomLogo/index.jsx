import React from "react";
import { HiOutlinePhone } from "react-icons/hi";

const GetCustomLogo = (props) => {
  return (
    <section className={`get-custom-logo bg-gradiant ${props.className}`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 mb-3 mb-lg-0">
            <h4 className="get-custom-logo-title">
              Get Custom Logo from our Best Logo Design Agency in USA
            </h4>
          </div>
          <div className="col-lg-8">
            <div className="get-custom-logo-content d-flex">
              <div className="get-custom-logo-item">
                <div className="get-custom-logo-item-icon">
                  <HiOutlinePhone />
                </div>
                <div className="get-custom-logo-item-content">
                  <p>Call Us</p>
                  <a href="tel:(713) 347-2269">(713) 347-2269</a>
                </div>
              </div>
              <div className="get-custom-logo-item">
                <div className="get-custom-logo-item-icon">
                  <HiOutlinePhone />
                </div>
                <div className="get-custom-logo-item-content">
                  <p>Start</p>
                  <a href="javascript:;">Live Chat</a>
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

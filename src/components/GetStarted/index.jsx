import React from "react";
import { Link } from "react-router-dom";

import getstartedimg from "../../assets/images/get-started-img.webp";

const GetStarted = (props) => {
  return (
    <section
      className="getStarted-sec"
      style={{ backgroundImage: `url(${props.bgImage || getstartedimg}` }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="sec-head text-center">
              {/* <p className="sec-tag">Pricing Plan</p> */}
              <h2 data-aos="fade-up" data-aos-duration="1000">
                {props.secTitle || `Let’s Get Started New Project.`}
              </h2>
              <p data-aos="fade-up" data-aos-duration="2000">
                {props.secDescription ||
                  `Let’s bring your vision to life with a custom web solution tailored to your needs. Get started today and make your project stand out.`}
              </p>
              <Link
                to={"/contact-us"}
                className="ny-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {props.btnText || `Discover More`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

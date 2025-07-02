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
                {props.secTitle || `Got An Idea? Let’s Discuss!`}
              </h2>
              <p data-aos="fade-up" data-aos-duration="2000">
                {props.secDescription ||
                  `You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue.`}
              </p>
              <Link
                to={props.btnLink || "/contact-us"}
                className="ny-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {props.btnText || `Contact Us`}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

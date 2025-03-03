import React from "react";
import { Link } from "react-router-dom";

const InnerBanner = (props) => {
  return (
    <section
      className="inner-banner-sec clipedShaped-sec"
      style={{ backgroundImage: `url(${props?.bannerBG})` }}
    >
      <div className="inner-bg-layer"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner-banner-content">
              <h1>{props?.title}</h1>
              <nav>
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props?.page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerBanner;

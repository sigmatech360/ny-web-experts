import React from "react";
import ContentWithIcon from "../ContentWithIcon";

const AvgPerformanceSec = (props) => {
  return (
    <section className={`premier-design-studio ${props.className}`}>
      <div className="container">
        <div className="row align-items-center">
          {/* <div className="col-lg-12 mb-5">
            <div className="premier-design-studio-title">
              <h1
                className="text-center"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-offset="0"
              >
                A premier New York-based design studio
              </h1>
            </div>
          </div> */}
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="premier-design-studio-img">
              <img
                src={props.image}
                alt={props.secTitle}
                className="img-fluid"
                data-aos="fade-right"
                data-aos-duration="2000"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sec-content">
              {props.secTag && (
                <p className="sec-tag purpleColor">{props.secTag}</p>
              )}
              <h3 data-aos="fade-up" data-aos-duration="2000">
                {props.secTitle}
              </h3>
              <p data-aos="fade-up" data-aos-duration="2000">
                {props.secDescription}
              </p>
              <div
                className="row mt-4"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.listData.map((item, index) => (
                  <div className="col-md-6 mb-md-0 mb-3" key={index}>
                    <ContentWithIcon
                      // icon={item.percentage}
                      iconText={item.percentage}
                      name={item.name}
                      description={item.description}
                    />
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

export default AvgPerformanceSec;

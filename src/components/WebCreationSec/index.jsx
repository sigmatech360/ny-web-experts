import React from "react";

import { TbChecks } from "react-icons/tb";

const WebCreationSec = (props) => {
  return (
    <section className="web-creation-sec clipedShaped-sec bg-gradiant">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="web-creation-img-content">
              <div className="web-creation-img">
                <img
                  src={props.image}
                  className="img-fluid"
                  alt="web creation image"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div
                className="projects-done"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <h1>
                  {props.projectsCount} <br />+
                </h1>
                <p>{props.projectsCountText || `Successful Projects Done`}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5">
            <div className="web-creation-content">
              <p className="sec-tag mb-4">{props.secTag}</p>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                {props.secTitle}
              </h2>
              <p
                className="poppins"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.secDescription}
              </p>
              {props.secDescription2 && (
                <p
                  className="poppins"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {props.secDescription2}
                </p>
              )}
              <div
                className="d-flex flex-column gap-3"
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                {props.listdata.map((item, index) => (
                  <div
                    className={`content-with-icon-item flex-row`}
                    key={index}
                  >
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
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

export default WebCreationSec;

import React from "react";

import webcreationimg from "../../assets/images/web-creation-img.webp";
import { TbChecks } from "react-icons/tb";

const WebCreationSec = () => {
  return (
    <section className="web-creation-sec clipedShaped-sec bg-gradiant">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="web-creation-img-content">
              <div className="web-creation-img">
                <img
                  src={webcreationimg}
                  className="img-fluid"
                  alt="web creation image"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
              <div className="projects-done"
              data-aos="fade-up"
              data-aos-duration="2000">
                <h1>
                  3500 <br />+
                </h1>
                <p>Successful Projects Done</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-lg-0 mt-5">
            <div className="web-creation-content">
              <p className="sec-tag mb-4">Web creation</p>
              <h2 data-aos="fade-up"
                  data-aos-duration="2000">High-end web development company</h2>
              <p className="poppins" data-aos="fade-up"
                  data-aos-duration="2000">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
              <div className="d-flex flex-column gap-3" data-aos="fade-up"
                  data-aos-duration="2000">
                <div className={`content-with-icon-item flex-row`}>
                  <div className="content-with-icon-icon">
                    <TbChecks />
                  </div>
                  <div className="content-with-icon-content">
                    <h5>Top cloud expertise</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>
                </div>
                <div className={`content-with-icon-item flex-row`}>
                  <div className="content-with-icon-icon">
                    <TbChecks />
                  </div>
                  <div className="content-with-icon-content">
                    <h5>Reliable web development</h5>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebCreationSec;

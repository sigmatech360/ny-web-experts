import React from "react";

const GetStarted = () => {
  return (
    <section className="getStarted-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7">
            <div className="sec-head text-center">
              {/* <p className="sec-tag">Pricing Plan</p> */}
              <h2 data-aos="fade-up" data-aos-duration="1000">
                Let’s Get Started New Project.
              </h2>
              <p data-aos="fade-up" data-aos-duration="2000">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since.{" "}
              </p>
              <button
                className="ny-btn"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

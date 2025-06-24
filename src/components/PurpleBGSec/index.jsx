import React from "react";

const PurpleBGSec = (props) => {
  return (
    <section
      className={`purple-bg-sec clipedShaped-sec bg-gradiant ${props.secClass} ${props.clipVariant}`}
    >
      <div className="container">
        <div className="row">
          {props.title && (
            <div className="col-md-12 mb-4">
              <div className="sec-head">
                {props.tag && (
                  <p
                    className="sec-tag"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {props.tag}
                  </p>
                )}
                <h2  data-aos="fade-up" data-aos-delay="400">
                  {props.title}
                </h2>
                {props.secDescription && (
                  <p
                    className="sec-description"
                    data-aos="fade-up"
                    data-aos-delay="600"
                  >
                    {props.secDescription}
                  </p>
                )}
              </div>
            </div>
          )}

          {props.children}
        </div>
      </div>
    </section>
  );
};

export default PurpleBGSec;

import React from "react";

const PurpleBGSec = (props) => {
  return (
    <section className={`purple-bg-sec clipedShaped-sec bg-gradiant ${props.secClass} ${props.clipVariant}`}>
      <div className="container">
        <div className="row">
          {props.title && (
            <div className="col-md-12 mb-4">
              <div className="sec-head">
                <p className="sec-tag" data-aos="fade-up"
                    data-aos-duration="2000">{props.tag}</p>
                <h2 data-aos="fade-up"
                    data-aos-duration="3000">{props.title}</h2>
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

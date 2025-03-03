import React from "react";

const PurpleBGSec = (props) => {
  return (
    <section className={`purple-bg-sec clipedShaped-sec bg-gradiant`}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="sec-head">
              <p className="sec-tag">{props.tag}</p>
              <h2>{props.title}</h2>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default PurpleBGSec;

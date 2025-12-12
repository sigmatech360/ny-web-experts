import React from "react";

const FrontendExpertise = ({ shortTopHead, mainHead, mainPara, points }) => {
  return (
    <section className="frontend-expertise-sec">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="frontend-expertise-head">
              <h6 className="shorttop-head text-white">{shortTopHead}</h6>
              <h2 className="mainhead text-white">{mainHead}</h2>
              <p>{mainPara}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="frontend-expertise-point">
              {points?.map((item, index) => (
                <div key={index} className="frontend-expert-pointsbox">
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendExpertise;

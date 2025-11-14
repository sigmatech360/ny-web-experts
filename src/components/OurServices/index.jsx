import React from "react";

const OurServices = (props) => {
  return (
    <section className="our-services-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="our-service-head">
              <h6>{props.minihead}</h6>
              <h2>{props.mainhead}</h2>
              <p>{props.mainpara}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div className="serivce-box-small">
              <div className="service-small-txt">
                <h6>{props.serviceonemini}</h6>
                <p>{props.serviceoneminipara}</p>
              </div>
              <div className="service-small-img">
                <img src={props.serviceimg1} alt={props.serviceonemini} />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-large-box">
              <div className="service-large-txt">
                <h6>{props.serviceonelarge}</h6>
                <p>{props.serviceonelargepara}</p>
              </div>
              <div className="service-large-img">
                <img src={props.serviceimg2} alt={props.serviceonelarge} />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="service-large-box">
              <div className="service-large-txt">
                <h6>{props.servicetwolarge}</h6>
                <p>{props.servicetwolargepara}</p>
              </div>
              <div className="service-large-img">
                <img src={props.serviceimg3} alt={props.servicetwolarge} />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="serivce-box-small">
              <div className="service-small-txt">
                <h6>{props.servicetwomini}</h6>
                <p>{props.servicetwominipara}</p>
              </div>
              <div className="service-small-img">
                <img src={props.serviceimg4} alt={props.servicetwomini} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;

import React from "react";
import { Link } from "react-router-dom";

const EcommerceServices = (props) => {
  const { minihead, mainhead, mainpara, services } = props;


  
  return (
    <section className="ecommerce-sevices-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="ecommerce-head">
              <h6>{minihead}</h6>
              <h2>{mainhead}</h2>
              <p>{mainpara}</p>
            </div>
          </div>
        </div>
        <div className="row">
          {services?.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="ecommerce-service-box">
                <img src={service.serviceimg} alt={service.heading} className="img-fluid mb-3" />
                <h5>{service.heading}</h5>
                <p>{service.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="ecommerce-service-btn">
              <Link to="/contact-us" className="ny-btn">{props.btntxt}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceServices;

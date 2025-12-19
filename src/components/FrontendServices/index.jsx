import React from "react";
import { Link } from "react-router-dom";


const FrontendServices = ({ shortHead, mainHead, btnClass, description, secCardClass, services, btnText, btnLink, CardCol , ServiceSecClass }) => {
  return (
    <section className={ServiceSecClass || "frontend-services-sec"}>
      <div className="container">
        <div className="row justify-content-center frontend-services-headrow">
          <div className="col-lg-10">
            <div className="frontend-services-head">
              <h6 className="shorttop-head">{shortHead}</h6>
              <h2 className="mainhead text-white">{mainHead}</h2>
              <p>{description}</p>
            </div>
          </div>
        </div>

        <div className="mobapp-anotherhead d-none">
        <div className="row">
          <div className="col-lg-6">
                <div className="mobapp-service-head">
                  <h6 className="shorttop-head text-white">Our Services</h6>
                  <h2 className="mainhead text-white">Our Mobile App Development Services</h2>
                </div>
          </div>
          <div className="col-lg-6">
                <div className="mobapp-service-head">
                  <p>From concept to launch, we offer end-to-end mobile app development services that cater to your unique business needs. Our team of skilled developers and designers work collaboratively to create user-friendly, high-performance mobile applications that drive engagement and deliver exceptional user experiences.</p>
                </div>
          </div>
        </div>
        </div>

        <div className="row justify-content-center">
          {services?.map((item, index) => (
            <div key={index} className={CardCol || "col-lg-6 col-md-6"}>
              <div className={`frontend-service-card ${secCardClass}`}>
                <img src={item.img} alt={item.title} />
                <h4>{item.title}</h4>
                <p>{item.para}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="frontend-service-btn">
              <Link to={btnLink} className={btnClass || "ny-btn"}>
                {btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendServices;

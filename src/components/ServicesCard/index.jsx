import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div
      className={`our-services-card ${props?.variant}`}
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="our-services-card-content">
        <div className="our-services-card-header">
          <img
            src={props?.image}
            alt={props?.name}
            className="img-fluid"
          />
        </div>
        <div className="our-services-card-body">
          <h3>{props?.name}</h3>
          <p>{props?.description}</p>
        </div>
      </div>
      <Link to={props.link} target="_blank" className="ny-btn">
        Get Started
      </Link>
    </div>
  );
};

export default ServicesCard;

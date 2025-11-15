import React from "react";
import ContentWithIcon from "../ContentWithIcon";
import { TbChecks } from "react-icons/tb";
import { ourBenefitsContentIconData } from "../../data";
import { Link } from "react-router-dom";

const OurBenenfits = ({ minihead, mainhead, mainpara, para2, para3, btntxt, secClass,  leftItems = [], rightItems = [], }) => {
  return (
    <section className={`our-benefits clipedShaped-sec bg-gradiant ${secClass}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-lg-0 mb-5">
            <div className="web-creation-content">
              <p
                className="sec-tag mb-4"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {minihead}
              </p>
              <h3 data-aos="fade-up" data-aos-duration="2000">
                {mainhead}
              </h3>
              <p
                className="poppins pe-xl-5 me-xl-5 pe-0   me-0 another-benefit-para"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {mainpara}
              </p>
              {para2 && <p>{para2}</p>}
              {para3 && <p>{para3}</p>}
              
              <div
                className="d-flex flex-wrap gap-3 benefit-check-points"
                data-aos="fade-up"
                data-aos-duration="3000"
              >
                {leftItems.map((item, index) => (
                  <div className="content-with-icon-item flex-row" key={index}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h4>{item.name}</h4>
                      {item.description && <p>{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
              {btntxt && <Link to="/contact-us" className="ny-btn">{btntxt}</Link>}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="our_benefits-icons">
              <div className="row">
                {rightItems?.map((item, index) => (
                  <div
                    className="col-md-6 mb-4"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    key={index}
                  >
                    <ContentWithIcon
                      icon={item.icon}
                      name={item.name}
                      description={item.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBenenfits;

import React from "react";
import { MdArrowOutward } from "react-icons/md";
import portfolio1 from "../../assets/images/services/frontenddevelopment/portfolio1.webp";
import portfolio2 from "../../assets/images/services/frontenddevelopment/portfolio2.webp";
import portfolio3 from "../../assets/images/services/frontenddevelopment/portfolio3.webp";
import portfolio4 from "../../assets/images/services/frontenddevelopment/portfolio4.webp";
import { Link } from "react-router-dom";

const FrontendPortfolio = () => {
  return (
    <section className="frontend-portfolio-sec">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="frontend-service-head">
              <h6 className="shorttop-head">Portfolio</h6>
              <h2 className="mainhead">Our Goldmine of Front-End Work</h2>
              <p>Browse case studies where design and engineering converged, resulting in improved user metrics.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="frontend-portfolio-img">
              <img src={portfolio1} alt="img" />
              {/* <div className="portfolio-image-arrow">
                <span>
                  <MdArrowOutward />
                </span>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="frontend-portfolio-img">
              <img src={portfolio2} alt="img" />
              {/* <div className="portfolio-image-arrow">
                <span>
                  <MdArrowOutward />
                </span>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="frontend-portfolio-img">
              <img src={portfolio3} alt="img" />
              {/* <div className="portfolio-image-arrow">
                <span>
                  <MdArrowOutward />
                </span>
              </div> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="frontend-portfolio-img">
              <img src={portfolio4} alt="img" />
              {/* <div className="portfolio-image-arrow">
                <span>
                  <MdArrowOutward />
                </span>
              </div> */}
            </div>
          </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <div className="frontend-portfolio-btn">
                    <Link to="/portfolio" className="ny-btn">View All Portfolio</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default FrontendPortfolio;

import React from "react";
import PortfolioSection from "../PortfolioSection";

const ProjectSec = (props) => {
  const columns = props.projectsData.map((item) => item.imageList);
  return (
    <section className="projects-sec">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="sec-head mb-4">
              <p
                className="sec-tag"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                {props.secTag}
              </p>
              <h3 data-aos="fade-up" data-aos-duration="2000">
                {props.secTitle}
              </h3>
            </div>
          </div>
          {/* {props.projectsData.map((item, index) => (
            <div className="col-md-4 mb-md-0 mb-3" key={index}>
              <div className="projects-item d-flex flex-column gap-4">
                {item.imageList.map((image, imageKey) => (
                  <img
                    src={image}
                    className="img-fluid"
                    alt="project image 1"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={imageKey}
                  />
                ))}
              </div>
            </div>
          ))} */}
        </div>

        <PortfolioSection columns={columns} />
      </div>
    </section>
  );
};

export default ProjectSec;

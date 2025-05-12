import React from "react";

import projectsimg1 from "../../assets/images/projects-img-1.webp";
import projectsimg2 from "../../assets/images/projects-img-2.webp";
import projectsimg3 from "../../assets/images/projects-img-3.webp";
import projectsimg4 from "../../assets/images/projects-img-4.webp";
import projectsimg5 from "../../assets/images/projects-img-5.webp";
import projectsimg6 from "../../assets/images/projects-img-6.webp";

const ProjectSec = (props) => {
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
              <h2 data-aos="fade-up" data-aos-duration="2000">
                {props.secTitle}
              </h2>
            </div>
          </div>
          {props.projectsData.map((item, index) => (
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
                {/* <img
                  src={projectsimg2}
                  className="img-fluid"
                  alt="project image 2"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                /> */}
              </div>
            </div>
          ))}
          {/* <div className="col-md-4 mb-md-0 mb-3">
            <div className="projects-item d-flex flex-column gap-4">
              <img
                src={projectsimg3}
                className="img-fluid"
                alt="project image 3"
                data-aos="fade-up"
                  data-aos-duration="2000"
              />
              <img
                src={projectsimg4}
                className="img-fluid"
                alt="project image 4"
                data-aos="fade-up"
                  data-aos-duration="3000"
              />
            </div>
          </div>
          <div className="col-md-4 mb-md-0 mb-3">
            <div className="projects-item d-flex flex-column gap-4">
              <img
                src={projectsimg5}
                className="img-fluid"
                alt="project image 5"
                data-aos="fade-up"
                  data-aos-duration="2000"
              />
              <img
                src={projectsimg6}
                className="img-fluid"
                alt="project image 6"
                data-aos="fade-up"
                  data-aos-duration="3000"
              />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectSec;

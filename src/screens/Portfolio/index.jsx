import React, { useState } from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import ContactUsSec from "../../components/ContactUsSec";

import projectsimg1 from "../../assets/images/projects-img-1.png";
import projectsimg2 from "../../assets/images/projects-img-2.png";
import projectsimg3 from "../../assets/images/projects-img-3.png";
import projectsimg4 from "../../assets/images/projects-img-4.png";
import projectsimg5 from "../../assets/images/projects-img-5.png";
import projectsimg6 from "../../assets/images/projects-img-6.png";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Portfolio = () => {
  const [key, setKey] = useState("web-development");
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Portfolio" page="Portfolio" />

      <section className="get-inspired-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="sec-head text-center">
                {/* <p className="sec-tag">Pricing Plan</p> */}
                <h2>Get Inspired By Our Finest Work</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="web-development" title="Web Development">
                  <div className="row">
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="projects-item d-flex flex-column gap-4">
                        <img
                          src={projectsimg1}
                          className="img-fluid"
                          alt="project image 1"
                        />
                        <img
                          src={projectsimg2}
                          className="img-fluid"
                          alt="project image 2"
                        />
                        <img
                          src={projectsimg1}
                          className="img-fluid"
                          alt="project image 1"
                        />
                        <img
                          src={projectsimg2}
                          className="img-fluid"
                          alt="project image 2"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="projects-item d-flex flex-column gap-4">
                        <img
                          src={projectsimg3}
                          className="img-fluid"
                          alt="project image 3"
                        />
                        <img
                          src={projectsimg4}
                          className="img-fluid"
                          alt="project image 4"
                        />
                        <img
                          src={projectsimg3}
                          className="img-fluid"
                          alt="project image 3"
                        />
                        <img
                          src={projectsimg4}
                          className="img-fluid"
                          alt="project image 4"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div className="projects-item d-flex flex-column gap-4">
                        <img
                          src={projectsimg5}
                          className="img-fluid"
                          alt="project image 5"
                        />
                        <img
                          src={projectsimg6}
                          className="img-fluid"
                          alt="project image 6"
                        />
                        <img
                          src={projectsimg5}
                          className="img-fluid"
                          alt="project image 5"
                        />
                        <img
                          src={projectsimg6}
                          className="img-fluid"
                          alt="project image 6"
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="video-animation" title="Video Animation">
                  Video Animation
                </Tab>
                <Tab eventKey="ui-ux-design" title="UI/Ux Design">
                  UI/Ux Design
                </Tab>
                <Tab eventKey="content-writting" title="Content Writting">
                  Content Writting
                </Tab>
                <Tab eventKey="logo-design" title="Logo Design">
                  Logo Design
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSec />
      <BlogSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default Portfolio;

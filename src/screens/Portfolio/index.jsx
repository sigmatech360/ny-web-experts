import React, { useState } from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import ContactUsSec from "../../components/ContactUsSec";

import projectsimg1 from "../../assets/images/projects-img-1.webp";
import projectsimg2 from "../../assets/images/projects-img-2.webp";
import projectsimg3 from "../../assets/images/projects-img-3.webp";
import projectsimg4 from "../../assets/images/projects-img-4.webp";
import projectsimg5 from "../../assets/images/projects-img-5.webp";
import projectsimg6 from "../../assets/images/projects-img-6.webp";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import blogimg1 from "../../assets/images/blog-img-1.webp";
import blogimg2 from "../../assets/images/blog-img-2.webp";
import blogimg3 from "../../assets/images/blog-img-3.webp";

const blogCardsData = [
  {
    id: 1,
    image: blogimg1,
    name: "Why a Professional Website Design Is Crucial for Your Business",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 2,
    image: blogimg2,
    name: "How to Choose the Right Website Design Company in New York",
    description:
      "Looking for a website design company in New York? Learn what to consider when hiring experts to build your online presence correctly.",
  },
  {
    id: 3,
    image: blogimg3,
    name: "Custom Website Design vs. Templates: What’s Best for You?",
    description:
      "Explore the pros and cons of custom website design and templates, and find out which solution fits your brand, goals, and budget.",
  },
  // {
  //   id: 4,
  //   image: blogimg1,
  //   name: "Top Benefits of Responsive Web Design in 2025",
  //   description:
  //     "With mobile users rising, responsive web design ensures your site looks great on any device. Learn why it's essential for modern businesses.",
  // },
  // {
  //   id: 5,
  //   image: blogimg2,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 6,
  //   image: blogimg3,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 7,
  //   image: blogimg1,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 8,
  //   image: blogimg2,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 9,
  //   image: blogimg3,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
];

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
                <h2 data-aos="fade-up" data-aos-duration="1000">
                  Get Inspired By Our Finest Work
                </h2>
                <p data-aos="fade-up" data-aos-duration="2000">
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
            <div
              className="col-md-12"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab eventKey="web-development" title="Web Development">
                  <div className="row">
                    <div className="col-md-4 mb-md-0 mb-3">
                      <div
                        className="projects-item d-flex flex-column gap-4"
                        data-aos="fade-right"
                        data-aos-duration="2000"
                      >
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
                      <div
                        className="projects-item d-flex flex-column gap-4"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
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
                      <div
                        className="projects-item d-flex flex-column gap-4"
                        data-aos="fade-left"
                        data-aos-duration="2000"
                      >
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
      <BlogSec blogCardsData={blogCardsData} />
      <GetStarted />
    </DefaultLayout>
  );
};

export default Portfolio;

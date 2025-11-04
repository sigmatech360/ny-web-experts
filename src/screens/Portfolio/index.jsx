import React, { useState } from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import ContactUsSec from "../../components/ContactUsSec";

// import projectsimg1 from "../../assets/images/projects-img-1.webp";
// import projectsimg2 from "../../assets/images/projects-img-2.webp";
// import projectsimg3 from "../../assets/images/projects-img-3.webp";
// import projectsimg4 from "../../assets/images/projects-img-4.webp";
// import projectsimg5 from "../../assets/images/projects-img-5.webp";
// import projectsimg6 from "../../assets/images/projects-img-6.webp";

import portfolioprojectsimg1 from "../../assets/images/portfolio-projects-img-1.webp";
import portfolioprojectsimg2 from "../../assets/images/portfolio-projects-img-2.webp";
import portfolioprojectsimg3 from "../../assets/images/portfolio-projects-img-3.webp";
import portfolioprojectsimg4 from "../../assets/images/portfolio-projects-img-4.webp";
import portfolioprojectsimg5 from "../../assets/images/portfolio-projects-img-5.webp";
import portfolioprojectsimg6 from "../../assets/images/portfolio-projects-img-6.webp";
import portfolioprojectsimg7 from "../../assets/images/portfolio-projects-img-7.webp";
import portfolioprojectsimg8 from "../../assets/images/portfolio-projects-img-8.webp";
import portfolioprojectsimg9 from "../../assets/images/portfolio-projects-img-9.webp";
import portfolioprojectsimg10 from "../../assets/images/portfolio-projects-img-10.webp";
import portfolioprojectsimg11 from "../../assets/images/portfolio-projects-img-11.webp";
import portfolioprojectsimg12 from "../../assets/images/portfolio-projects-img-12.webp";

import projectsimg1 from "../../assets/images/services-logoDesign-projects-img-1.webp";
import projectsimg2 from "../../assets/images/services-logoDesign-projects-img-2.webp";
import projectsimg3 from "../../assets/images/services-logoDesign-projects-img-3.webp";
import projectsimg4 from "../../assets/images/services-logoDesign-projects-img-4.webp";
import projectsimg5 from "../../assets/images/services-logoDesign-projects-img-5.webp";
import projectsimg6 from "../../assets/images/services-logoDesign-projects-img-6.webp";

import cmsProjectsimg1 from "../../assets/images/services-cms-Dev-projects-img-1.webp";
import cmsProjectsimg2 from "../../assets/images/services-cms-Dev-projects-img-2.webp";
import cmsProjectsimg3 from "../../assets/images/services-cms-Dev-projects-img-3.webp";
import cmsProjectsimg4 from "../../assets/images/services-cms-Dev-projects-img-4.webp";
import cmsProjectsimg5 from "../../assets/images/services-cms-Dev-projects-img-5.webp";
import cmsProjectsimg6 from "../../assets/images/services-cms-Dev-projects-img-6.webp";

import mobileAppprojectsimg1 from "../../assets/images/services-mobileAppDev-projects-img-1.webp";
import mobileAppprojectsimg2 from "../../assets/images/services-mobileAppDev-projects-img-2.webp";
import mobileAppprojectsimg3 from "../../assets/images/services-mobileAppDev-projects-img-3.webp";
import mobileAppprojectsimg4 from "../../assets/images/services-mobileAppDev-projects-img-4.webp";
import mobileAppprojectsimg5 from "../../assets/images/services-mobileAppDev-projects-img-5.webp";
import mobileAppprojectsimg6 from "../../assets/images/services-mobileAppDev-projects-img-6.webp";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import blogimg1 from "../../assets/images/blog-img-1.webp";
import blogimg2 from "../../assets/images/blog-img-2.webp";
import blogimg3 from "../../assets/images/blog-img-3.webp";
import PortfolioSection from "../../components/PortfolioSection";
import ReactHelmet from "../../components/ReactHelmet";

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
];

const portfolioColumns = [
  [
    portfolioprojectsimg1,
    portfolioprojectsimg2,
    portfolioprojectsimg3,
    portfolioprojectsimg4,
  ],
  [
    portfolioprojectsimg5,
    portfolioprojectsimg6,
    portfolioprojectsimg7,
    portfolioprojectsimg8,
  ],
  [
    portfolioprojectsimg9,
    portfolioprojectsimg10,
    portfolioprojectsimg11,
    portfolioprojectsimg12,
  ],
];

const logoColumns = [
  [projectsimg1, projectsimg2],
  [projectsimg3, projectsimg4],
  [projectsimg5, projectsimg6],
];
const cmsColumns = [
  [cmsProjectsimg1, cmsProjectsimg2],
  [cmsProjectsimg3, cmsProjectsimg4],
  [cmsProjectsimg5, cmsProjectsimg6],
];
const mobileAppColumns = [
  [mobileAppprojectsimg1, mobileAppprojectsimg2],
  [mobileAppprojectsimg3, mobileAppprojectsimg4],
  [mobileAppprojectsimg5, mobileAppprojectsimg6],
];

const Portfolio = () => {
  const [key, setKey] = useState("custom-web-development");

  return (
    <>
      <ReactHelmet
        title="Portfolio Showcase - See Our Custom Web & App Projects"
        description="Explore our portfolio of innovative web and mobile projects. Ready to create something amazing? Check out our work and start your project today!"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/portfolio"
      />
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
                 Discover how we turn ideas into impactful digital experiences. Our portfolio showcases the creativity, precision, and innovation that define every project we deliver. From sleek websites to robust applications, our work speaks for itself, inspiring brands to grow and thrive in the digital world.
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
                <Tab
                  eventKey="custom-web-development"
                  title="Custom Web Development"
                >
                  <PortfolioSection columns={portfolioColumns} />
                </Tab>
                <Tab
                  eventKey="mobile-app-development"
                  title="Mobile App Development"
                >
                  <PortfolioSection columns={mobileAppColumns} />
                </Tab>
                <Tab eventKey="cms-development" title="CMS Development">
                  <PortfolioSection columns={cmsColumns} />
                </Tab>
                <Tab eventKey="logo-design" title="Logo Design">
                  <PortfolioSection columns={logoColumns} />
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSec />
      <BlogSec blogCardsData={blogCardsData} itemsPerPage={3} />
      <GetStarted />
    </DefaultLayout>
    </>
  );
};

export default Portfolio;

import React, { useRef, useEffect } from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import aboutimg1 from "../../assets/images/about-img1.webp";
import aboutimg2 from "../../assets/images/about-img2.webp";
import digitalproductuiuximg from "../../assets/images/digital-product-uiux-img.webp";

import blogimg1 from "../../assets/images/blog-img-1.webp";
import blogimg2 from "../../assets/images/blog-img-2.webp";
import blogimg3 from "../../assets/images/blog-img-3.webp";

import { TbChecks } from "react-icons/tb";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import OurTeamSec from "../../components/OurTeamSec";
import PurpleBGSec from "../../components/PurpleBGSec";

import MouseHoverImg from "../../components/MouseHoverImg";
import { Link } from "react-router-dom";
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
  {
    id: 4,
    image: blogimg1,
    name: "Top Benefits of Responsive Web Design in 2025",
    description:
      "With mobile users rising, responsive web design ensures your site looks great on any device. Learn why it's essential for modern businesses.",
  },
];

const About = () => {
  return (
    <>
      <ReactHelmet
        title="New York Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/about"
      />
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="About" page="About" />

      <section className="about-us-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="about-us-left">
                <div className="row">
                  <div className="col-6">
                    <div className="about-us-left-content">
                      <MouseHoverImg
                        image={aboutimg1}
                        aosProps={{
                          "data-aos": "fade-right",
                          "data-aos-duration": "2000",
                        }}
                      />
                      <div
                        className="about-us-experience"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                      >
                        <h3>30+ Years</h3>
                        <p>OF EXPERIENCE</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <MouseHoverImg
                      image={aboutimg2}
                      aosProps={{
                        "data-aos": "fade-left",
                        "data-aos-duration": "2000",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="web-creation-content ps-xl-2 ms-xl-2 ps-0 ms-0">
                <p className="sec-tag purpleColor mb-4">About Us</p>
                <h3 data-aos="fade-up" data-aos-duration="2000">
                  Custom Web Solutions
                </h3>
                <p
                  className="poppins"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  NY Web Experts is a full-service digital solutions company
                  founded with a passion for helping businesses grow and succeed
                  online. With expertise in Website Development, CMS
                  Development, Digital Marketing, Social Media Marketing, Logo
                  Design, and SEO in New York, we help brands thrive digitally.
                  Trusted by startups and established companies, we’re committed
                  to delivering innovative, high-quality services that provide
                  lasting growth.
                </p>

                <h4
                  className="purpleColor mb-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  The Professional Approach To Digital Excellence
                </h4>

                <div
                  className="d-flex flex-wrap gap-3 mb-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Smart Digital Strategy</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Creative Web Design</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Modern Web Build</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>SEO & Optimization</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>

                <Link
                to={"/services"}
                  className="ny-btn"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PurpleBGSec secClass="digital-product" clipVariant="reverse">
        <div className="col-lg-6">
          <div className="digital-product-content">
            <h3 data-aos="fade-up" data-aos-duration="1000">
              Full-Stack Design & Development For Ambitious Businesses
            </h3>
            <p
              className="poppins whiteColor"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              At NY Web Experts, we provide full-stack enablement to businesses
              that are passionate about growth. From attractive front-end
              development to robust back-end development, our team is all about
              creating custom solutions that scale with your growth. We provide
              comprehensive, cutting-edge design and development services to
              support your unique goals and drive success in today's competitive
              digital landscape.
            </p>
            <Link
              to={"/contact-us"}
              className="ny-btn"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="col-lg-6 mb-lg-0 mb-3">
          <div className="digital-product-img">
            <img
              src={digitalproductuiuximg}
              className="img-fluid"
              alt="digital product image"
              data-aos="fade-left"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </PurpleBGSec>

      <TestimonialSec
        secTag="Testimonials"
        secTitle="When Our Clients Win, We Win"
      />

      <OurTeamSec secTitle="Meet The Dream Team For Success & Growth" />

      <BlogSec
        secTitle="Latest Trends & Insights, All From The Blog"
        blogCardsData={blogCardsData}
      />
      <GetStarted secTitle="Got An Idea? Let’s Discuss" secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue." btnText="Book A Call" />
    </DefaultLayout>
    </>
  );
};

export default About;

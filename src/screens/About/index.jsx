import React, { useRef, useEffect } from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import aboutimg1 from "../../assets/images/about-img1.webp";
import aboutimg2 from "../../assets/images/about-img2.webp";
import digitalproductuiuximg from "../../assets/images/digital-product-uiux-img.webp";

import { TbChecks } from "react-icons/tb";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import OurTeamSec from "../../components/OurTeamSec";
import PurpleBGSec from "../../components/PurpleBGSec";

import MouseHoverImg from "../../components/MouseHoverImg";

const About = () => {
  return (
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
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Get to Know About Digital Agency.
                </h2>
                <p
                  className="poppins"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>

                <h4
                  className="purpleColor mb-3"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  The Professional Approach To Development.
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
                      <h5>Lorem Ipsum is simply</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Lorem Ipsum is simply</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Lorem Ipsum is simply</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Lorem Ipsum is simply</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>

                <button
                  className="ny-btn"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Discover More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PurpleBGSec secClass="digital-product" clipVariant="reverse">
        <div className="col-lg-6">
          <div className="digital-product-content">
            <h2 data-aos="fade-up" data-aos-duration="1000">
              We are a digital product and user experience design agency
            </h2>
            <p
              className="poppins whiteColor"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button
              className="ny-btn"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              Contact Us
            </button>
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

      <TestimonialSec />
      <OurTeamSec />
      <BlogSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default About;

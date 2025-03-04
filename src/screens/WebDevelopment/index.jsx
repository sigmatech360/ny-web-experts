import React from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import WebCreationSec from "../../components/WebCreationSec";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";
import {
  ourBenefitsContentIconData,
  outstandingStretagyContentIconData,
} from "../../data";
import ContentWithIcon from "../../components/ContentWithIcon";

const WebDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Web Development"
        page="Services"
      />

      <section className="outstanding-strategy">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 mb-4">
              <div class="sec-head text-center">
                {/* <p class="sec-tag">Our Testimonials</p> */}
                <h2>
                  An Outstanding Strategy, Design, And Development Across All
                  Platforms
                </h2>
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
            <div className="col-lg-6">
              <div className="our_benefits-icons">
                <div className="row">
                  {outstandingStretagyContentIconData.map((item, index) => (
                    <div className="col-md-6 mb-4" key={index}>
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
            <div className="col-lg-6">
              <div className="web-creation-content">
                <h2>
                  We Fuel The Growth Of Purpose Driven Brands Through Strategy
                  Design Empowerment, And Market Adoption.
                </h2>
                <p className="grayColor poppins">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <button className="ny-btn">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebCreationSec />
      <ProjectSec />

      <OurTeamSec />

      <TestimonialSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default WebDevelopment;

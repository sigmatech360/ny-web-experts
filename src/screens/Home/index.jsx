import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import premierdesignstudioimg from "../../assets/images/premier-design-studio-img.webp";
import designanddevimg from "../../assets/images/design-and-dev-img.webp";
import ContentWithIcon from "../../components/ContentWithIcon";
import { TbChecks } from "react-icons/tb";
import ServicesCard from "../../components/ServicesCard";

import PricePlanCard from "../../components/PricePlanCard";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import WebCreationSec from "../../components/WebCreationSec";
import ProjectSec from "../../components/ProjectSec";
import ContactUsSec from "../../components/ContactUsSec";

import {
  premierDesignStudioIcon,
  servicesInfoSec,
  ourServicesData,
  ourBenefitsContentIconData,
  pricingPlan,
} from "../../data";
import PurpleBGSec from "../../components/PurpleBGSec";
import GetCustomLogo from "../../components/GetCustomLogo";

import MainBanner from "../../components/MainBanner";

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="premier-design-studio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  A premier New York-based design studio
                </h1>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img
                  src={premierdesignstudioimg}
                  alt="A premier New York-based design studio"
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Websites and branding that set the groundwork for successful
                  marketing
                </h2>
                <p data-aos="fade-up" data-aos-duration="2000">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div
                  className="row mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {premierDesignStudioIcon.map((item, index) => (
                    <div className="col-md-6 mb-md-0 mb-3" key={index}>
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

      <GetCustomLogo className="mb-5" />

      <WebCreationSec />

      <section className="services-info-sec">
        <div className="container">
          <div className="row">
            {servicesInfoSec.map((item, index) => (
              <div
                className="col-lg-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <ContentWithIcon
                  variant="row"
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-services-sec clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="sec-head mb-4">
                <p
                  className="sec-tag"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Services
                </p>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Services We Offer
                </h2>
              </div>
            </div>
            {ourServicesData.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <ServicesCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSec />

      <section className="our-benefits clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="web-creation-content">
                <p
                  className="sec-tag mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Benefits
                </p>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Why You Should Choose us.
                </h2>
                <p
                  className="poppins pe-xl-5 me-xl-5 pe-0   me-0"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div
                  className="d-flex flex-wrap gap-3"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Top cloud expertise</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Reliable web development</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our_benefits-icons">
                <div className="row">
                  {ourBenefitsContentIconData.map((item, index) => (
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

      <TestimonialSec />

      <PurpleBGSec
        secClass="pricing-plan-sec"
        clipVariant="reverse"
        tag="Pricing Plan"
        title="Your Partner For Software Innovation"
      >
        {pricingPlan.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <PricePlanCard
              name={item.name}
              price={item.price}
              description={item.description}
              list={item.list}
            />
          </div>
        ))}
      </PurpleBGSec>

      <section className="premier-design-studio design_and_development_all-platforms">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Design and development across all platforms
                </h1>
                <p
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  We fuel the growth of purpose driven brands through strategy
                  activation, design empowerment, and market adoption.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img
                  src={designanddevimg}
                  alt="Design and development across all platforms"
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  We’re design-focused across every product that people love to
                  use
                </h2>
                <p data-aos="fade-up" data-aos-duration="3000">
                  We create human-centered enterprise software that has the
                  polished, snappy feel of the best consumer apps.
                </p>
                <div
                  className="row mt-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {premierDesignStudioIcon.map((item, index) => (
                    <div className="col-md-6 mb-md-0 mb-3" key={index}>
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

      <ContactUsSec />
      <BlogSec itemsPerPage={3} />
      <GetStarted />
    </DefaultLayout>
  );
};

export default Home;

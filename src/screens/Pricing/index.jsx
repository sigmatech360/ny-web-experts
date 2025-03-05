import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import ContactUsSec from "../../components/ContactUsSec";
import GetStarted from "../../components/GetStarted";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { ourBenefitsContentIconData, pricingPlan } from "../../data";
import PricePlanCard from "../../components/PricePlanCard";

import { TbChecks } from "react-icons/tb";
import ContentWithIcon from "../../components/ContentWithIcon";

const Pricing = () => {
  const [key, setKey] = useState("web-development");
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Pricing" page="Pricing" />

      <section className="get-inspired-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="sec-head text-center">
                <p className="sec-tag">Pricing Plan</p>
                <h2>Your Partner For Software Innovation</h2>
                <p>
                  While We Understand Our Competitive Landscape, Our Core Value
                  Lies In Providing Quality Over Quantity. Our Transparent And
                  Fair Logo Design Pricing Packages, Including Our Entire Range
                  Of Branding And Web Design Services, Ensure You Find The
                  Perfect Fit For Your Budget And Brand Needs. We Prioritize
                  Dedicated Effort And Personalized Attention, Guaranteeing
                  Unique And Impactful Solutions For Each Brand, Unlike Those
                  Focused On Quantity.
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
                    {pricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                        />
                      </div>
                    ))}
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

      <section className="our-benefits our-benefits-pricing">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="web-creation-content">
                <p className="sec-tag purpleColor mb-4">Our Benefits</p>
                <h2>Why You Should Choose us.</h2>
                <p className="poppins grayColor pe-xl-5 me-xl-5 pe-0 me-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className={`content-with-icon-item blue-icon flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Top Design Freedom</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item blue-icon flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Create Value Strategy</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our_benefits-icons our_benefits-icons-pricing">
                <div className="row">
                  {ourBenefitsContentIconData.map((item, index) => (
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
          </div>
        </div>
      </section>

      <GetStarted />
    </DefaultLayout>
  );
};

export default Pricing;

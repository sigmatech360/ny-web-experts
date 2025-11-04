import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import ContactUsSec from "../../components/ContactUsSec";
import GetStarted from "../../components/GetStarted";

import FormModal from "../../components/FormModal";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import {
  brandingPricingPlan,
  eCommercePricingPlan,
  logoDesignPricingPlan,
  maintenancePricingPlan,
  ourBenefitsContentIconData,
  pricingPlan,
  seoPricingPlan,
  webPackagesPricingPlan,
  webPortalPricingPlan,
} from "../../data";
import PricePlanCard from "../../components/PricePlanCard";

import { TbChecks } from "react-icons/tb";
import ContentWithIcon from "../../components/ContentWithIcon";
import ReactHelmet from "../../components/ReactHelmet";

const Pricing = () => {
  const [key, setKey] = useState("logo-design");
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <ReactHelmet
        title="Affordable Pricing - Transparent Rates for Web Solutions"
        description="Affordable Pricing - Transparent Rates for Web Solutions"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/pricing"
      />
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
                  While we understand our competitive landscape, our core value lies in providing quality over quantity. Our transparent and fair design & development packages, including our entire range of branding, web design and other services, ensure you find the perfect fit for your budget and brand needs. We prioritize dedicated effort and personalized attention, guaranteeing unique and impactful solutions for each brand, unlike those focused on quantity.
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
                <Tab eventKey="logo-design" title="Logo Design Packages">
                  <div className="row justify-content-center">
                    {logoDesignPricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="web-packages" title="Web Packages">
                  <div className="row">
                    {webPackagesPricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="eCommerce-packages" title="E-Commerce Packages">
                  <div className="row">
                    {eCommercePricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="branding-packages" title="Branding Packages">
                  <div className="row">
                    {brandingPricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>

                <Tab eventKey="web-portal-packages" title="Web Portal Packages">
                  <div className="row justify-content-center">
                    {webPortalPricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="seoPackages" title="SEO Packages">
                  <div className="row">
                    {seoPricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
                </Tab>
                <Tab
                  eventKey="maintenance-packages"
                  title="Maintenance Packages"
                >
                  <div className="row justify-content-center">
                    {maintenancePricingPlan.map((item, index) => (
                      <div className="col-lg-4 mb-4" key={index}>
                        <PricePlanCard
                          variant="gray"
                          name={item.name}
                          price={item.price}
                          description={item.description}
                          list={item.list}
                          onClick={() => setShowModal(true)}
                        />
                      </div>
                    ))}
                  </div>
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
                <p className="sec-tag purpleColor mb-4">Other Benefits</p>
                <h2>Why You Should Choose us.</h2>
                <p className="poppins grayColor pe-xl-5 me-xl-5 pe-0 me-0">
                  We combine creativity, technology, and strategy to deliver high-quality digital solutions tailored to your business goals. With a focus on performance, design, and user experience, we ensure every project is delivered with precision and care, helping your brand stand out and succeed in the digital space.
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
      <FormModal show={showModal} handleClose={() => setShowModal(false)} />
    </DefaultLayout>
    </>
  );
};

export default Pricing;

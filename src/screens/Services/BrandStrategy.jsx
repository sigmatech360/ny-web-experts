import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/brandstrategy/herobanner.webp";
import aboutimg from "../../assets/images/services/brandstrategy/aboutimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FormModal from "../../components/FormModal";
import BrandStrategyService from "../../components/BrandStrategyService";
import BrandStrategyProcess from "../../components/BrandStrategyProcess";
import BrandStrategyChooseUs from "../../components/BrandStrategyChooseUs";
import BrandStrategyExpertise from "../../components/BrandStrategyExpertise";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import ReactHelmet from "../../components/ReactHelmet";




const BrandStrategy = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ReactHelmet
        title="Brand Strategy Development in New York"
        description="Partner with New York Web Experts to design effective brand strategies that define your identity, position your business for success, and create long-lasting audience impact."
        keywords="brand strategy new york, brand strategy agency new york, brand strategy services new york, brand strategy development new york"
        url="https://nywebexperts.com/brand-strategy"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={herobanner}
          title="Brand Strategies That Talk Smart, Look Good, And Get Heard"
          description="Brand strategy in New York is not simple, and it is not just planning. It is the architecture that builds meaning behind your identity. At New York Web Experts, we design strategies that feel intentional, memorable, and emotionally intelligent. We help you stand out in competitive markets with clarity and purpose that transforms brands into leaders, not followers."
          cta1="Book a Strategy Session"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="Making Brands Relatable, Fun,"
          secTitle2="And Totally Unforgettable"
          description="Our brand strategy services in New York turn ideas into cohesive brand strategies that resonate. By understanding your audience, story, and market, we create plans that align every digital touchpoint. From tone to visuals, our strategies make your brand recognizable, relatable, and ready to grow confidently in competitive environments."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About New York Web Experts"
          aboutbtnlink="/about"
        />

        <section className="growbrand-sec">
          <div className="container">
            <div className="grow-brand-background">
              <div className="row">
                <div className="col-lg-7">
                  <div className="grow-brand-txt">
                    <h2 className="mainhead text-white">
                      Create A Brand People Will Remember
                    </h2>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="grow-brand-btn">
                    <button
                      className="ny-btn"
                      onClick={() => setShowModal(true)}
                    >
                      Discuss With An Expert
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FormModal show={showModal} handleClose={() => setShowModal(false)} />
        </section>

        <BrandStrategyService />

        <BrandStrategyProcess />

        <BrandStrategyChooseUs />

        <BrandStrategyExpertise />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Pick Your Package"
          secPara="We offer flexible, scalable branding packages to meet businesses at any stage. From startups to established enterprises, our plans provide strategy, creativity, and measurable results, ensuring every dollar invested drives lasting brand value and recognition."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Start Your Brand Journey" />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Insights Related to Websites, Web Apps, and More"
          itemsPerPage={3}
        />

        <GetStarted
          secTitle="Start Selling Online Today"
          secDescription="Let’s create an e-commerce website that grows your brand, simplifies your management, and increases sales across every channel."
          btnText="Chat With Us"
        />
      </DefaultLayout>
    </>
  );
};

export default BrandStrategy;

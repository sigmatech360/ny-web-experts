import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/frontenddevelopment/aboutimg.webp";
import heroabanner from "../../assets/images/services/frontenddevelopment/herobanner.webp";
import chooseimg from "../../assets/images/services/frontenddevelopment/chooseimg.webp";
import FrontendServices from "../../components/FrontendServices";
import GetCustomLogo from "../../components/GetCustomLogo";
import FrontendPortfolio from "../../components/FrontendPortfolio";
import FrontendExpertise from "../../components/FrontendExpertise";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";

const FrontendDevelopment = () => {
  return (
    <>
      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner"
          formClass="service-form"
          bgImage={heroabanner}
          title="Get Yourself an E-Commerce Platfrom That Never Stops Selling"
          description="At New York Web Experts, we specialize in e-commerce website development that keeps your store running smoothly. From smart backend management to flawless checkout experiences, our e-commerce website development services in New York ensure your operations stay fast, secure, and scalable. We turn your ideas into online stores that effortlessly sell 24/7."
          cta1="Speak to a Web Expert"
          cta2="hehe"
        />

        <section className="clients-data-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-center">
                  <div className="col-lg-3">
                    <div className="client-data-txt">
                      <p>750+ Digital Experts</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="client-data-txt">
                      <p>29-Year Track Record</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="client-data-txt">
                      <p>1,100+ Reviews</p>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="client-data-txt">
                      <p>In-House Technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="100+ E-Commerce Websites,"
          secTitle2="Millions of Products Sold"
          description="We’re an e-commerce website development company in New York trusted by many businesses that don’t chase quick results, but long-term value. Our team has launched over 100 fully functional online stores that automate workflows, simplify inventory control, and boost conversions. We design systems that never crash, never slow down, and always sell"
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About New York Web Experts"
          aboutbtnlink="/about"
        />

        <FrontendServices />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner frontend-choose-sec"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Why Choose Us For Front End Development"
          secTitle2="In New York?"
          description="We’re an e-commerce website development company in New York trusted by many businesses that don’t chase quick results, but long-term value. Our team has launched over 100 fully functional online stores that automate workflows, simplify inventory control, and boost conversions. We design systems that never crash, never slow down, and always sell"
          chooseParaItems={[
            {
              spanText: "Over 10 Years of Expertise",
              text: "– We have empowered hundreds of businesses to grow and succeed online with our proven e-commerce solutions.",
            },
            {
              spanText: "Affordable & Transparent Pricing ",
              text: "– Enjoy premium development services tailored to your budget with no hidden costs.",
            },
            {
              spanText: "SEO-Optimized Online Stores",
              text: "– We have empowered hundreds of businesses to grow and succeed online with our proven e-commerce solutions.",
            },
            {
              spanText: "Reliable 24/7 Support & Maintenance",
              text: "– Enjoy premium development services tailored to your budget with no hidden costs.",
            },
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About New York Web Experts"
          aboutbtnlink="/about"
        />

        <GetCustomLogo
          className="mb-5"
          maintxt="Leading Design & Development Agency in New York"
        />

        <FrontendPortfolio />

        <FrontendExpertise />

        <TabsPricing
          minihead="Pricing Plan"
          mainhead="E-Commerce Web Development Packages"
          secPara="Choose from flexible packages designed for startups, growing brands, and enterprise businesses. Every plan includes full-stack e-commerce development, testing, and post-launch support."
          tabsData={dynamictabsData}
        />

        <ContactUsSec secTitle="Let Us Reach You" />

        <BlogSec
          blogminihead="Blogs & Updates"
          secTitle="Get Insights on Latest Trends and Business Flow"
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

export default FrontendDevelopment;

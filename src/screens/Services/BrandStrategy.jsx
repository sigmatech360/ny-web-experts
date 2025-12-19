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
import detailapproach from "../../assets/images/services/brandstrategy/detailapproach.svg";
import expertteam from "../../assets/images/services/brandstrategy/expertteam.svg";
import datainformed from "../../assets/images/services/brandstrategy/datainformed.svg";
import bulb from "../../assets/images/services/brandstrategy/bulb.svg";

const BrandStrategy = () => {
  const [showModal, setShowModal] = useState(false);

  const expertiseBoxes = [
    {
      num: "01",
      title: "Our Vision:",
      desc: "To empower businesses with memorable brands that inspire trust, loyalty, and lasting impact globally.",
    },
    {
      num: "02",
      title: "Our Mission",
      desc: "The mission of our brand strategy services in New York is to build creative brand strategies that connect audiences with purpose, personality, and clarity.",
    },
    {
      num: "01",
      title: "Our Vision:",
      desc: "To empower businesses with memorable brands that inspire trust, loyalty, and lasting impact globally.",
    },
    {
      num: "02",
      title: "Our Mission",
      desc: "The mission of our brand strategy services in New York is to build creative brand strategies that connect audiences with purpose, personality, and clarity.",
    },
  ];

  const faqs = [
    {
      header: "Brand Voice",
      content: "Helping you maintain a consistent brand voice across platforms",
    },
    {
      header: "Brand Identity Design",
      content: "We build your identity from scratch, or give you a new one!",
    },
    {
      header: "Merchandising",
      content:
        "We create your offline and online personality through thoughtful merchandising.",
    },
    {
      header: "Brand Positioning",
      content:
        "Increasing your brand credibility and positioning you as the leader in your niche.",
    },
    {
      header: "Website Design",
      content:
        "Intuitive website designs for your brand that are functional and beautiful!",
    },
    {
      header: "Social Media Marketing",
      content:
        "Beyond websites, we ensure your digital presence remains flawless on social media too!",
    },
  ];

  const chooseitemlist = [
    {
      img: detailapproach,
      title: "Detailed Approach:",
      desc: "We integrate strategy, design, and marketing to ensure every touchpoint strengthens your brand voice and identity effectively.",
    },
    {
      img: expertteam,
      title: "Expert Team:",
      desc: "Our creative strategists and designers combine insight with industry experience, delivering strategies that drive results, not just visuals.",
    },
    {
      img: datainformed,
      title: "Data-Informed Decisions:",
      desc: "We blend creativity with analytics, ensuring messaging resonates and campaigns perform, giving measurable growth and engagement.",
    },
    {
      img: bulb,
      title: "Custom Solutions:",
      desc: "Every brand is unique. We tailor strategies and visuals specifically to your audience, story, and long-term growth goals.",
    },
  ];

  const processItems = [
    {
      step: "01",
      title: "Discovery:",
      desc: "We research your mission, audience, and competition to gather actionable insights that inform strategy and messaging.",
    },
    {
      step: "02",
      title: "Brand Mapping:",
      desc: "We define tone, style, and personality to ensure every message feels human, relatable, and consistent.",
    },
    {
      step: "03",
      title: "Positioning:",
      desc: "We carve your unique space in the market to stand out and attract the right audience.",
    },
    {
      step: "04",
      title: "Execution Planning:",
      desc: "We create a roadmap for campaigns, visuals, and content to implement your brand strategy seamlessly.",
    },
  ];
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
          secClass="location-hero-banner wordpress-banner"
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

        <BrandStrategyService
          miniHead="360° Branding"
          mainHead="Our Brand Building Services"
          description="A Brand Strategy is built on a comprehensive plan that covers every detail of marketing and execution. Here’s what we include:"
          buttonText="Consult A Strategist"
          buttonLink="/contact-us"
          faqs={faqs}
        />

        <BrandStrategyProcess
          shortTopHead="The Strategic Process"
          mainHead="How We Take Your Voice From Blah To Bold"
          description="Every brand comes to us with a different story to tell. Our goal? To make your unique story sell among and beyond your audience. And here’s how we do it."
          processItems={processItems}
        />

        <BrandStrategyChooseUs
          shortTopHead="Why Choose Us?"
          mainHead="Experience, Creativity, And Strategy That Elevate Brands"
          description="A well-thought-out strategy can only be made when it’s backed by the right team, the right approach, and the right solutions. As trusted experts, our brand strategy services in New York cover the following aspects:"
          chooseItems={chooseitemlist}
        />

        <BrandStrategyExpertise
          heading="Our Expertise"
          subheading="The Strategy Behind Successful Brands"
          description="A brand strategy made by experts builds the foundation your business grows on. It shapes how people see you, remember you, and choose you among endless options. With a clear brand strategy, you step into industry leadership and create long-term value in your audience’s mind. This makes every marketing effort stronger, smarter, and more profitable."
          boxes={expertiseBoxes}
        />

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

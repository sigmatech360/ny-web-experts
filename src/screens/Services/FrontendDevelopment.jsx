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
import ReactHelmet from "../../components/ReactHelmet";
import custom from "../../assets/images/services/frontenddevelopment/custom.svg";
import screens from "../../assets/images/services/frontenddevelopment/screens.svg";
import uiux from "../../assets/images/services/frontenddevelopment/uiux.svg";
import javascript from "../../assets/images/services/frontenddevelopment/javascript.svg";

const FrontendDevelopment = () => {
  const frontendservices = [
    {
      img: custom,
      title: "CMS Development",
      para: "Every great website starts with a smart foundation. We build robust, flexible, and secure CMS-based front ends that give you control without complexity, blending sleek design with seamless functionality to make managing your content effortless.",
    },
    {
      img: screens,
      title: "Shopify Front-End Development",
      para: "Your storefront deserves more than templates. Our Shopify front-end development in New York transforms online stores into immersive, high-converting experiences. From custom layouts to optimized checkout flows, we code with conversion in mind.",
    },
    {
      img: uiux,
      title: "WordPress Front-End Development",
      para: "Clean, optimized, and  designed to impress, that’s our approach to WordPress front-end design and development in New York. We create lightning-fast, pixel-perfect interfaces that load quickly, rank higher, and deliver results your audience (and Google) will love.",
    },
    {
      img: javascript,
      title: "Wix Front-End Development",
      para: "Simplicity meets sophistication. Our Wix front-end development services elevate drag-and-drop design into high-performance interfaces that look professional, load fast, and work beautifully across all devices.",
    },
  ];

  const expertpoints = [
            {
              title: "Data-Driven Development",
              description:
                "Every pixel has a purpose. We use analytics and behavioral data to design interfaces that aren’t just visually appealing; they convert.",
            },
            {
              title: "SEO & AEO Specialization",
              description:
                "From structured markup to semantic coding, we build for humans and algorithms. Be found on search, featured in voice, and optimized for local GEO reach.",
            },
            {
              title: "Web Performance Optimization",
              description:
                "Speed is your first impression. Our engineers fine-tune code to achieve lightning-fast load times and smooth, uninterrupted browsing experiences.",
            },
            {
              title: "Security-First Architecture",
              description:
                "Built with clean code, modern frameworks, and secure protocols to ensure your users’ trust stays unbreakable and your business is protected.",
            },
            {
              title: "User Interface Design",
              description:
                "We design layouts that speak visually. Every component aligns with your brand tone, ensuring a look that’s sleek, consistent, and effortlessly usable.",
            },
            {
              title: "Analytics Integration & Reporting",
              description:
                "Knowledge is power, but insight drives growth. We integrate data tracking tools that enable you to see how users interact, convert, and remain loyal.",
            },
          ]

  return (
    <>
      <ReactHelmet
        title="Frontend Development in New York"
        description="Build responsive, high-performing websites with NY Web Experts, the leading front-end development company in New York delivering strategically designed web pages, mobile app designs, UI, SPAs, and more."
        keywords="front-end development company new york, front-end development agency new york, front-end development services new york, front-end web development new york, front-end design and development new york, custom front-end development new york, React front-end development new york, Angular front-end development new york, Vue.js front-end development new york"
        url="https://nywebexperts.com/frontend-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={heroabanner}
          title="Turn Scrolls into Sales with Front-End Brilliance"
          description="At NY Web Experts, we don’t just code what you send; we reimagine it, refine it, and optimize it for the modern web. From React to Vue.js, our front-end development services in New York bring beauty, speed, and strategy together, creating digital experiences that feel effortless and convert seamlessly."
          cta1="Start Your Project"
          cta2="hehe"
        />

        <section className="clients-data-sec">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-md-6">
                    <div className="client-data-txt">
                      <p>320+ Web Designs Developed</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="client-data-txt">
                      <p>12 Years of Experience</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="client-data-txt">
                      <p>570 Reviews</p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="client-data-txt">
                      <p>Powering 31 Industries</p>
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
          secTitle1="Professional Front-End Development for"
          secTitle2="Modern Businesses"
          description="Design is a promise, persuasive, hooking, inspiring, all things our code keeps and helps you increase your business, your brand, and your reputation!"
          descriptiontwo="As the leading front-end development company in New York, we turn your visual ideas into responsive, fast, and emotionally smart interfaces. Others think of it as magic, but what we really do is we combine design intent with engineering rigor so users arrive, stay, and convert."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/contact-us"
        />

        <FrontendServices
          shortHead="Services"
          mainHead="Frontend Development is Not the Only Thing We Do"
          description="We do frontend, but not only for the website. Below is the list of frontend development we offer for different platforms."
          btnText="Start Your Project"
          btnLink="/contact-us"
          services={frontendservices}
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner frontend-choose-sec"
          miniheadclass="shorttop-head"
          minihead="The Best in the Industry"
          secTitle1="Frontend Dev So Good,"
          secTitle2="It Converts"
          description="Design is powerful, so powerful that it can increase your conversion rate by 60%. Now that’s a power your business can also harness with custom front-end development in New York. As the leading design and development company in America, trusted by Americans and the world, we offer:"
          chooseParaItems={[
            {
              text: "Vector Designs",
            },
            {
              text: "3D Illustrations",
            },
            {
              text: "SEO, AEO, and GEO Optimized",
            },
            {
              text: "Responsive Interface",
            },
          ]}
          description2="Increase your sales with great designs."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact-us"
        />

        <GetCustomLogo
          className="mb-5"
          maintxt="Leading Design & Frontend Development Agency in New York"
        />

        <FrontendPortfolio />

        <FrontendExpertise
          shortTopHead="What We Do, We Do Best"
          mainHead="Frontend Development That Powers Industries"
          mainPara="Your front end is more than just design; it’s your brand’s digital handshake. At NY Web Experts, we turn code into clarity and creativity into conversions. Our front-end web development in New York solutions are engineered to perform beautifully on every screen, under every condition."
          points={expertpoints}
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Affordable Yet Robust Frontend Development"
          secPara="With NY Web Experts, select the right package for your website and unlock new, limitless possibilities with React, Angular, and Vue.js development in New York"
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec
          secTag="Connect With Us"
          secTitle="Start Your Frontend Project"
        />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Your Place for Latest News and Insights"
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

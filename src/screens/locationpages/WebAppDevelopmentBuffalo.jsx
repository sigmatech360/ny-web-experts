import React, { useState } from "react";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import bannerBG from "../../assets/images/locationpages/webapp-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/webapp-development-buffalo/aboutimg.webp";
import aboutbannerbg from "../../assets/images/locationpages/webapp-development-buffalo/gooddesignbg.webp";
import gooddesign from "../../assets/images/locationpages/webapp-development-buffalo/gooddesign-innerimg.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/webapp-development-buffalo/portfolio-6.webp";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport";
import LocationContact from "../../components/LocationContact";
import LocationFaqs from "../../components/LocationFaqs";
import Lightbox from "yet-another-react-lightbox";
import FormModal from "../../components/FormModal";

const WebAppDevelopmentBuffalo = () => {
  const [showModal, setShowModal] = useState(false);

  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
    },
    {
      id: 2,
      image: pixleperfectimg2,
    },
    {
      id: 3,
      image: pixleperfectimg3,
    },
    {
      id: 4,
      image: pixleperfectimg4,
    },
    {
      id: 5,
      image: pixleperfectimg5,
    },
    {
      id: 6,
      image: pixleperfectimg6,
    },
  ];

  const faqsData = [
    {
      header: "What types of web applications do you build?",
      content:
        "Whatever you need. As a full-service development agency, we develop custom web apps, dashboards, and SaaS platforms to client portals and internal tools. ",
    },
    {
      header:
        "Do you offer custom web app development services in Buffalo, NY?",
      content:
        "Yes, every web application we build is custom, designed, and developed based on your business goals.",
    },
    {
      header: "Can you handle full-stack web app development in Buffalo, NY?",
      content:
        "Absolutely, our team manages frontend, backend, APIs, databases, and integrations under one roof.",
    },
    {
      header: "Do you work with startups and established businesses?",
      content:
        "We work with both. Startups often come to us for MVP development, and established companies partner with us to modernize or scale their platforms.",
    },
    {
      header: "Will my web app be scalable for future growth?",
      content:
        "Yes, that’s what web apps are for. Scalability is built into our architecture decisions from the beginning, so your application can grow without needing a rebuild.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your Web, You Own It!" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <ReactHelmet
        title="Web App Development in Buffalo, NY"
        description="Work with NY Web Experts, the leading web app development company in Buffalo, NY, powering businesses with solutions that offer functionalities that websites can’t offer."
        keywords="web app development services Buffalo NY, web app development company Buffalo NY, web app development agency Buffalo NY, custom web app development services Buffalo NY, web app development companies Buffalo NY, web and mobile app development company-Buffalo NY, Full stack web app development Buffalo NY"
        url="https://nywebexperts.com/webapp-development-buffalo"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner domaintransfer-location-herobanner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Powerful Web Apps Built for Real Business Demands"
          description="The apps you once needed a phone for now work just as well on Explorer, Chrome, and Firefox, fast, flexible, and browser-ready. Buffalo businesses are building smarter, faster, and more scalable digital products, and that’s where we come in. At NY Web Experts, we deliver web app development services in Buffalo, NY, that feel intuitive to users and powerful behind the scenes. "
          descriptiontwo="Looking for a web app development company in New York that can get it right? Click below!"
          cta1="Get Your Free Web App Consultation"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Choose Us?"
          choosemainhead="Driven by Results. Trusted by Americans!"
          choosemainpara="Choosing the right development partner is less about code and more about clarity. As a seasoned web app development agency in Buffalo, NY, we focus on understanding how your business actually works before we write a single line of code."
          choosesecondpara="We build applications that are reliable, scalable, and easy to evolve as your business grows. What sets us apart is simple. We think like business owners, design like users, and develop like engineers who care about long-term performance."
          secTitle1="Designed for Humans,"
          secTitle2="Engineered for Performance"
          description="A great web application should feel effortless. That doesn’t happen by accident."
          descriptiontwo="Our custom web app development services in Buffalo, NY, are design-led from day one. We map user journeys, eliminate friction, and ensure every interaction feels intentional. Behind the interface, our development team focuses on clean architecture, secure integrations, and performance that holds up under pressure."
          description2="You get a web app that people enjoy using and a system your team trusts to run smoothly every day."
          chooseListItems={[
            "User-first UI and UX strategy",
            "Scalable Backend",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Build Smarter Web Apps"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Web Apps that Have Changed the Web Industry"
          secDescription="Swipe through our goldmine filled with Web Apps that have changed the entire website industry, offering websites that load and work just like an app, fast, optimized, and effortless."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Web App Development Packages for Your Brand"
          secPara="As a web and mobile app development company in Buffalo, NY, we offer flexible pricing models that make sense whether you need a focused MVP or a full-scale platform."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="app-florida-herobanner angular-gooddesign-sec"
          bgImage={aboutbannerbg}
          servicesbannerimg={gooddesign}
          title="Built for Power, Speed, and Serious Functionality"
          description="Businesses shift to web app development when they need something robust. Something built to handle high-performing functionality without breaking a sweat. That’s where web apps truly set themselves apart. With a web app, you can:"
          bulletpoints={[
            "Load complex interfaces in milliseconds",
            "Handle advanced, data-heavy functionality with ease",
            "Support multiple users and workflows at the same time",
            "Scale features as your business grows",
          ]}
          descriptionthree="If your business needs a website, try a web app; it's faster and better."
          cta1=" Talk to our developers"
          cta2="hehe"
        />

        <LocationSupport
          minihead="The Best in Business"
          mainheadSpan="The Brains Behind Buffalo’s"
          mainhead="Best Web Apps"
          mainPara="Get the project that delivers results, outlasting trends and outpacing competitors."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Talk to Us"
          mainhead="Start Developing Your Web App"
          secPara="If you’re planning a new product, modernizing internal systems, or replacing outdated software, our team is ready to help. As a Buffalo-based web app development agency, we understand the pace, expectations, and ambition of local businesses. Let’s talk through your idea and map out a smarter way forward."
          btntxt="Fill Out the Form"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Got Questions? We’ve Got Answers!"
          faqs={faqsData}
        />

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}

        <section className="webapp-locate-started">
          <div className="container">
            <div className="webapp-start-bg">
              <div className="row">
                <div className="col-lg-7">
                  <div className="webapp-started-txt">
                    <h2 className="mainhead text-white">
                      Web Apps for Brands that are Proactive, Not Reactive
                    </h2>
                    <p>
                      Let’s build a web app that responds instantly and keeps
                      working as usage and expectations grow.
                    </p>
                    <button
                      className="ny-btn"
                      onClick={() => setShowModal(true)}
                    >
                      Start Here
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FormModal show={showModal} handleClose={() => setShowModal(false)} />
      </DefaultLayout>
    </>
  );
};

export default WebAppDevelopmentBuffalo;

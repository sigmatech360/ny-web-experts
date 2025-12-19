import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/seo/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/seo/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/seo/aboutimg.webp";
import whyseo from "../../assets/images/services/seo/whyseo.webp";
import service1 from "../../assets/images/services/seo/service1.svg";
import rankingicon from "../../assets/images/services/seo/rankingicon.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import SEORanking from "../../components/SEORanking";
import TransferWhyus from "../../components/TransferWhyus";
import SMMProcess from "../../components/SMMProcess";
import whyseobg from "../../assets/images/services/seo/whyseo-bg.webp";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";


const NewSEO = () => {

      const frontendservices = [
        {
          img: service1,
          title: "React Native Development",
          para: "We build fast cross-platform apps with React Native that feel smooth, stable, and easy to use. This helps you reach both iOS and Android users with one strong codebase.",
        },
        {
          img: service1,
          title: "Android Development",
          para: "Our Android app development team builds safe, fast, and simple apps that work on all major devices. You get a clean product made for real daily use.",
        },
        {
          img: service1,
          title: "iOS Development",
          para: "We offer iOS app development in New York for brands that want stable and secure apps. Every feature is built to support long-term growth and simple user flow.",
        },
        {
          img: service1,
          title: "Web App Development",
          para: "We build web apps that run smoothly, load fast, and support your business goals. Each project is planned around clear actions and real user needs.",
        },
        {
          img: service1,
          title: "Server Management",
          para: "We set up stable servers, manage updates, and ensure your app runs without delays. You get safe hosting and the support needed for smooth daily performance.",
        },
        {
          img: service1,
          title: "MERN Stack Development",
          para: "We build strong web apps using the full MERN stack for speed and stability. This gives you a complete setup that handles users, data, and daily business tasks.",
        },
      ];


      
  const transferwhysteps = [
    {
      value: "32%",
      text: "of Websites in America Rely on Our Services",
    },
    {
      value: "1300+",
      text: "Successfully Transferred domains",
    },
    {
      value: "98%",
      text: "Client Retention Rate Across All Domain Transfer Projects",
    },
  ];

    

  return (
    <>
      <ReactHelmet
        title="Mobile App Development in New York | Expert iOS & Android App Builders"
        description="Build a smooth, secure, and growth-focused mobile app with New York Web Experts. We create clean, fast iOS and Android apps that boost engagement, strengthen your brand, and support long-term business growth. "
        keywords="mobile app development company new york, mobile app development new york, mobile app development services new york, custom mobile app development new york, mobile app development agency new york, mobile app development cost new york, best mobile app development company new york, custom mobile app development services new york, iOS app development new york, Android app development new york, Ecommerce app development new york"
        url="https://nywebexperts.com/search-engine-optimization"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner newsmm-benefit-bg"
          formClass="service-form"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Simple Mobile Application Ideas That Become Big Wins"
          description="We’re proud to be the mobile app development company in New York that serves applications that build credibility for you, engage your audience, and grow brand loyalty. Our mobile applications for iOS and Android devices are intuitively built for growth, making your users comfortable in their digital experience. "
          cta1="Get Your Mobile Application"
          cta2="hehe"
        />


          <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="App Experts You Can Trust"
          description="We are a mobile app development agency in New York focused on revolutionary ideas, clear work, and strong results. Our clients trust us for iOS, Android, and web apps built with care."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About New York Web Experts"
          aboutbtnlink="/about"
        />



         <FrontendServices
          CardCol="col-lg-6"
          secCardClass="brandvoice-service-card"
          shortHead="More of Our Services"
          mainHead="More Ways We Help You Build"
          description="Explore the services we provide, along with mobile application development services to complete your digital experience in all aspects."
          services={frontendservices}
          btnClass="d-none"
        />


        <SEORanking />



          <TransferWhyus
          shortTopHead="The Best in Business"
          mainHead="Trusted by New Yorkers. Driven by Results"
          description="There are a number of things that can happen to your domain. It can get hacked if not secure, slow your website if not optimized, result in data loss if not backed up, and even get corrupted if not migrated properly. That’s why a professional domain transfer service in New York is essential. The best way to transfer your domain without incurring costs to your business is to work with a professional company in New York that has been doing it for years."
          stats={transferwhysteps}
        />


          <SMMProcess />


          <ServicesBanner
          secClass="location-hero-banner wordpress-banner newseo-whyseo-bg"
          formClass="service-form"
          bgImage={whyseobg}
          servicesbannerimg={whyseo}
          title="Simple Mobile Application Ideas That Become Big Wins"
          description="We’re proud to be the mobile app development company in New York that serves applications that build credibility for you, engage your audience, and grow brand loyalty. Our mobile applications for iOS and Android devices are intuitively built for growth, making your users comfortable in their digital experience. "
          cta1="Get Your Mobile Application"
          cta2="hehe"
        />


         {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Choose A Plan That Works"
          secPara="We offer three clear packages based on your goals. Each plan supports iOS, Android for different custom mobile app development in New York. Pick the option that helps your idea grow with ease."
          tabsData={dynamictabsData}
        /> */}


         <ContactUsSec secTitle="Let’s Talk!" />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Insights Related to Websites, Web Apps, and More"
          itemsPerPage={3}
        />


        <GetStarted
          secTitle="Got An Idea? Let’s Discuss!"
          secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
          btnText="Book A Call!"
        />


      </DefaultLayout>
    </>
  );
};

export default NewSEO;

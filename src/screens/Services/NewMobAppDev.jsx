import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import herobanner from "../../assets/images/services/mobappdev/herobanner.webp";
import aboutimg from "../../assets/images/services/mobappdev/aboutimg.webp";
import chooseimg from "../../assets/images/services/mobappdev/chooseimg.webp";
import award1 from "../../assets/images/services/mobappdev/award1.webp";
import award2 from "../../assets/images/services/mobappdev/award2.webp";
import award3 from "../../assets/images/services/mobappdev/award3.webp";
import award4 from "../../assets/images/services/mobappdev/award4.webp";
import service1 from "../../assets/images/services/mobappdev/sevice1.svg";
import service2 from "../../assets/images/services/mobappdev/sevice2.svg";
import service3 from "../../assets/images/services/mobappdev/sevice3.svg";
import service4 from "../../assets/images/services/mobappdev/sevice4.svg";
import service5 from "../../assets/images/services/mobappdev/sevice5.svg";
import service6 from "../../assets/images/services/mobappdev/sevice6.svg";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import MobileAppDevTeam from "../../components/MobileAppDevTeam";
import SMMDrive from "../../components/SMMDrive";
import BrandStrategyChooseUs from "../../components/BrandStrategyChooseUs";
import detailapproach from "../../assets/images/services/brandstrategy/detailapproach.svg";
import expertteam from "../../assets/images/services/brandstrategy/expertteam.svg";
import datainformed from "../../assets/images/services/brandstrategy/datainformed.svg";
import bulb from "../../assets/images/services/brandstrategy/bulb.svg";
import MobAppDevAwards from "../../components/MobAppDevAwards";
import NewMobAppPortfolio from "../../components/NewMobAppPortfolio";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import choose1 from "../../assets/images/services/mobappdev/choose1.svg";
import choose2 from "../../assets/images/services/mobappdev/choose2.svg";
import choose3 from "../../assets/images/services/mobappdev/choose3.svg";
import choose4 from "../../assets/images/services/mobappdev/choose4.svg";


const NewMobAppDev = () => {
  const frontendservices = [
    {
      img: service1,
      title: "React Native Development",
      para: "We build fast cross-platform apps with React Native that feel smooth, stable, and easy to use. This helps you reach both iOS and Android users with one strong codebase.",
    },
    {
      img: service2,
      title: "Android Development",
      para: "Our Android app development team builds safe, fast, and simple apps that work on all major devices. You get a clean product made for real daily use.",
    },
    {
      img: service3,
      title: "iOS Development",
      para: "We offer iOS app development in New York for brands that want stable and secure apps. Every feature is built to support long-term growth and simple user flow.",
    },
    {
      img: service4,
      title: "Web App Development",
      para: "We build web apps that run smoothly, load fast, and support your business goals. Each project is planned around clear actions and real user needs.",
    },
    {
      img: service5,
      title: "Server Management",
      para: "We set up stable servers, manage updates, and ensure your app runs without delays. You get safe hosting and the support needed for smooth daily performance.",
    },
    {
      img: service6,
      title: "MERN Stack Development",
      para: "We build strong web apps using the full MERN stack for speed and stability. This gives you a complete setup that handles users, data, and daily business tasks.",
    },
  ];

  const chooseitemlist = [
    {
      img: choose1,
      title: "Clear Communication",
      desc: "We keep things simple, straightforward, and transparent. You always know what we are building and how each step helps your app grow.",
    },
    {
      img: choose2,
      title: "Strong Code Quality",
      desc: "Every project is built with clean, stable, and long-lasting code. This keeps your app safe, fast, and easy to improve over time.",
    },
    {
      img: choose3,
      title: "Complete Support",
      desc: "We stay with you after launch. You get updates, fixes, and guidance so your app stays strong and ready for real users.",
    },
    {
      img: choose4,
      title: "Real Business Focus",
      desc: "Our work supports clear results. You get an app that helps you gain users, grow sales, and build a strong online presence.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Mobile App Development in New York | Expert iOS & Android App Builders"
        description="Build a smooth, secure, and growth-focused mobile app with New York Web Experts. We create clean, fast iOS and Android apps that boost engagement, strengthen your brand, and support long-term business growth. "
        keywords="mobile app development company new york, mobile app development new york, mobile app development services new york, custom mobile app development new york, mobile app development agency new york, mobile app development cost new york, best mobile app development company new york, custom mobile app development services new york, iOS app development new york, Android app development new york, Ecommerce app development new york"
        url="https://nywebexperts.com/mobile-app-development"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={herobanner}
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
          ServiceSecClass="mobappdev-services-sec"
          CardCol="col-lg-4 col-md-6"
          secCardClass="brandvoice-service-card"
          shortHead="More of Our Services"
          mainHead="More Ways We Help You Build"
          description="Explore the services we provide, along with mobile application development services to complete your digital experience in all aspects."
          services={frontendservices}
          btnClass="d-none"
        />

        <MobileAppDevTeam />

        <SMMDrive />

        <BrandStrategyChooseUs
          secClass="strategy-choose-sec newmob-choose-sec"
          shortTopHead="Why Choose Us"
          mainHead="Your Business Needs A Strong App"
          description="Our mobile app development team builds apps that feel simple and work smoothly. You get a team that listens, guides, and delivers results that support your business goals."
          chooseItems={chooseitemlist}
        />


        <MobAppDevAwards />


        <NewMobAppPortfolio secClass="newmobapp-portfolio-sec"/>



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

        <section className="mobapp-getstarted-sec">
            <div className="container">
                <div className="mobapp-started-bg">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="mobapp-started-txt">
                                <h2 className="mainhead text-white">Let’s Get Started New Project.</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
                                <button className="ny-btn">Discover More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


      </DefaultLayout>
    </>
  );
};

export default NewMobAppDev;

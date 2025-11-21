import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import LocationSupport from "../../components/LocationSupport";
import Lightbox from "yet-another-react-lightbox";
import GetStarted from "../../components/GetStarted";
import LocationFaqs from "../../components/LocationFaqs";
import LocationContact from "../../components/LocationContact";
import pixleperfectimg1 from "../../assets/images/locationpages/react-development-buffalo/portfolio1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/react-development-buffalo/portfolio2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/react-development-buffalo/portfolio3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/react-development-buffalo/portfolio4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/react-development-buffalo/portfolio5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/react-development-buffalo/portfolio6.webp";
import aboutbannerbg from "../../assets/images/locationpages/react-development-buffalo/aboutbannerbg.webp";
import herobanner from "../../assets/images/locationpages/react-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/react-development-buffalo/chooseimg.webp";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import ReactHelmet from "../../components/ReactHelmet";



const ReactDevelopmentBuffalo = () => {
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
      header: "How long does a React project usually take?",
      content:
        "Most React builds take four to twelve weeks, depending on features, integrations, and complexity. We give you a clear roadmap before any work begins.",
    },
    {
      header: "Can you upgrade my existing platform to React without downtime?",
      content:
        "Yes, we specialize in seamless migrations and progressive upgrades that keep your platform running while we modernize it behind the scenes.",
    },
    {
      header: "Do you also offer React Native solutions?",
      content:
        "Absolutely, our team handles both web and mobile experiences, backed by expert react native development services that Buffalo businesses rely on.",
    },
    {
      header: "Will my React application be optimized for speed and SEO?",
      content:
        "Yes, we engineer every interface for fast load times, clean architecture, and strong indexing, so both your users and search engines get exactly what they need.",
    },
    {
      header: "How much does a typical React project cost?",
      content:
        "Costs vary based on scope, features, and long-term goals. We prepare a custom estimate tailored to your budget, business priorities, and project.",
    },
     {
      header: "What happens after the app is launched?",
      content:
        "We stay with you; our team provides continuous support long after launch, so your product continues to evolve.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your App, You Own It!" },
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
        title="React Development in Buffalo"
        description="Looking for React development in Buffalo? We create high-performance, scalable React apps built for real business growth, seamless usability, and long-term digital success."
        keywords="WordPress development Buffalo ny, custom WordPress development Buffalo ny, WordPress development services Buffalo ny, top wordpress development agencies Buffalo ny, wordpress website development in Buffalo ny, wordpress development company Buffalo , wordpress development services Buffalo ny"
        url="https://nywebexperts.com/react-development-buffalo"
      />


      <DefaultLayout>

         <ServicesBanner
          secClass="location-hero-banner"
          formClass="service-form"
          bgImage={herobanner}
          title="Give Your Ideas a React Engine That Never Hits the Brakes"
          description="YYour next big digital move deserves an interface that thinks fast, works smart, and scales even smarter. At NY Web Experts, we build React applications that feel effortless for users and powerful for businesses. If you’ve been searching for a React development company in Buffalo that actually understands growth, you just found your team."
          cta1="Let’s React "
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Choose Us?"
          choosemainhead="Why Buffalo Brands Trusts Us with Their React Builds"
          choosemainpara="React development succeeds when creativity and engineering move in the same direction. Our team combines product thinking, interface psychology, and clean code to build React applications that not only function effectively but also look and feel beautiful. Whether you’re scaling, launching, or reinventing, we help you create digital experiences that live up to New York standards."
          miniheadclass="shorttop-head"
          secTitle1="We Design for Real People,"
          secTitle2="Not Just Screens"
          description="Every button, animation, and user path is shaped with intention. Your product won’t just function; it will feel right. That’s the difference between software people tolerate and software they love."
          chooseListItems={[
            "Loads Before Your Blink",
            "Everything You Need, React Can Build It",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="React Projects Engineered for Real-World Performance"
          secDescription="We don’t need sales persons, our react.js designs and development in Buffalo is so good that they sell themselves."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


        
        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Affordable and Reliable React Development"
          secPara="f there is great technology, we believe you should utilize it to excel in your business. Thus, our packages are designed for businesses that require fast, scalable, and clear React native services in Buffalo."
          tabsData={dynamictabsData}
        /> */}



        <ServicesBanner
          secClass="app-florida-herobanner reimage-banner reactabout-buffalo-banner"
          bgImage={aboutbannerbg}
          title="React Solutions That Make Any Functionality Possible"
          description="React is at its best when it evolves with your business. As a leading react js development company in Buffalo, we make every functionality possible with it. Need AI integration? Workflow management? Mobile Apps like single-page applications? Whatever you need, React can build it, and build it better!"
          cta1=" Talk to Us"
          cta2="hehe"
        />

        <LocationSupport
          minihead="What Makes Us the Best"
          mainheadSpan="We’re the brains behind Buffalo’s"
          mainhead="Best React Development"
          mainPara="Get the app that delivers results, outlasting trends and outpacing competitors."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Turn Your Idea Into A React Product"
          secPara="Have a question? Want to show us your project? Or want to make dollars through React-based web apps? Fill out the form, and our team will get back to you promptly."
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Get Answers to All Your React-Related Questions"
          secPara="React projects come with many moving parts. Here are clear, straightforward answers to help you understand timelines, expectations, and results before you start building with NY Web Experts."
          faqs={faqsData}
        />

        <GetStarted
          secTitle="Got An Idea? Let’s Discuss"
          secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
          btnText="Book A Call"
        />

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </DefaultLayout>
    </>
  );
};

export default ReactDevelopmentBuffalo;

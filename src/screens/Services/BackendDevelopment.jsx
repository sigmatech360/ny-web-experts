import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import heroabanner from "../../assets/images/services/backenddevelopment/herobanner.webp";
import experience from "../../assets/images/services/backenddevelopment/exprience-img.webp";
import project1 from "../../assets/images/services/backenddevelopment/project1.webp";
import project2 from "../../assets/images/services/backenddevelopment/project2.webp";
import project3 from "../../assets/images/services/backenddevelopment/project3.webp";
import project4 from "../../assets/images/services/backenddevelopment/project4.webp";
import project5 from "../../assets/images/services/backenddevelopment/project5.webp";
import project6 from "../../assets/images/services/backenddevelopment/project6.webp";
import service1 from "../../assets/images/services/backenddevelopment/service1.webp";
import service2 from "../../assets/images/services/backenddevelopment/service2.webp";
import service3 from "../../assets/images/services/backenddevelopment/service3.webp";
import service4 from "../../assets/images/services/backenddevelopment/service4.webp";
import service5 from "../../assets/images/services/backenddevelopment/service5.webp";
import service6 from "../../assets/images/services/backenddevelopment/service6.webp";
import BackendAbout from "../../components/backendAbout/Index";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import BackendProcess from "../../components/BackendProcess";
import BackendBenefit from "../../components/BackendBenefit";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import Lightbox from "yet-another-react-lightbox";
import GetStarted from "../../components/GetStarted";
import LocationFaqs from "../../components/LocationFaqs";
import LocationContact from "../../components/LocationContact";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import ReactHelmet from "../../components/ReactHelmet";

const BackendDevelopment = () => {
  const webDesignServiceData = [
    {
      id: 1,
      image: service1,
      title: "Frontend Development",
      description:
        "We design clean, responsive layouts that give users an effortless experience.",
    },
    {
      id: 2,
      image: service2,
      title: "CMS Development",
      description:
        "Custom CMS setups make it simple for you to manage content.",
    },
    {
      id: 3,
      image: service3,
      title: "E-Commerce Websites",
      description:
        "Smart, easy-to-navigate stores that help customers buy without confusion.",
    },
    {
      id: 4,
      image: service4,
      title: "DevOps",
      description:
        "Faster updates and reliable systems that keep your website running strong.",
    },
    {
      id: 5,
      image: service5,
      title: "Server Management",
      description:
        "Round-the-clock maintenance to ensure your site never slows down.",
    },
    {
      id: 6,
      image: service6,
      title: "SSL Hosting",
      description:
        "Secure hosting that keeps your visitors’ trust and your data protected.",
    },
  ];

  const webDesignPortfolioData = [
    {
      id: 1,
      image: project1,
    },
    {
      id: 2,
      image: project2,
    },
    {
      id: 3,
      image: project3,
    },
    {
      id: 4,
      image: project4,
    },
    {
      id: 5,
      image: project5,
    },
    {
      id: 6,
      image: project6,
    },
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
          title="Backend Development Company in New York"
          description="Build powerful and scalable backend systems with New York Web Experts, being the trusted experts in APIs, databases, and performance-driven development, we want your brand to grow effortlessly."
          keywords="backend development company new york, backend API development new york, backend development agency new york, Node.js backend development new york, backend development services new york, PHP backend development new york, backend web development new york"
          url="https://nywebexperts.com/backend-development"
        />



      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner"
          formClass="service-form"
          bgImage={heroabanner}
          title="Backend Development Services Made to Strengthen Your Digital Foundations"
          description="A strong website starts with a powerful backend that keeps everything running smoothly. At New York Web Experts, we build reliable systems that bring your ideas to life online. Our team focuses on clean coding, speed, and structure, creating backends that grow easily with your business."
          cta1="Speak to the Web Experts"
          cta2="hehe"
        />

        <BackendAbout />

        <PixelPerfectSec
          pixelSec="backend-portfolio-sec"
          minihead="More of Our Services"
          secTitle="Our Powerful Backend Isn’t A Coincidence"
          secDescription="To give our web development complete structural confidence, our team delivers complete web solutions that help your business run better and look great."
          btnText="Consult A Web Expert"
          btnlink="/contact-us"
          projectsData={webDesignServiceData}
          onImageClick={handleImageClick}
        />

        <BackendProcess />

        <PixelPerfectSec
          pixelSec="backend-portfolio-sec mainback-portfolio-sec"
          minihead="Our Portfolio"
          secTitle="Our Portfolio of Powerful Backend Projects"
          secDescription="We’ve built backends that power e-commerce stores, enterprise platforms, and digital tools, each one designed for speed, security, and long-lasting performance."
          btnText="Explore Our Projects"
          btnlink="/portfolio"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <BackendBenefit />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection location-choose-banner backend-choose-bg"
          miniheadclass="shorttop-head"
          minihead="Industries" 
          secTitle1="Industries We Empower with Backend Solutions"
          description="At New York Web Experts, we deliver robust back-end systems designed to power your business efficiently. Our solutions are secure, scalable, and tailored to meet the unique demands of your industry, helping you stay ahead today and tomorrow."
          chooseListItems={["Retail & E-Commerce", "Healthcare", "SaaS & Fintech", "Beauty & Aesthetics", "Travel & Real Estate", "Others"]}
          description2="Essentially, you can do everything you want, yourself!"
          image={experience}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Chat with an Expert"
          aboutbtnlink="/contact-us"
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Pricing Plans for Backend Development"
          secPara="We offer fair, transparent pricing shaped around your project’s goals. Each plan ensures your backend works reliably while staying flexible for future updates and improvements."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTag="Contact Us" secTitle="Enter Your Details to Get Started" />

        <BlogSec
          blogminihead="Blogs & Updates"
          secTitle="Get Insights on Latest Trends and Business Flow"
          itemsPerPage={3}
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

export default BackendDevelopment;

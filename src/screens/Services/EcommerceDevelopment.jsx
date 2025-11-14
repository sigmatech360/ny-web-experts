import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import bannerBG from "../../assets/images/services/ecommercedevelopment/herobanner.webp";
import aboutimg from "../../assets/images/services/ecommercedevelopment/about.webp";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import aboutbannerbg from "../../assets/images/services/ecommercedevelopment/futurebg.webp";
import fantasyimg from "../../assets/images/services/ecommercedevelopment/bulletbg.webp";
import pixleperfectimg1 from "../../assets/images/services/ecommercedevelopment//portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/services/ecommercedevelopment/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/services/ecommercedevelopment/portfolio-3.webp";
import serivce1 from "../../assets/images/services/ecommercedevelopment/www.svg";
import serivce2 from "../../assets/images/services/ecommercedevelopment/woocommerce.svg";
import serivce3 from "../../assets/images/services/ecommercedevelopment/shopify.svg";
import serivce4 from "../../assets/images/services/ecommercedevelopment/magento.svg";
import serivce5 from "../../assets/images/services/ecommercedevelopment/payment.svg";
import serivce6 from "../../assets/images/services/ecommercedevelopment/eccommerce.svg";

import LocationSupport from "../../components/LocationSupport";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import EcommerceServices from "../../components/EcommerceServices";

const EcommerceDevelopment = () => {
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
  ];

  const services = [
    {
      serviceimg: serivce1,
      heading: "Shopify Development: ",
      paragraph:
        "Build your Shopify store with an e-commerce website developer in New York who knows how to optimize performance, speed, and sales flow.",
    },
    {
      serviceimg: serivce2,
      heading: "WordPress Development: ",
      paragraph:
        "Custom WooCommerce sites that merge creativity with conversion-focused features, giving you full control and flexibility.",
    },
    {
      serviceimg: serivce3,
      heading: "Squarespace Development:",
      paragraph:
        "We create sleek and modern designs that make your products pop and your checkout experience seamless on every device.",
    },
    {
      serviceimg: serivce4,
      heading: "Wix Development: ",
      paragraph:
        "Easy management meets smart functionality. Perfect for small to mid-sized stores ready to grow fast.",
    },
    {
      serviceimg: serivce5,
      heading: "Webflow Development: ",
      paragraph:
        "Visually stunning and lightning-fast, Webflow e-commerce lets your brand stand out while running smoothly behind the scenes.",
    },
    {
      serviceimg: serivce6,
      heading: "Website Redesign: ",
      paragraph:
        "Transform your outdated website into a revenue engine with improved UX, performance, and branding consistency.",
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

  const supportCardsData = [
    { image: support1, title: "24/7 backend monitoring and updates" },
    { image: support2, title: "Data-driven conversion architecture" },
    { image: support3, title: "Seamless third-party integrations" },
    { image: support4, title: "Responsive, mobile-optimized layouts" },
    { image: support5, title: "Scalable e-commerce infrastructure" },
  ];

  return (
    <>
      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Get Yourself an E-Commerce Platfrom That Never Stops Selling"
          description="At New York Web Experts, we specialize in e-commerce website development that keeps your store running smoothly. From smart backend management to flawless checkout experiences, our e-commerce website development services in New York ensure your operations stay fast, secure, and scalable. We turn your ideas into online stores that effortlessly sell 24/7."
           cta1="Speak to a Web Expert"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner eccomerce-about-sec"
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

        <EcommerceServices
          minihead="More of Our Services"
          mainhead="Our Websites Do More Than Selling, We Build Trust"
          mainpara="For the New Yorkers who value their long term business goals, we build websites across major CMS platforms, made uniquely to cater your business goals and growth plans."
          btntxt="Chat With Our Web Experts"
          services={services}
        />

        <PixelPerfectSec
        pixelSec="ecommerce-portfolio-sec"
          minihead="Our Portfolio"
          secTitle="Our Most Loved E-Commerce Websites"
          secDescription="Explore our portfolio of e-commerce websites developed in New York, designed to convert traffic into loyal customers."
          btnText="View Our Portfolio"
          btnlink="/contact-us"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <ServicesBanner
          secClass="app-florida-herobanner reimage-banner"
          bgImage={fantasyimg}
          title="Your Most Trusted Sales Engine! Build Your Own ECommerce Store"
          description="At New York Web Experts, we create e-commerce websites that move products, build loyalty, and simplify growth for your future plans. Every store we develop has an interactive design, strong strategy, and high performance backend to keep your customers engaged and your operations effortless."
          fantasypoints={[
          "Smart E-Commerce Stores",
          "Seamless System Integrations",
          "Automated Marketing Flow",
          "Built on Data Insights",
          "Personalized Shopping Journeys",
        ]}
        btnboxClass="d-none"
          cta1=" Talk to Us"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Our Exceptionalities"
          mainheadSpan="Our Expertise in E-Commerce"
          mainhead="Web Development is real and intentional"
          mainPara="We’re not just another e-commerce website development agency in New York; we’re your digital growth partner. Our approach is driven by user experience, automation, and data-backed functionality. From smart inventory systems to SEO-friendly designs, our solutions make every sale smoother and every visit count."
          supportCards={supportCardsData}
        />

        <ServicesBanner
          secClass="app-florida-herobanner reimage-banner"
          bgImage={aboutbannerbg}
          title="Easier Reach, Higher Returns You Sell Smoothly With Us"
          description="With New York Web Experts, every click brings value. We make selling online easy through custom e-commerce website development designed for scalability and performance. Whether you’re starting fresh or expanding globally, we handle technical complexities so your brand stays focused on growth, visibility, and customer satisfaction."
          cta1=" Talk to Us"
          cta2="hehe"
          btnboxClass="d-none"
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="E-Commerce Web Development Packages"
          secPara="Choose from flexible packages designed for startups, growing brands, and enterprise businesses. Every plan includes full-stack e-commerce development, testing, and post-launch support."
          tabsData={dynamictabsData}
        /> */}

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

export default EcommerceDevelopment;

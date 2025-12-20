import React, { useState } from 'react'
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import bannerBG from "../../assets/images/locationpages/shopify-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/shopify-development-buffalo/aboutimg.webp";
import aboutbannerbg from "../../assets/images/locationpages/shopify-development-buffalo/gooddesignbg.webp";
import gooddesign from "../../assets/images/locationpages/shopify-development-buffalo/gooddesign.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/shopify-development-buffalo/portfolio-6.webp";
import DefaultLayout from '../../components/DefaultLayout';
import ServicesBanner from '../../components/ServicesBanner';
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection';
import PixelPerfectSec from '../../components/PixelPerfectSec';
import TabsPricing from '../../components/TabsPricing';
import { dynamictabsData } from '../../data';
import LocationSupport from '../../components/LocationSupport';
import LocationContact from '../../components/LocationContact';
import LocationFaqs from '../../components/LocationFaqs';
import Lightbox from 'yet-another-react-lightbox';
import ReactHelmet from '../../components/ReactHelmet';


const ShopifyDevelopmentBuffalo = () => {

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
              header: "How does professional Shopify website development help grow online sales?",
              content:
                "Professional Shopify website development improves site speed, navigation, checkout flow, and product presentation. For businesses in Buffalo, New York, a well-developed Shopify website helps reduce cart abandonment, improve customer trust, and increase conversions by creating a smooth and reliable shopping experience.",
            },
            {
              header: "Why should I choose Shopify for my ecommerce website?",
              content:
                "Shopify is a secure and user-friendly ecommerce platform that works well for small and growing businesses. It offers easy product management, built-in payment options, and mobile-friendly designs. Shopify website development in Buffalo, New York, allows businesses to launch and manage online stores without technical complexity.",
            },
            {
              header: "How long does Shopify website development take?",
              content:
                "The timeline for Shopify website development depends on the size and features of the store. Most Shopify websites can be completed within a few weeks. Businesses in Buffalo, New York, can expect a clear development process that includes planning, design, setup, testing, and launch.",
            },
            {
              header: "Do you offer custom Shopify website development in Buffalo, New York?",
              content:
                "Yes, we provide custom Shopify website development services in Buffalo, New York. This includes custom layouts, branding, feature setup, and performance optimization. Each Shopify store is built based on the business goals, products, and customer experience requirements of the client.",
            },
            {
              header: "Can you redesign or improve an existing Shopify website?",
              content:
                "Yes, existing Shopify websites can be redesigned or improved at NY Web Experts. This includes updating the design, improving site speed, fixing navigation issues, and optimizing the store for better conversions. Our Shopify website development services in Buffalo, New York, help businesses improve performance without rebuilding everything from scratch.",
            },
            {
              header: "Will my Shopify website be mobile-friendly and easy to manage?",
              content:
                "Yes, all Shopify websites made at NY Web Experts are built to be mobile-friendly and easy to manage. Store owners can update products, pricing, and content without technical knowledge. Our Shopify ecommerce website development in Buffalo, New York, ensures a smooth experience for both customers and business owners.",
            },
          ];
        
          const supportCardsData = [
            { image: support1, title: "Satisfaction Guaranteed" },
            { image: support2, title: "24/7 Customer Support" },
            { image: support3, title: "Ownership Rights" },
            { image: support4, title: "Money Back Guarantee" },
            { image: support5, title: "Industry Specific-Expertise" },
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
        title="Shopify Development Company in Buffalo NY"
        description="NY Web Experts is experienced in fast and secure Shopify website Development in Buffalo, New York. Our websites are designed to attract and engage visitors, while driving consistent sales for long-term impact."
        keywords="shopify website development buffalo, NY, shopify website development services buffalo, NY, shopify website development company buffalo, NY, shopify website development agency buffalo, NY, shopify ecommerce website development buffalo, NY"
        url="https://nywebexperts.com/shopify-development-buffalo"
      />

       <DefaultLayout>


         <ServicesBanner
          secClass="location-hero-banner domaintransfer-location-herobanner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Shopify Website Development in Buffalo, New York"
          description="At NY Web Experts, we have experience in building high-quality and functional websites that prove to be effective. Especially, our Shopify website development in Buffalo, New York, has been exceptional for several reasons. We build scalable e-commerce websites that consistently drive sales and clients, keeping your business always on the pace of growth and success."
          cta1="Start Your Shopify Project"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Choose Us"
          choosemainhead="Why Your Brand Needs Shopify Development from NY Web Experts"
          choosemainpara="Choosing the right Shopify development partner matters, which is why at NY Web Experts, we understand both ecommerce strategy and Shopify technology. We create stores that load fast, look professional, and help businesses in Buffalo, NY, sell more online with a smooth shopping experience for every customer."
          miniheadclass="shorttop-head"
          secTitle1="Web Experts in Buffalo, New York, who Build"
          secTitle2="Shopify Stores that Perform"
          description="As a trusted Shopify website development company in Buffalo, NY, we focus on building ecommerce stores that support real business goals. Our team designs clean layouts, sets up secure payment systems, and optimizes every Shopify store for performance and usability. We work closely with you to ensure your store reflects your brand and meets customer expectations."
          chooseListItems={[
            "Custom Shopify store design and development",
            "Secure and easy to manage ecommerce solutions",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get a Free Consultation"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Our Portfolio"
          secTitle="Shopify Website Development Projects We Take Pride In"
          secDescription="Check out our Shopify website development portfolio, showcasing ecommerce stores built for different industries and business sizes. Each project reflects our focus on clean design, smooth functionality, and conversion-driven Shopify development tailored for long-term success."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Shopify Web Development Packages"
          secPara="We offer flexible Shopify website development services in Buffalo, New York, to fit different business needs and budgets. Our pricing packages are transparent and focused on delivering real value, whether you are launching a new store or upgrading an existing Shopify website."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="app-florida-herobanner angular-gooddesign-sec"
          bgImage={aboutbannerbg}
          servicesbannerimg={gooddesign}
          title="Building Strong Online Stores For New York Brands"
          description="A well-built Shopify website can do a lot more than hook visitors. If used right, it can create a loyal customer base for you. Our Shopify ecommerce website development in Buffalo, NY, services focus on user experience, speed, and clear navigation to help your business increase sales, reduce cart abandonment, and grow confidently in the competitive online market."
          cta1="Sign Up Today"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Our Expertise"
          mainheadSpan="Why Brands"
          mainhead="Choose Us"
          mainPara="We deliver Shopify development solutions that are reliable, easy to scale, and designed for growth. Our team focuses on clarity, performance, and long-term support so your Shopify website continues to perform as your business expands."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Let’s Start Your Shopify Website Project Together"
          secPara="Ready to build or upgrade your Shopify website in Buffalo, New York. Our team is here to guide you from planning to launch. Share your project details with us and let NY Web Experts create a Shopify store that supports your business goals."
          btntxt="Send Message"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Common Questions About Shopify Development"
          secPara="Our Shopify development services cover custom design, store setup, product management, payment integration, and performance optimization. Other than that, we are here to answer your other queries as well:"
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
        
       </DefaultLayout>


    </>
  )
}

export default ShopifyDevelopmentBuffalo

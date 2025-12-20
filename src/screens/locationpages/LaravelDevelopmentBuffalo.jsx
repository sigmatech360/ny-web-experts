import React, { useState } from 'react'
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import bannerBG from "../../assets/images/locationpages/laravel-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/laravel-development-buffalo/aboutimg.webp";
import aboutbannerbg from "../../assets/images/locationpages/laravel-development-buffalo/gooddesignbg.webp";
import gooddesign from "../../assets/images/locationpages/laravel-development-buffalo/gooddesign.webp";
import pixleperfectimg1 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/laravel-development-buffalo/portfolio-6.webp";
import ReactHelmet from '../../components/ReactHelmet';
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

const LaravelDevelopmentBuffalo = () => {
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
          header: "What is Laravel mainly used for?",
          content:
            "Laravel is used to build secure, scalable web applications with complex backend logic and smooth performance.",
        },
        {
          header: "Why should I choose Laravel for my web application?",
          content:
            "Laravel offers clean architecture, strong security, and scalability, making it ideal for long-term, high-performance applications.",
        },
        {
          header: "Can Laravel handle large and complex applications?",
          content:
            "Yes, Laravel is designed to support heavy traffic, complex features, and growing data without compromising speed or stability.",
        },
        {
          header: "Is Laravel suitable for startups and enterprises alike?",
          content:
            "Absolutely, startups love Laravel for speed, while enterprises trust it for structure and maintainability.",
        },
        {
          header: "Do you offer custom Laravel development in Buffalo, NY?",
          content:
            "Yes, we provide fully custom Laravel development services in Buffalo NY, tailored to your business goals and future growth.",
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
        title="Laravel Development in Buffalo, NY"
        description="Develop robust web and app backends with Laravel in Buffalo NY. Build by NY Web Experts, secure, scalable applications designed for long-term performance and growth."
        keywords="laravel development company Buffalo NY, laravel development services Buffalo NY, laravel development agency Buffalo NY, laravel web development services Buffalo NY, laravel web development servicesBuffalo NY, laravel application development company Buffalo NY"
        url="https://nywebexperts.com/laravel-development-buffalo"
      />

       <DefaultLayout>


         <ServicesBanner
          secClass="location-hero-banner domaintransfer-location-herobanner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Backend Brilliance Powered by Laravel"
          description="Most web apps begin to break as a business scales. Laravel-powered applications do the opposite. They scale with the business. That is the real power of Laravel. As a leading Laravel development company in Buffalo, NY, we build backends designed to grow without friction, slowdowns, or future rework. "
          descriptiontwo="Backend is the heart of any project. Build it right with Laravel."
          cta1="Let’s Skyrocket"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Laravel?"
          choosemainhead="Not Just a Framework but a Business Advantage"
          choosemainpara="Laravel is not chosen for looks. It is chosen by businesses seeking long-term scalability and performance. Thus, when businesses in Buffalo need applications that stay readable, secure, and scalable as complexity grows, Laravel becomes the obvious choice."
          miniheadclass="shorttop-head"
          secTitle1="The Top Choice for"
          secTitle2="Backend Development"
          description="In the digital world, time is everything. Laravel is one of those frameworks that are so powerful it practically skips the loading part, keeping the entire experience smooth. You click, and the next page appears. When there’s no waiting, users stay longer. That’s why businesses trust a Laravel development company in Buffalo, NY"
          chooseListItems={[
            "Powers over 1.5 million applications",
            "Preferred by 70% of startups ",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Developers"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Laravel Projects We’ve Built to Scale, Not Stall"
          secDescription="These aren’t concept builds. They’re live Laravel applications doing real work, powering businesses while others are still planning features."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing for Serious Laravel Builds"
          secPara="If great technology exists, businesses should use it to perform better. That’s why we bring the right tech stack, building backends that handle complex functionality smoothly without breaking under pressure."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="app-florida-herobanner angular-gooddesign-sec"
          bgImage={aboutbannerbg}
          servicesbannerimg={gooddesign}
          title="The Power Behind Smooth Apps"
          description="Laravel works in the shadows. You won’t see it in the design, while zooming, or when clicking a button. You feel it where it matters most, during loading, moving between pages, and running powerful functions that respond instantly without hesitation. This is why businesses rely on Laravel web development services in Buffalo, NY, to build applications that stay fast, stable, and reliable under real usage."
          cta1="Talk to Us"
          cta2="hehe"
        />

        <LocationSupport
          minihead="The Best in Business"
          mainheadSpan="The Brains Behind Buffalo’s Best"
          mainhead="Laravel Development"
          mainPara="Rated as the top WordPress development agency in Buffalo, NY, our promise goes beyond delivering a beautiful site; we guarantee satisfaction, transparency, and long-term results."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Develop Your App with the Best Tech-Stack"
          secPara="Laravel isn’t just a framework. It’s the framework businesses rely on for performance that others struggle to match. If you’re building a web app meant to stay relevant long term, custom Laravel development services in Buffalo, NY, are the way forward."
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Everything You Need to Know About Laravel"
          secPara="Still wondering if Laravel is the right choice? Or how it fits into your idea without overcomplicating things? Share your plan with us, and we’ll help you make sense of it before code ever enters the picture."
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

export default LaravelDevelopmentBuffalo

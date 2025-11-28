import React from 'react'
import DefaultLayout from '../../components/DefaultLayout'
import ServicesBanner from '../../components/ServicesBanner'
import herobanner from "../../assets/images/services/webappdevelopment/herobanner.webp"
import aboutimg from "../../assets/images/services/webappdevelopment/aboutimg.webp"
import service1 from "../../assets/images/services/webappdevelopment/service1.webp"
import service2 from "../../assets/images/services/webappdevelopment/service2.webp"
import service3 from "../../assets/images/services/webappdevelopment/service3.webp"
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import LocationSupport from '../../components/LocationSupport'
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import serve1 from "../../assets/images/services/webappdevelopment/serve1.webp";
import serve2 from "../../assets/images/services/webappdevelopment/serve2.webp";
import serve3 from "../../assets/images/services/webappdevelopment/serve3.webp";
import serve4 from "../../assets/images/services/webappdevelopment/serve4.webp";
import serve5 from "../../assets/images/services/webappdevelopment/serve5.webp";
import WebAppServices from '../../components/WebAppServices'
import WebAppProcess from '../../components/WebAppProcess'
import ExpertTalk from '../../components/ExpertTalk'
import WordpressPortfolio from '../../components/WordpressPortfolio'
import WeServe from '../../components/WeServe'
import TabsPricing from '../../components/TabsPricing'
import { dynamictabsData } from '../../data'
import ContactUsSec from '../../components/ContactUsSec'
import BlogSec from '../../components/BlogSec'
import GetStarted from '../../components/GetStarted'
import ReactHelmet from '../../components/ReactHelmet'


const WebAppDevelopment = () => {

      const serves = [
    { text: "E-commerce", img: serve1 },
    { text: "Healthcare", img: serve2 },
    { text: "Real Estate", img: serve3 },
    { text: "Manufacturing", img: serve4 },
    { text: "Constuction", img: serve5 },
  ];

      const supportCardsData = [
        { image: support1, title: "Your Satisfaction is Our Priority" },
        { image: support2, title: "Round-the-Clock Customer Support" },
        { image: support3, title: "Your Web, Powered by You!" },
        { image: support4, title: "Affordable and Reliable" },
        { image: support5, title: "Custom Design & Development" },
      ];

  return (
    <>

    <ReactHelmet
        title="Web Development in New York"
        description="Web Development in New York made smarter. Build fast, modern, mobile-like web apps that elevate performance and user experience with expert, reliable development services."
        keywords="web app development services new york, web app development company new york, web app development agency new york, custom web app development services new york, web app development companies new york, web and mobile app development company new york, Full stack web app development new york"
        url="https://nywebexperts.com/web-app-development"
      />


    <DefaultLayout>
         <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={herobanner}
          title="Develop Web Apps That Feel Like Mobile Apps"
          description="For the brands that have wild ideas and need modern, sleek web pages, built to flex, our custom web app development services in New York turn imagination into high-performing digital experiences that look sharp and work even sharper."
          descriptiontwo="Upgrade your web apps? "
          cta1="Absolutely"
          cta2="hehe"
        />


         <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="How Good are Web Apps?"
          secTitle1="Web Apps are the Secret Superpower of"
          secTitle2="Modern Brands"
          description="Web apps have become the powerhouse of today’s digital world. They are fast, flexible, and built to keep users hooked, just like mobile apps. They load quicker than traditional sites (before you can blink), work smoothly across all devices (optimized and responsive), and deliver app-like experiences right inside the browser (no downloading needed). For businesses, that means higher engagement, smarter automation, seamless scalability, and the freedom to build experiences that evolve with your customers. In a city like New York, where speed and innovation rule, a high-performing web app development service in New York isn’t just helpful, it’s your competitive edge."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact-us"
        />


        <LocationSupport
          supportCards={supportCardsData}
        />


        <WebAppServices/>



        <WebAppProcess/>


        <ExpertTalk/>


        <WordpressPortfolio />



        <WeServe 
        minihead="Solutions"
        title="Industries We Serve" 
        secPara="Through our web app development, we have solved problems faced by 17 industries in America, helping them go global."
        serves={serves} 
        />


         {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Affordable & Reliable Web App Development"
          secPara="Choose a pricing plan that gives you premium web app development, expert support, and results built to grow with your business."
          tabsData={dynamictabsData}
        /> */}


        <ContactUsSec secTitle="Talk to the Experts Trusted by Americans" />

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
  )
}

export default WebAppDevelopment
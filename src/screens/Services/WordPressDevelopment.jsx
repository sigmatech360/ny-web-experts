import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import bannerBG from "../../assets/images/services/wordpressdevelopment/herobanner.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/wordpressdevelopment/about.webp";
import service1 from "../../assets/images/services/wordpressdevelopment/service-1.webp";
import service2 from "../../assets/images/services/wordpressdevelopment/service-2.webp";
import service3 from "../../assets/images/services/wordpressdevelopment/service-3.webp";
import service4 from "../../assets/images/services/wordpressdevelopment/service-4.webp";
import ContactUsSec from "../../components/ContactUsSec";
import OurBenenfits from "../../components/OurBenenfits";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import OurProcess from "../../components/OurProcess";
import GetCustomLogo from "../../components/GetCustomLogo";
import OurServices from "../../components/OurServices";
import PortfolioSec from "../../components/PortfolioSec";
import ReactHelmet from "../../components/ReactHelmet";

const WordPressDevelopment = () => {



 const processData = [
  {
    number: "01",
    title: "Research & Strategy",
    description: "Every process starts with a thorough research of your brand and what you do. This becomes the foundation of the website."
  },
  {
    number: "02",
    title: "Design",
    description: "We transform insights into interactive visuals. Every layout, color, and transition is crafted for usability, conversion, and brand harmony."
  },  
  {
    number: "03",
    title: "Development",
    description: "Our developers bring designs to life with clean code, speed optimization, and flawless responsiveness, tested across browsers, devices, and performance metrics."
  },
  {
    number: "04",
    title: "On-Going Support",
    description: "Once live, we monitor, maintain, and optimize your site for optimal performance, ensuring your WordPress platform evolves in tandem with your business."
  }
];


  return (
    <>

       <ReactHelmet
          title="WordPress Development New York"
          description="Power your brand with NY Web Experts, the leading WordPress development company in New York. From eCommerce and enterprise sites to plugin integrations, we build fast, responsive, custom WordPress websites designed to rank, convert, and outperform competitors."
          keywords="wordpress development company new york, wordpress development services new york, wordpress website development company new york, custom wordpress development new york, custom wordpress development services new york"
          url="https://nywebexperts.com/wordpress-development"
        />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Deploy Websites with the Tech That Powers the World!"
          description="Power your website with the tech-stack that powers 60% the world’s web apps. With our WordPress Development services in New York, your business gains the technology, expertise, and design intelligence trusted by global brands. We offer:"
          bulletpoints={[
            "eCommerce Stores Development",
            "Enterprise Websites Development",
            "Custom Web Applications",
            "Plug-in Integration",
          ]}
          descriptionthree="If it’s good for the world, it’s undoubtedly good for you!"
          cta1="Get Your Business to the World"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          secTitle1="Your Website,"
          secTitle2="For You!"
          description="As a full-service web agency, we always recommend our clients to opt for our custom WordPress development services in New York, simply because it gives them the power to fully control their website. The days of needing web developers for maintenance are far over. With our custom WordPress development in New York, we give you the power to:"
          chooseListItems={[
            "Manage",
            "Control",
            "Maintain",
            "Upload",
          ]}
          description2="Essentially, you can do everything you want, yourself!"
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us"
          aboutbtnlink="/contact-us"
        />

      <OurServices
        minihead="Services"
        mainhead="Our WordPress Development Options"
        mainpara="From idea to implementation, we provide a full range of WordPress services to help your brand grow online."

        serviceonemini="E-commerce Development:"
        serviceoneminipara="Showcase your brand to the world with our e-commerce WordPress development services in New York, built to be fast, responsive, and so good it converts everyone into customers!"
        serviceimg1={service1}


        serviceonelarge="Custom WordPress Development:"
        serviceonelargepara="As the name suggests, websites customized to your needs and your business, powered by the best tech-stack in the web world!"
        serviceimg2={service2}

        servicetwolarge="Website Revamp & Redesign"
        servicetwolargepara="Transform your outdated site into a high-performing digital asset with modern design, optimized speed, and enhanced user engagement."
        serviceimg3={service3}


        servicetwomini="Plugin & API Integration"
        servicetwominipara="Extend your site’s capabilities with intelligent plugin development and third-party integrations that enhance performance and automation."
        serviceimg4={service4}
      />


        <OurProcess
          minihead="The Difference We Make"
          mainhead="Your WordPress Website Development Process"
          mainpara="How a website is developed becomes the heartbeat of its success. We build it with precision, strategy, and purpose, ensuring every line of code, every interaction, and every design choice contributes to performance, engagement, and measurable growth."
          data={processData}
        />

        <GetCustomLogo className="mb-5" 
          maintxt="Get Custom Logo from our Best Logo Design Agency in USA"
         />

        <OurBenenfits
          minihead="Why Choose Us?"
          mainhead="Generic Web Dev? They Aren’t Even Our Competitors!"
          mainpara="Yes, everyone can build a website; everyone can publish it, too. But what we do is create the difference that puts your business over your competitors; the kind of difference that gets you noticed, remembered, and ranked."
          para2="The loading of your webpage before you can even blink? That’s what we do. A 60% increase in conversions driven by breathtaking design choices? That’s the difference we make. We don’t build websites; we build performance machines. We don’t follow design trends; we create visual systems that convert."
          para3="At our WordPress website development company in New York, your WordPress site isn’t just built to exist; it’s built to win."
          btntxt="Let’s Go Custom WordPress"
          leftItems={[
            { name: "Intuitive Frontend" },
            { name: "Powerful Backend" },
          ]}
        />

        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing for Real Results"
          secPara="We believe quality digital solutions should be accessible to everyone. Thus, our transparent pricing plan ensures startups, enterprises, and every other business get the best WordPress website development service in Buffalo, NY"
          tabsData={dynamictabsData}
        />

         <PortfolioSec />

        <ContactUsSec />

        <BlogSec
          secTitle="Latest Trends & Insights, All From The Blog"
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

export default WordPressDevelopment;

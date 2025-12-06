import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/webdesign/herobanner.webp";
import gooddesignbg from "../../assets/images/services/webdesign/gooddesignbg.webp";
import aboutimg from "../../assets/images/services/webdesign/aboutimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import WebDesignServices from "../../components/WebDesignServices";
import OurProcess from "../../components/OurProcess";
import FrontendExpertise from "../../components/FrontendExpertise";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import WebDesignPortfolio from "../../components/WebDesignPortfolio";



const NewWebDesign = () => {

    
 const processData = [
  {
    number: "01",
    title: "Research and Planning",
    description: "We begin by understanding your specific goals, the audience that relates to you, and creating a vision that connects with your brand identity."
  },
  {
    number: "02",
    title: "Wireframing",
    description: "Secondly, we create a sitemap that covers all important parts of your website, followed by page layouts that fit your brand preferences."
  },  
  {
    number: "03",
    title: "Visual Design",
    description: "We then design visuals for every web page, ensuring that every detail of the page connects with your audience and aligns with the goals of your website. "
  },
  {
    number: "04",
    title: "Development and Launch",
    description: "Finally, the designed pages go into the web development phase, where we strengthen your website’s backend and finalize every functionality of the frontend."
  }
];


 const expertpoints = [
            {
              title: "Brand-aligned visuals",
              description:
                "Designs that actually look like you. Colors, imagery, and style match your brand vibe so every visitor instantly recognizes your identity and trusts your presence without second-guessing.",
            },
            {
              title: "Clear information flow",
              description:
                "Content is organized so users glide through your page without confusion. Every section leads naturally to the next, guiding decisions, reducing overwhelm, and keeping visitors engaged long enough to convert.",
            },
            {
              title: "Conversion-driven layouts",
              description:
                "Every element is placed with purpose to boost clicks, form fills, and sales. No random fluff, just layouts built to turn casual scrollers into confident, ready-to-act customers.",
            },
            {
              title: "High-impact color systems",
              description:
                "Your color palette is crafted to spark emotion, highlight key actions, and keep attention exactly where you want it. Bold enough to stand out while staying aligned with your brand.",
            },
            {
              title: "Mobile responsive design",
              description:
                "Pages adjust smoothly across phones and tablets, keeping visuals sharp and navigation effortless. Users get a flawless experience anywhere, which builds trust and reduces drop-offs instantly.",
            },
            {
              title: "Audience-centered experiences",
              description:
                "Every design decision prioritizes your users’ needs, behaviors, and motivations. Nothing generic here, just thoughtful, human-focused experiences that make people feel understood and comfortable engaging with your brand.",
            },
          ]



  return (
    <>
      <ReactHelmet
        title=" Professional Web Design Services for New York Websites"
        description="We build stunning, user-focused website that boosts engagement and drives conversions. Our expert web design team delivers responsive, fast, and visually powerful sites tailored to your brand."
        keywords="website design new york, website design company​ new york, website design agency new york, website design services new york, ecommerce website design new york, custom website design​ new york, best website designs​ new york, affordable website design new york"
        url="https://nywebexperts.com/web-design"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner"
          formClass="service-form"
          bgImage={herobanner}
          title="Your Brand Deserves A Website With Real Personality"
          description="Everyone can make a pretty website, but who can make it convert? Our website design services in New York are made to pull people in, guide them smoothly, and make them trust you instantly. We create websites that feel modern, scroll beautifully, and stay aligned with your brand voice. Our focus is connection, clarity, and conversion."
          cta1="Design My Website"
          cta2="hehe"
        />
        
        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="Website Designs Made to Connect"
          description="Our website design agency in New York is skilled to create visually perfect websites that grow on strategy and convert on thoughtful placement of each element included in the design."
          descriptiontwo="The goal is to build websites that communicate who you are before visitors even think. Every color, layout, and interaction reflects your identity with purpose."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Explore More"
          aboutbtnlink="/about"
        />


        <WebDesignServices/>


         <OurProcess
          minihead="Web Design Process"
          mainhead="The Flow Behind Everything"
          mainpara="Every website design at New York Web Experts starts with a vision to come true. Every website is custom planned, professionally executed, and loved by our team till we achieve every goal linked with it. Here’s what the web design process covers at New York Web Experts: "
          data={processData}
        />

         <ServicesBanner
          secClass="location-hero-banner wordpress-banner webdesign-goodbanner"
          formClass="service-form"
          bgImage={gooddesignbg}
          minihead="Why Choose Us?"
          title="Websites Built With Thought, Skill, And Style"
          description="Our web design services in New York are known to merge creativity, functionality, and scalability in every website we build to ensure performance that ends at nothing but conversions. "
          bulletpoints={[
            "Modern and fresh layouts",
            "Fast loading pages",
            "Seamless navigation",
            "Brand-aligned visuals",
            "Mobile optimized",
            "Conversion-focused design",
            "UX driven thinking",
          ]}
          cta1="Build With Us"
          cta2="hehe"   
        />

        <WebDesignPortfolio/>



         <FrontendExpertise
          shortTopHead="Our Expertise "
          mainHead="Website Design That Connects Like Real Conversation "
          mainPara="Website design is at the heart of New York Web Experts. Every digital experience we create aligns perfectly with your brand voice and the emotions you want your audience to feel. Our design team crafts websites with purpose, using color psychology, layout strategy, and interactive flow to guide users effortlessly. Every page is built to reflect your identity, connect with your audience, and push your brand forward. "
          points={expertpoints}
        />


     {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Simple Packages For Every Brand"
          secPara="Choose from flexible, transparent website design plans that fit startups, small businesses, and growing brands. Each plan includes strategic design, responsive layouts, and clean development built for long-term performance."
          tabsData={dynamictabsData}
        /> */}


        <ContactUsSec secTitle="Let’s Build Your Website" />

        <BlogSec
          blogminihead="Blogs"
          secTitle="Get All the Latest Tech-Related Insights From the Experts"
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

export default NewWebDesign;

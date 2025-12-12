import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ReactHelmet from "../../components/ReactHelmet";
import ServicesBanner from "../../components/ServicesBanner";
import bannerBG from "../../assets/images/services/websitecontent/herobanner.webp";
import aboutimg from "../../assets/images/services/websitecontent/aboutimg.webp";
import chooseimg from "../../assets/images/services/websitecontent/chooseimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import service1 from "../../assets/images/services/brandvoice/service1.svg";
import service2 from "../../assets/images/services/brandvoice/service2.svg";
import service3 from "../../assets/images/services/brandvoice/service3.svg";
import service4 from "../../assets/images/services/brandvoice/service4.svg";
import BrandVoiceImpact from "../../components/BrandVoiceImpact";
import WebsiteRightContent from "../../components/WebsiteRightContent";
import BrandStrategyExpertise from "../../components/BrandStrategyExpertise";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";

const WebsiteContent = () => {
  const frontendservices = [
    {
      img: service1,
      title: "Landing Page Writing",
      para: "Turns confused browsers into confident decision makers with the right web content.",
    },
    {
      img: service2,
      title: "Blog Writing",
      para: "Writing blogs that build trust and visitors actually enjoy reading.",
    },
    {
      img: service3,
      title: "Business Profile Writing",
      para: "Close deals with business profiles that build credibility at a single glance.",
    },
    {
      img: service4,
      title: "Email & Newsletter Writing",
      para: "Warmup leads with target content written to help brands convert.",
    },
  ];

  const expertiseBoxes = [
    {
      num: "01",
      title: "SEO Optimized",
      desc: "We make Google fall in love with your content so your website shows up, stands out, and steals clicks from everyone else, including your competitors.",
    },
    {
      num: "02",
      title: "AEO Optimized",
      desc: "Your content gets the VIP pass for every kind of search, be it text or voice-based, so digital assistants choose you first.",
    },
    {
      num: "03",
      title: "GEO Optimized",
      desc: "We make sure your content shows up everywhere people search, even on LLMs such as ChatGPT, so your brand never hides in the shadows.",
    },
    {
      num: "04",
      title: "Written by Humans, For Humans",
      desc: "Just real humans writing real words that actually sound like you and solve problems that humans face.",
    },
    {
      num: "05",
      title: "Yours Only, Not Borrowed",
      desc: "We don’t borrow, steal, recycle, or “get inspired” a little too closely. Every word is written just for you.",
    },
    {
      num: "06",
      title: "Written to Convert",
      desc: "We write for real people, not search bots. Content that feels natural, reads smoothly, and keeps visitors hooked instead of bouncing.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Website Content Writing in New York"
        description="Reign and rank at the top of the search results with NY Web Experts, the leading website content writing company in New York, crafting content that builds trust, increases authority, and drives real results."
        keywords="website content writing new york, website copywriting services new york, website content services new york, website content company new york, website content agency new york, affordable website content services new york, SEO website content writing new york, website content editing services new york"
        url="https://nywebexperts.com/website-content"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner webcontent-herobanner-sec"
          formClass="service-form"
          bgImage={bannerBG}
          title="Content Writing that Sounds Like a Human… Not a Robot"
          description="Most websites talk. Only a few actually say something. At NY Web Experts, we take your half-said ideas, scattered notes, and “I’ll fix this later” sections and turn them into content that explains simply, connects naturally, and makes visitors think, “Ah… this makes sense.”"
          descriptionthree="That’s the magic of a good website content service in New York: it works even when you’re not there."
          cta1="Write My Content"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection  webcontent-about-sec" 
          miniheadclass="shorttop-head"
          minihead="What We Do"
          secTitle1="The Superpower Behind"
          secTitle2="High-Ranking Websites"
          description="There are more than 1.1 billion websites out there, some performing brilliantly, and others quietly drowning on page no. 27 of the search results. One of the biggest reasons for this gap is website content."
          bestvideohead="The Difference Website Content Makes"
          descriptiontwo="Content isn’t just a bunch of words sitting together. Our SEO website content writing service in New York is the superpower that guides your visitors and signals to search engines exactly where your website deserves to rank. Good content helps people understand you, helps Google trust you, and helps your website show up where it actually should."
          description2="So if you want your website to be found, read, and remembered, start with the words that do the work."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Get Seen by the Right Audience"
          aboutbtnlink="/contact-us"
        />

        <FrontendServices
          ServiceSecClass="brandvoice-services-sec"
          CardCol="col-lg-6 col-md-6"
          secCardClass="brandvoice-service-card"
          shortHead="Offerings"
          mainHead="Say it Better with Our Website Writing Services"
          description="Pages convert because of words, and we write those words, helping you gain visibility, authority, and more."
          services={frontendservices}
          btnClass="d-none"
        />

        <BrandVoiceImpact />

        <WebsiteRightContent />

        <WordPressPerformanceSection
          wordpresssecclass="WordPressPerformanceSection location-choose-banner webcontent-choose-sec"
          miniheadclass="shorttop-head"
          secTitle1="Content that Sounds Like You,"
          secTitle2="Just Much Better"
          description="When you land on a website that tells you nothing, you leave. Simple. Your customers think the same way. With our affordable website content services in New York, you finally get the words that hook visitors, guide them, and keep them interested instead of hitting that back button. With our content experts, you get:"
          chooseParaItems={[
            {
              text: "Clear, confident messaging",
            },
            {
              text: "Strong brand storytelling",
            },
            {
              text: "SEO built smart",
            },
            {
              text: "Engages instantly, always",
            },
            {
              text: "Converts curiosity fast",
            },
            {
              text: "Feels real, not robotic",
            },
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our Content Wizards"
          aboutbtnlink="/contact-us"
        />

        <BrandStrategyExpertise
          heading="Written to Rank"
          subheading="Not Just Written, Optimized for Perfection"
          description="Content that works is never an accident. It’s a mix of strategy, creativity, and a little bit of New York blunt honesty. At NY Web Experts, we don’t just write; we engineer content built to rank, read, and resonate."
          boxes={expertiseBoxes}
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Premium Words in Affordable Pricing"
          secPara="Get content that builds trust and authority for your website. Choose a plan that fits your goals and let our words start converting visitors into customers."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Talk to Expert Writers" />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Insights Related to Content, Blogs, and More"
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

export default WebsiteContent;

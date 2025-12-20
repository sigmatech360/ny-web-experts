import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/seo/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/seo/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/seo/aboutimg.webp";
import whyseo from "../../assets/images/services/seo/whyseo.webp";
import service1 from "../../assets/images/services/seo/service1.svg";
import service2 from "../../assets/images/services/seo/service2.svg";
import service3 from "../../assets/images/services/seo/service3.svg";
import service4 from "../../assets/images/services/seo/service4.svg";
import rankingicon from "../../assets/images/services/seo/rankingicon.svg";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import SEORanking from "../../components/SEORanking";
import TransferWhyus from "../../components/TransferWhyus";
import SMMProcess from "../../components/SMMProcess";
import whyseobg from "../../assets/images/services/seo/whyseo-bg.webp";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";

const NewSEO = () => {
  const frontendservices = [
    {
      img: service1,
      title: "On-Page SEO Optimization",
      para: "Strong rankings begin on your website, not outside it. Our on-page SEO optimization services in New York focus on how search engines read, understand, and prioritize your pages. We refine content hierarchy, strengthen internal flow, optimize metadata, and align intent across every on-site element so your pages communicate relevance clearly to both users and search engines.",
    },
    {
      img: service2,
      title: "Off-Page SEO Optimization",
      para: "Authority is not claimed. It is earned. Through strategic outreach, credible placements, and meaningful brand mentions, our off-page SEO services in New York strengthen how your business is perceived beyond your website. We focus on building trust signals that search engines respect and competitors find difficult to replicate, helping your rankings remain stable and competitive.",
    },
    {
      img: service3,
      title: "Speed & Responsiveness ",
      para: "Visibility means nothing if your website does not load properly. That is why we optimize speed and responsiveness to ensure smooth performance across devices and faster load times. As part of our search engine optimization services in New York, this keeps users engaged longer, improves interaction, and sends strong quality signals to search engines through real user behavior.",
    },
    {
      img: service4,
      title: "Local SEO Strategy",
      para: "Being visible nationally means little if local customers cannot find you. Our local SEO optimization services in New York position your business where nearby intent turns into real action. We strengthen your local presence by improving reviews, optimizing your Google Business profile, and refining location signals so your brand appears confidently when customers are ready to choose.",
    },
  ];

  const transferwhysteps = [
    {
      value: "70%",
      text: "Of high-intent search clicks go to SEO results, not paid ads",
    },
    {
      value: "60%",
      text: "Lower cost per lead than paid ads",
    },
    {
      value: "3× Growth",
      text: "Sustained traffic growth versus stop-start ad campaigns",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="SEO Optimization in New York"
        description="Increase visibility with expert SEO optimization services in New York, powered by NY Web Experts, the leading full-service design and development company helping brands rank higher, faster, and smarter."
        keywords="search engine optimization agency new york, search engine optimization services new york, search engine optimization marketing new york, seo agency new york, seo services new york, local seo new york, on page seo new york, off page seo new york, seo company in new york"
        url="https://nywebexperts.com/search-engine-optimization"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner newsmm-benefit-bg"
          formClass="service-form"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Be the Brand Search Engines Choose First"
          description="Search results might be crowded, but not everyone is ranking at the top, and not everyone knows how to. At NY Web Experts, we help ambitious businesses, the ones that want to rule the search engines, claim their position at the very top with SEO optimizatoin services in New York."
          descriptiontwo="If you are serious about being seen, this is where the conversation starts."
          cta1="Rank Higher"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner newseo-aboutsec"
          miniheadclass="shorttop-head"
          secTitle1="We Help You"
          secTitle2="Rank Higher!"
          description="If ranking were easy, everyone would be ranking on page one. But it’s not! Search engines do not reward luck. They reward credibility, consistency, and most of all, the right strategies, because strategies are what get you discovered."
          descriptiontwo="At NY Web Experts, we help brands increase website visibility by optimizing the elements that search engines actually evaluate. Our search engine optimization services in New York include: "
          chooseListItems={[
            "Improved Visibility",
            "Faster Website Performance",
            "More Conversions",
          ]}
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Our SEO Experts"
          aboutbtnlink="/contact-us"
        />

        <FrontendServices
          ServiceSecClass="newseo-services-sec"
          CardCol="col-lg-6"
          secCardClass="brandvoice-service-card newseo-service-card"
          shortHead="Our Services"
          mainHead="More Ways We Help You Build"
          description="Explore the services we provide, along with mobile application development services to complete your digital experience in all aspects."
          services={frontendservices}
          btnClass="d-none"
        />

        <SEORanking />

        <TransferWhyus
          shortTopHead="Better Results than Paid Ads"
          mainHead="Attention Fades, while Authority Multiplies"
          description="In a world where businesses chase paid ads, the ones that seek real authority understand the power of SEO. Yes, paid ads can buy attention, but what happens when the budget runs dry? With SEO, momentum does not disappear because visibility is earned, not rented. While ads stop the moment spending pauses, a strong search presence keeps working in the background. With the right strategy, SEO compounds over time, builds brand credibility, and positions your business ahead of competitors focused only on short-term traffic. "
          descriptiontwo="As a performance-driven SEO agency in New York, we help brands create visibility that lasts longer, costs less over time, and grows stronger with every search."
          stats={transferwhysteps}
        />

        <SMMProcess />

        <ServicesBanner
          secClass="location-hero-banner wordpress-banner newseo-whyseo-bg"
          formClass="service-form"
          bgImage={whyseobg}
          servicesbannerimg={whyseo}
          minihead="The Best in Business"
          title="Driven by Results. Trusted by Americans"
          description="SEO is how your business earns visibility when people are actively searching for answers, services, or solutions. It is not about chasing algorithms or stuffing keywords. It is about aligning your website with how search engines evaluate relevance, trust, and usefulness. When done right, SEO positions your brand exactly where decisions are made, consistently and organically."
          cta1="Get Your Mobile Application"
          cta2="hehe"
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="SEO Optimization Packages to Rank Higher"
          secPara="When search results decide who wins, our SEO packages are built for brands that want to be chosen, not chased."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Talk to Our SEO Experts" />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Insights Related to Websites, Web Apps, and More"
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

export default NewSEO;

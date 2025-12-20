import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import ServicesBanner from "../../components/ServicesBanner";
import herobanner from "../../assets/images/services/smm/herobanner.webp";
import aboutimg from "../../assets/images/services/smm/aboutimg.webp";
import DefaultLayout from "../../components/DefaultLayout";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import BrandStrategyProcess from "../../components/BrandStrategyProcess";
import chooseimg from "../../assets/images/services/smm/chooseimg.webp";
import SMMPlatform from "../../components/SMMPlatform";
import benefitbg from "../../assets/images/services/smm/benefitbg.png";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import service1 from "../../assets/images/services/smm/service1.svg";
import service2 from "../../assets/images/services/smm/service2.svg";
import service3 from "../../assets/images/services/smm/service3.svg";
import service4 from "../../assets/images/services/smm/service4.svg";
import service5 from "../../assets/images/services/smm/service5.svg";
import service6 from "../../assets/images/services/smm/service6.svg";



const NewSMM = () => {

  const frontendservices = [
    {
      img: service1,
      title: "Search Engine Optimization",
      para: "We help you attract organic traffic through targeted keywords, optimized structure, and meaningful content. Our SEO strategies support sustainable growth and position your website for stronger search visibility across competitive markets.",
    },
    {
      img: service2,
      title: "Website Design",
      para: "Your website becomes your visual identity. Our design process focuses on clarity, beauty, and flow, creating an experience that feels natural to navigate and intuitive for every type of user.",
    },
    {
      img: service3,
      title: "Web Development",
      para: "We create user-friendly, performance-driven websites that support your brand goals. Every element is built for stability, speed, and responsiveness so visitors enjoy a smooth experience that encourages deeper exploration.",
    },
    {
      img: service4,
      title: "Content Writing",
      para: "We produce content that informs, inspires, and connects. From website copy to social messaging, every word is crafted to match your tone and help your audience understand your value clearly.",
    },
    {
      img: service5,
      title: "Brand Identity",
      para: "Your brand identity should speak before you do. We create memorable visual systems and messaging that help your business stand out and remain consistent across every customer touchpoint.",
    },
    {
      img: service6,
      title: "Domain Registration",
      para: "We help you secure a domain that strengthens your credibility. With professional guidance and smooth setup, your brand gains a strong and reliable digital foundation.",
    },
  ];

  const processItems = [
    {
      step: "01",
      title: "Discovery and Analysis",
      desc: "We explore your goals and audience behavior to understand what drives engagement and what your brand must highlight more effectively.",
    },
    {
      step: "02",
      title: "Strategy Creation",
      desc: "We map content themes, posting schedules, and platform priorities to guide your social media marketing towards relevant and measurable growth.",
    },
    {
      step: "03",
      title: "Creative Execution",
      desc: "We design visuals and craft messages that spark interest, inspire shares, and keep your audience returning for more meaningful interactions.",
    },
    {
      step: "04",
      title: "Monitoring and Optimization",
      desc: "We track performance, study audience responses, and refine your strategy to ensure continued improvement and stronger long-term results.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Smart Social Media Marketing Services USA for Growth and Brand Visibility"
        description="Experience strategic social media marketing in the USA that strengthens your brand, attracts engagement, and builds lasting visibility across major platforms."
        keywords="social media marketing new york, social media marketing agency new york, social media marketing services new york, social media marketing company new york, social media advertising new york, social media management companies new york"
        url="https://nywebexperts.com/social-media-marketing"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={herobanner}
          title="Social Media Marketing that Connects You with Your Audience"
          description="Your audience is already online. The question is whether they notice you. Our social media marketing services in New York help your brand stay visible, relevant, and engaging. With thoughtful content, timing that builds on data insights, and platform-specific strategies, your message reaches the right people at the right moment."
          cta1="Create Your Social Presence"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          secTitle1="Building Brands with"
          secTitle2="Relevance and Connectivity"
          description="We combine creativity with strategic communication to keep your brand connected to real people. As a dedicated social media marketing agency in New York, we work to understand audience behavior, identify opportunities, and craft content that builds trust while encouraging meaningful engagement across every channel."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="More About Us"
          aboutbtnlink="/about"
        />

        <FrontendServices
          ServiceSecClass="newsmm-services-sec"
          CardCol="col-lg-4 col-md-6"
          secCardClass="brandvoice-service-card"
          shortHead="More of Our Services"
          mainHead="A Complete Digital Experience"
          description="Explore a full suite of digital services that strengthen your brand identity, improve visibility, and support long term online growth."
          services={frontendservices}
          btnClass="d-none"
        />

        <BrandStrategyProcess
          shortTopHead="The Process"
          mainHead="The Process of Our Social Media Marketing "
          description="Our process starts by studying your audience, shaping your message, choosing the right platforms, and delivering content that encourages participation. Every step is built with intention so your brand gains clarity, trust, and consistent engagement."
          processItems={processItems}
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection frontend-choose-sec newsmm-choose-sec"
          miniheadclass="shorttop-head"
          secTitle1="The Advantage of Social Media Marketing in New York"
          description="In a place that never slows down, your brand must stay visible. With our social media marketing company in New York, you show up consistently, creatively, and confidently across every platform your audience uses."
          chooseParaItems={[
            {
              text: "Wider brand visibility across busy New York audiences",
            },
            {
              text: "Stronger engagement through creative content and real-time interactions",
            },
            {
              text: "Platform-specific optimization for higher reach and relevance",
            },
            {
              text: "Strategies built for conversions, loyalty, and long-term brand growth",
            },
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Start Today"
          aboutbtnlink="/contact-us"
        />

        <SMMPlatform />

        <ServicesBanner
          secClass="location-hero-banner wordpress-banner newsmm-benefit-bg"
          formClass="service-form"
          bgImage={benefitbg}
          minihead="Why Ny Web Experts"
          title="What’s Different at NY Web Experts in Social Media Marketing?"
          description="We lead with creativity and end with trust. Every strategy is built to attract attention, nurture engagement, and convert curiosity into measurable growth."
          bulletpoints={[
            "Creative direction shaped by New York audience behavior",
            "Strategies inspired by real data and trends",
            "Consistent posting that strengthens brand familiarity",
            "Engaging content tailored to each platform",
            "Clear reporting that shows meaningful progress",
            "Smooth communication at every stage",
            "A team focused on lasting brand relationships",
          ]}
          cta1="Start Your Journey "
          cta2="hehe"
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Social Media Marketing Packages"
          secPara="Our social media marketing packages are designed for businesses at every stage. Whether you need creative content, consistent posting, or complete management, our plans offer flexibility and value. Each package helps your brand stay visible, active, and aligned with the fast digital world of New York."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Get in Touch with Us" />

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

export default NewSMM;

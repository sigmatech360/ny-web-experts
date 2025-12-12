import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import herobanner from "../../assets/images/services/brandvoice/herobanner.webp";
import aboutimg from "../../assets/images/services/brandvoice/aboutimg.webp";
import FrontendServices from "../../components/FrontendServices";
import doublenetwork from "../../assets/images/services/domaintransfer/service-double-network.svg";
import service1 from "../../assets/images/services/brandvoice/service1.svg";
import service2 from "../../assets/images/services/brandvoice/service2.svg";
import service3 from "../../assets/images/services/brandvoice/service3.svg";
import service4 from "../../assets/images/services/brandvoice/service4.svg";

import BrandVoiceProcess from "../../components/BrandVoiceProcess";
import TransferSupport from "../../components/TransferSupport";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import ContactUsSec from "../../components/ContactUsSec";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ReactHelmet from "../../components/ReactHelmet";

const BrandVoice = () => {
  const frontendservices = [
    {
      img: service1,
      title: "Brand Voice",
      para: "Building a recognizable tone that sparks trust and builds connection.",
    },
    {
      img: service2,
      title: "Brand Identity Design",
      para: "Designing visuals that show your personality and elevate your presence instantly.",
    },
    {
      img: service3,
      title: "Merchandising",
      para: "Creating branded products that turn customers into excited brand supporters.",
    },
    {
      img: service4,
      title: "Brand Positioning",
      para: "Securing your place in the market with clarity that drives long term growth.",
    },
  ];

  const steps = [
  {
    number: "01",
    title: "Discovery & Research",
    description:
      "We immerse ourselves in your brand to understand your mission, values, audience, and personality. This is where we gather insights about your current tone, messaging gaps, and the emotions your voice should evoke. Our goal is a voice that feels authentic, strategic, and ready to resonate."
  },
  {
    number: "02",
    title: "Voice Personality Mapping",
    description:
      "We translate your brand identity into a distinct, human voice. This includes defining tone, vocabulary, sentence style, and emotional cues. By mapping out your voice personality, we make your brand instantly recognizable, relatable, and consistent across all channels and touchpoints."
  },
  {
    number: "03",
    title: "Audience Alignment",
    description:
      "We ensure your brand voice speaks directly to the people who matter most. By analyzing audience behaviors, language preferences, and motivations, we create messaging that feels personal, persuasive, and emotionally resonant, guiding your audience to engage, connect, and take action naturally."
  },
  {
    number: "04",
    title: "Voice Positioning",
    description:
      " We define how your voice should appear in your industry. This includes differentiating your brand, establishing authority, and finding the right balance between professional and personable. A well-positioned voice makes your brand memorable, trusted, and instantly recognizable among competitors."
  },
  {
    number: "05",
    title: "Voice Guidelines Creation",
    description:
      "Once your voice is defined, we create a detailed guide for implementation. This includes tone variations, writing style, word choice, and communication rules for social media, emails, and campaigns. It ensures every word reflects your brand consistently and authentically."
  },
  {
    number: "06",
    title: "Implementation Support",
    description:
      "We provide practical tools and coaching to embed your voice across all platforms. From content creation to team training, we ensure your brand speaks coherently everywhere. Every interaction, post, and campaign becomes a true reflection of your unique voice."
  },
];

  return (
    <>
      <ReactHelmet
        title="Brand Voice Services in New York"
        description="Discover how New York Web Experts helps businesses create distinctive, memorable brand voices that resonate with audiences, strengthen recognition, and boost engagement across all channels."
        keywords="brand voice new york, brand voice development new york, brand voice agency new york, brand voice company new york, brand voice services new york"
        url="https://nywebexperts.com/brand-strategy"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner frontend-herobanner-bg"
          formClass="service-form"
          bgImage={herobanner}
          title="New York’s Creative Studio For Powerful Brand Voices"
          description="Your brand deserves a voice that sounds like you and sells like magic. Our Brand Voice Development in New York is to create voices and identities that feel authentic, bold, and unforgettable. From positioning to personality, we build a brand identity that carries your message across New York and beyond with clarity, confidence, and charm."
          cta1="Build My Brand Voice"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="Positioning Brands With Intentional,"
          secTitle2="Distinctive Brand Voice"
          description="Our brand voice company in New York creates brand voices rooted in understanding what makes your business truly unique. Our focus is to create a voice that feels authentic to your audience and recognizable in every conversation."
          descriptiontwo="Before any digital marketing begins, your brand voice becomes the foundation for how your business speaks, writes, and connects. It guides your messaging, storytelling, and communication style with clarity and consistency."
          description2="This clear, confident voice helps you engage, stand out, and grow. With a strong brand voice, every interaction becomes memorable, persuasive, and aligned with your brand personality."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to A Strategist"
          aboutbtnlink="/contact-us"
        />

        <section className="brand-voice-quote">
          <div className="container">
            <div className="brand-quote-bg">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="brand-quote-txt">
                    <h4>
                     “Nike Did Not Discover the Power of Advertising, They Discovered the Power of Their Own Voice”
                    </h4>
                    <h5>~ Dan Wieden</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <FrontendServices
          ServiceSecClass="brandvoice-services-sec"
          CardCol="col-lg-6"
          secCardClass="brandvoice-service-card"
          shortHead="360° Branding Services"
          mainHead="How We Strengthen Your Brand Strategy"
          description="We build thoughtful identity systems that transform how your audience sees you."
          services={frontendservices}
          btnClass="d-none"
        />

        <BrandVoiceProcess
          miniHead="Our Process"
          mainHead="How Your Voice Evolves Through Our Creative Process"
          steps={steps}
        />

        <TransferSupport
          secClass="brandvoice-suppport-sec"
          mainHead="One Quick Step to Give Your Brand a Strong Voice"
          description="A strong, expertly built brand voice becomes the foundation your business grows on. It shapes how people hear you, remember you, and connect with your brand above all others."
          descriptiontwo="With a clear, consistent voice, we help you establish authority, build trust, and create lasting emotional value in your audience’s mind. With our brand voice services in New York, every message, campaign, and interaction becomes sharper, more persuasive, and more memorable, turning casual observers into loyal advocates."
          buttonText="Contact Us"
        />

        {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Brand Voice Packages"
          secPara="Our pricing is designed to support businesses at different stages. Whether building from scratch or refining your identity, every plan delivers strategy, clarity, and creativity without compromise."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Fill the Form to Get Started" />

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
  );
};

export default BrandVoice;

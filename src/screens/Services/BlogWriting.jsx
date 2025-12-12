import React from "react";
import ReactHelmet from "../../components/ReactHelmet";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import bannerBG from "../../assets/images/services/blogwriting/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/blogwriting/herobanner-inner-img.webp";
import aboutimg from "../../assets/images/services/blogwriting/aboutimg.webp";
import BlogWritingResult from "../../components/BlogWritingResult";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import BrandStrategyService from "../../components/BrandStrategyService";
import BlogWritingProcess from "../../components/BlogWritingProcess";
import BrandVoiceProcess from "../../components/BrandVoiceProcess";
import BlogWritingScale from "../../components/BlogWritingScale";
import BrandStrategyExpertise from "../../components/BrandStrategyExpertise";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";

const BlogWriting = () => {
  const faqs = [
    {
      header: "Website Content",
      content: "Clear, engaging site copy that guides users smoothly toward meaningful actions.",
    },
    {
      header: "SEO Copywriting",
      content: "Keyword-smart writing crafted to boost rankings without sacrificing natural readability.",
    },
    {
      header: "Product Descriptions",
      content:
        "Persuasive descriptions highlighting value, benefits, and personality to drive conversions.",
    },
    {
      header: "Social Media Content",
      content:
        "Snappy posts built for engagement, brand voice, and algorithm-friendly visibility.",
    },
    {
      header: "Email and Newsletter Writing",
      content:
        "Compelling email content that nurtures leads, builds relationships, and encourages clicks.",
    },
    {
      header: "Business Proposals",
      content:
        "Professional proposals designed to impress, persuade, and secure high-value opportunities.",
    },
  ];

   const steps = [
  {
    number: "01",
    title: "The Psychology Behind Great Content",
    description:
      "We write blogs that flow with how users think and search. Every line guides attention, builds curiosity, and keeps readers moving toward the goal without feeling pushed.",
    btntxt: "Discover Our Approach"
  },
  {
    number: "02",
    title: "Topic Selection That Outperforms Competitors",
    description:
      "Your blog wins or loses before a single word is written. We choose topics that match demand, solve real problems, and position your brand directly in high-intent traffic paths.",
      btntxt: "See How We Pick Topics "
  },
  {
    number: "03",
    title: "Writing That Feels Effortless to Read",
    description:
      "We break information into digestible, scroll-friendly narratives. Short sentences, clean transitions, and a natural rhythm that feels like someone is talking to you, not lecturing.",
      btntxt: "Experience the Flow"
  },
  {
    number: "04",
    title: "Data That Shapes Every Blog",
    description:
      "We pull insights from search trends, keyword gaps, SERP patterns, and audience behavior. No guesswork. Every blog is built on what the market is already responding to.",
      btntxt: "View Our Data Process"
  },
  {
    number: "05",
    title: "A Structure Search Engines Actually Prefer",
    description:
      "Headers, hierarchy, keyword placement, formatting, snippets, clarity. We design blogs with the architecture search engines reward, boosting ranking potential instantly.",
      btntxt: "See the SEO Structure"
  },
  {
    number: "06",
    title: "Content Built for Multi-Channel Impact",
    description:
      "Every blog is crafted to be repurposed cleanly into social posts, emails, ads, and scripts. Maximum output from one piece of content to stretch your marketing further.",
      btntxt: "Unlock Multi-Use Content"
  },
  ];

const expertiseBoxes = [
    {
      num: "01",
      title: "Industry-Rooted Content Creation",
      desc: "We write content for tech, fashion, wellness, finance, e-commerce, and more. Each piece is shaped around user intent and market behavior.",
    },
    {
      num: "02",
      title: "Trusted by Clients Worldwide",
      desc: "Our content is structured for engagement and long-term performance, especially our SEO blog writing services in New York, which deliver measurable growth.",
    },
    {
      num: "03",
      title: "SEO-integrated Web Plans",
      desc: "Every blog is optimized with intent-based keywords, semantic relevance, and search patterns that help your content outperform competitors and rank across New York markets.",
    },
    {
      num: "04",
      title: "Story-Telling that attracts real humans",
      desc: "Our writing connects emotionally while guiding readers toward meaningful action, shaping content that is both enjoyable to read and strategically aligned with your brand goals.",
    },
    {
      num: "05",
      title: "Research-Backed Insights",
      desc: "Our team studies trends, audience behavior, and industry data before every blog is written. This ensures your content reflects expertise, authority, and accuracy.",
    },
  ];


  return (
    <>
      <ReactHelmet
        title="Blog Writing Services in New York for Growing Brands"
        description="Get blog writing in New York that blends creativity, research, and SEO. Our writers craft engaging blogs that rank, convert, and strengthen your brand presence across the digital world."
        keywords="blog writing services new york, professional blog writing new york, SEO blog writing services new york, blog writing agency new york, business blog writing new york. website blog writing services new york, blog article writing services new york, blog post writing new york, blog writing and management new york"
        url="https://nywebexperts.com/blog-writing"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner blogwriting-herobanner"
          formClass="service-form"
          bgImage={bannerBG}
          servicesbannerimg={herobannerinnerimg}
          title="Blog Content that Leads the Browsers & Stays in Minds"
          description="Your brand deserves blog writing in New York that feels alive, helpful, and beautifully strategic. Our writers turn ideas into content that makes you stop and look; not only that, but these blogs are backed by research, creativity, and search intent. Every blog becomes your quiet salesperson doing its job 24/7 without losing personality."
          cta1="Start Your Blog! "
          cta2="hehe"
        />

        <BlogWritingResult />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          miniheadclass="shorttop-head"
          minihead="Why Choose Us"
          secTitle1="Blog Writing Built for the"
          secTitle2="Digital Expansion"
          description="At New York Web Experts, we write blogs that feel human and think algorithmically. Our team blends creativity with technical SEO, digital trends, and user psychology. Our blog writing company in New York studies your brand tone, audience behavior, and search patterns to craft blogs that bring long-term results, not temporary visibility."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="About New York Web Experts"
          aboutbtnlink="/about"
        />

        <BrandStrategyService
          miniHead="More of Our Services"
          mainHead="Our Writing Expertise Offers a Lot Beyond Blogs"
          description="Our content writing services help brands grow with precision, personality, and powerful storytelling, because everything we create is optimized for readability and results."
          buttonText="Talk to Our Experts"
          buttonLink="/contact-us"
          faqs={faqs}
        />

        <BlogWritingProcess />

        <BrandVoiceProcess
         brandvoiceprocesssec="blogwriting-steps-sec"
          miniHead="Our Approach"
          mainHead="What Makes High-Performing Blogs Actually Work"
          steps={steps}
        />

        <BlogWritingScale/>


         <BrandStrategyExpertise
          heading="Our Expertise"
          subheading="New York Web Experts Leads the Market, There’s a Reason Why"
          description="Our expertise in blog writing in New York blends creative thinking with data-smart strategy to help brands grow with content that resonates, ranks, and drives real action. We build messages that fit audiences across industries with precision."
          boxes={expertiseBoxes}
        />


         {/* <TabsPricing
          minihead="Pricing Plan"
          mainhead="Blog & Content Packages"
          secPara="Our pricing is structured for businesses that need reliable, high-quality blogs at scale. Each package includes research, SEO, writing, and editing, so you get a complete content solution with every delivery."
          tabsData={dynamictabsData}
        /> */}

        <ContactUsSec secTitle="Start Your Blog Today" />

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

export default BlogWriting;

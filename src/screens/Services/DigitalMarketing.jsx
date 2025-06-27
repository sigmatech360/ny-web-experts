import React from "react";

import bannerBG from "../../assets/images/services-digitalMarketing-banner-bg.webp";

import startupicon from "../../assets/images/services-digitalMarketing-abt-icon1.webp";
import developmenticon from "../../assets/images/services-digitalMarketing-abt-icon2.webp";
import analyticsicon from "../../assets/images/services-digitalMarketing-abt-icon3.webp";
import comittedicon from "../../assets/images/services-digitalMarketing-abt-icon4.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";
import OutsourcingStrategySec from "../../components/OutsourcingStrategySec";

import WebCreationSec from "../../components/WebCreationSec";
import webcreationimg from "../../assets/images/services--digitalMarketing-web-creation-img.webp";

import projectsimg1 from "../../assets/images/services-cms-Dev-projects-img-1.webp";
import projectsimg2 from "../../assets/images/services-cms-Dev-projects-img-2.webp";
import projectsimg3 from "../../assets/images/services-cms-Dev-projects-img-3.webp";
import projectsimg4 from "../../assets/images/services-cms-Dev-projects-img-4.webp";
import projectsimg5 from "../../assets/images/services-cms-Dev-projects-img-5.webp";
import projectsimg6 from "../../assets/images/services-cms-Dev-projects-img-6.webp";

import avgPerformanceImg from "../../assets/images/services-avg-img.webp";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import ServicesBlogSec from "../../components/ServicesBlogSec";
import ReactHelmet from "../../components/ReactHelmet";
const avgPerformanceData = [
  {
    id: 1,
    percentage: "200%",
    // icon: brandicon,
    name: "Increase In ROI",
    description: "Savvy tactics for greater ROI",
  },
  {
    id: 2,
    percentage: "170%",
    // icon: uiuxdesignicon,
    name: "Increase In Engagement",
    description: "Igniting engagement on every channel.",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Multi-Platform Campaigns",
    description:
      "We run highly targeted campaigns across Meta, Google Ads, TikTok, and YouTube to reach your audience where they’re most active.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Data-Driven Strategy",
    description:
      "Our decisions are backed by real-time analytics, allowing us to continuously optimize and tweak for performance, conversions, and ROI.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Precise Audience Targeting",
    description:
      "Reach the right people at the right time with advanced demographic, interest, and behavior-based targeting.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Measurable Results",
    description:
      "Track everything from clicks and engagement to leads and sales. Our transparent reporting keeps you in control of your marketing impact.",
  },
];

const DigitalMarketing = () => {
  return (
    <>
      <ReactHelmet
        title="NY Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/digital-marketing"
      />
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Digital Marketing"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Marketing That Moves Your Brand With Real Growth`}
        secDescription={`Need more leads, better engagement, higher conversions? That’s exactly what our digital marketing service in New York is built for: brands that are ready to grow. If you're a business aiming to achieve big, we’ve got you. At NY Web Experts, a leading digital marketing agency in New York, we deliver data-driven strategies and custom campaigns that help you attract, convert, and retain the right audience faster and smarter.`}
        secSubSecTitle={`Digital Marketing That Achieves Higher ROI`}
        secSubSecDescription={`Whether you're an e-commerce brand aiming for higher sales, a growing startup ready to scale, or a local business wanting to reach more local customers, digital marketing is the real growth engine. At NY Web Experts, we're a results-driven digital marketing agency in New York that fine-tunes your entire marketing funnel, executes proven strategies, and delivers measurable growth. No guesswork, no gimmicks, just pure data and skills.`}
        boxesData={aboutBoxesData}
        btnText="Book A Call"
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={3500}
        secTag="Smart Strategies"
        secTitle="What Digital Marketing Can Do For Your Business"
        secDescription={`We help businesses grow through result-oriented digital marketing services tailored for maximum impact. As a leading digital marketing company in New York, we run high-converting campaigns across Meta, Google Ads, TikTok, and YouTube. Focusing on quality and performance, we create data-driven strategies that quickly generate traffic, boost conversions, and scale your brand online.`}
        listdata={[
          {
            title: "End-to-End Campaign Management",
            description:
              "From creatives to A/B testing and analytics, we handle every step of your digital marketing strategy for consistent growth.",
          },
          {
            title: "Performance-Driven Digital Marketing Strategy",
            description:
              "Our service is built to turn clicks into customers using tested digital marketing strategies in New York that work.",
          },
        ]}
      />

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTitle="Unlock Higher Returns with Targeted Campaigns"
        secDescription="Our digital marketing agency consistently outperforms industry benchmarks, achieving higher ROI through precise targeting, creative execution, and strategic platform use."
        listData={avgPerformanceData}
      />

      {/* <ProjectSec
        secTag="Projects"
        secTitle="Get inspired by our finest work"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      /> */}

      {/* <OurTeamSec /> */}

      <TestimonialSec />

      <ServicesBlogSec
        categorySlug="digital-marketing"
        itemsPerPage={3}
        pagination
      />
      <GetStarted />
    </DefaultLayout>
    </>
  );
};

export default DigitalMarketing;

import React from "react";

import bannerBG from "../../assets/images/services-smm-banner-bg.webp";

import startupicon from "../../assets/images/services-smm-abt-icon1.webp";
import developmenticon from "../../assets/images/services-smm-abt-icon2.webp";
import analyticsicon from "../../assets/images/services-smm-abt-icon3.webp";
import tiktokicon from "../../assets/images/services-smm-abt-icon4.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";
import OutsourcingStrategySec from "../../components/OutsourcingStrategySec";

import WebCreationSec from "../../components/WebCreationSec";
import webcreationimg from "../../assets/images/services--cmdDev-web-creation-img.webp";

import projectsimg1 from "../../assets/images/services-cms-Dev-projects-img-1.webp";
import projectsimg2 from "../../assets/images/services-cms-Dev-projects-img-2.webp";
import projectsimg3 from "../../assets/images/services-cms-Dev-projects-img-3.webp";
import projectsimg4 from "../../assets/images/services-cms-Dev-projects-img-4.webp";
import projectsimg5 from "../../assets/images/services-cms-Dev-projects-img-5.webp";
import projectsimg6 from "../../assets/images/services-cms-Dev-projects-img-6.webp";

import avgPerformanceImg from "../../assets/images/services-smm-web-creation-img.webp";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";
import ServicesBlogSec from "../../components/ServicesBlogSec";
import ReactHelmet from "../../components/ReactHelmet";

const offerListData = [
  {
    title: "Targeted Advertising",
    description:
      "Social media marketing platforms allow precise targeting by demographics, interests, and behaviors, allowing your ads to reach the right audience for higher conversions.",
  },
  {
    title: "Brand Awareness",
    description:
      "Consistent posting and engaging content build recognition, making your brand more visible to potential customers and increasing long-term trust.",
  },
  {
    title: "Customer Engagement",
    description:
      "Social media advertising provides a direct line to connect with customers, fostering trustful relationships and encouraging loyalty through conversations and feedback.",
  },
  {
    title: "Content Marketing",
    description:
      "Sharing valuable content that adds value to your customers, enhancing credibility and attracting potential leads.",
  },
  {
    title: "Analytics & Insights",
    description:
      "Track metrics like engagement and conversions to understand what works. This data helps optimize campaigns, improving ROI over time.",
  },
  {
    title: "Increased Website Traffic",
    description:
      "Social media marketing strategy drives targeted visitors to your website, boosting traffic and creating opportunities for higher conversions and sales.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "32%",
    // icon: brandicon,
    name: "Increase In Conversions",
    description:
      "Higher website conversions with the implementation of smart social media strategies.",
      
  },
  {
    id: 2,
    percentage: "78%",
    // icon: uiuxdesignicon,
    name: "Social Channel Engagement",
    description:
      "Direct increase in brand awareness and visibility with more engagement on social channels.",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Meta Ads",
    description:
      "Drive traffic and conversions with targeted Meta Ads on Facebook and Instagram. We optimize every campaign, reaching millions of customers around the world.",
  },
  {
    id: 2,
    icon: tiktokicon,
    name: "TikTok Ads",
    description:
      "Go viral with TikTok Ads that combine creativity and strategy. We craft engaging short-form videos that hook watchers from the start to the finish and inspire them to convert.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Google Ads",
    description:
      "Show up at the top, always. Our Google Ads campaigns capture high-intent searches and turn clicks into customers with smart bidding.",
  },
  {
    id: 4,
    icon: developmenticon,
    name: "YouTube Ads",
    description:
      "Tell your story through YouTube Ads. From skippable ads to bumper formats, we build campaigns and content for a single goal: Growth.",
  },
];

const SMM = () => {
  return (
    <>
      <ReactHelmet
        title="Social Media Marketing | NY Web Experts – Engage & Grow"
        description="Craft a winning social media marketing strategy with NY Web Experts. Boost brand visibility, engage your audience, and grow smarter—start now!"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/social-media-marketing"
      />
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Social Media Marketing"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Maximize Engagement, Multiply Your Leads`}
        secDescription={`We offer top-of-the-line social media marketing services in New York that guarantee high engagement from your target audience, drive traffic, and generate meaningful new sales leads for your business.`}
        secSubSecTitle={`Social Media Marketing Services`}
        secSubSecDescription={`Tired of posting without any tangible results? We offer a wide range of social media advertising in New York across multiple platforms so we market where your audience already is. We help you stand out with engaging content, smart strategies, and consistent growth. From planning to posting, we handle it all so your brand connects, engages, and grows effortlessly. Turn prospects into loyal customers with NY Web Experts.`}
        boxesData={aboutBoxesData}
        btnText="Book A Call"
      />

      <OurOfferSec
        secTitle="Why Social Media Is Your Greatest Growth Engine"
        secDescription={`Social media advertising is the best tool for growing your brand, putting you directly in front of your audience where they already spend their time. It’s cost-effective, highly targeted, and perfect for building genuine connections through engaging content. Want to increase awareness, drive website traffic, or boost sales? Whatever your goal, social media advertising, when paired with the right strategies, becomes a powerful growth engine that organic methods alone can’t achieve.`}
        listdata={offerListData}
      />


      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTitle="Elevate Your Brand with Strategic Social Ads"
        secDescription="Our social media marketing in New York will grow your social channels, bring more visitors to your website, and increase sales with clear, effective strategies."
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
        categorySlug="social-media-marketing"
        itemsPerPage={3}
        pagination
      />
      <GetStarted />
    </DefaultLayout>
    </>
  );
};

export default SMM;

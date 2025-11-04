import React from "react";

import bannerBG from "../../assets/images/services-cmsDev-banner-bg.webp";

import comittedicon from "../../assets/images/comitted-icon.webp";
import startupicon from "../../assets/images/startup-icon.webp";
import developmenticon from "../../assets/images/development-icon.webp";
import analyticsicon from "../../assets/images/analytics-icon.webp";

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


import ServicesBlogSec from "../../components/ServicesBlogSec";
import ReactHelmet from "../../components/ReactHelmet";

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Responsiveness",
    description:
      "Your website design will look great and function perfectly on all devices, delivering a smooth experience across all screen sizes.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Easy Navigation",
    description: `We design intuitive layouts that help users quickly find what they need, improving usability and engagement.`,
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Plugin Integration",
    description: `Extend your site’s capabilities with powerful plugin integration for SEO, payment gateways, security, forms, and more.`,
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Pre-built Templates",
    description: `Choose from professionally designed templates that save weeks in custom designs while ensuring your site looks perfect and performs efficiently.`,
  },
];

const CMSDevelopment = () => {
  return (
    <>
      <ReactHelmet
        title="CMS Development | NY Web Experts – Power Your Website Smartly"
        description="Boost your brand with expert website development services. NY Web Experts deliver fast, scalable CMS solutions—get your custom site built today!"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/cms-development"
      />
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="CMS Development"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Optimized, Custom-Built CMS Platforms for Your Needs`}
        secDescription={`Build mobile-friendly, user-focused online stores with top platforms like WordPress development, Wix development, Shopify development, Magento development, WooCommerce development, and BigCommerce development. Our full-service ecommerce website development solutions help brands to boost engagement, expand customer reach, and drive measurable growth.`}
        secSubSecTitle={`Flexible, Scalable, and Easy to Manage CMS Website Development That Puts You in Control.`}
        secSubSecDescription={`We offer full-cycle website development services in New York for startups, scale-ups, and enterprises. Whether you need an engaging new website, want to create a one-of-a-kind shopping experience, or a complete revamp of your existing platform, our skilled developers are ready to develop solutions that will grow with your business.`}
        boxesData={aboutBoxesData}
        btnText="Book A Call"
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={500}
        projectsCountText={"Projects Completed"}
        secTag="High-End Design & Development"
        secTitle="Your Trusted Website Development Company in New York"
        secDescription={`We develop full-stack website development services designed to fuel real business growth. No matter which platform you choose, we build websites that make visitors curious enough to explore, engage, and convert.`}
        listdata={[
          {
            title: "Award Winning Agency",
            description:
              "Recognized for excellence in custom website development services that deliver real impact.",
          },
          {
            title: "Years of Industry Experience",
            description:
              "Has helped numerous clients through high-performing ecommerce website design services in New York.",
          },
        ]}
      />

      <ProjectSec
        secTag="Portfolio"
        secTitle="See What Sets Us Apart!"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      {/* <OurTeamSec /> */}

      <TestimonialSec />

      <ServicesBlogSec
        categorySlug="wordpress-development"
        itemsPerPage={3}
        pagination
      />
      <GetStarted />
    </DefaultLayout>
    </>
  );
};

export default CMSDevelopment;

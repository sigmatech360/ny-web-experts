import React from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

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
import webcreationimg from "../../assets/images/services--cmdDev-web-creation-img.png";

import projectsimg1 from "../../assets/images/services-cms-Dev-projects-img-1.png";
import projectsimg2 from "../../assets/images/services-cms-Dev-projects-img-2.png";
import projectsimg3 from "../../assets/images/services-cms-Dev-projects-img-3.png";
import projectsimg4 from "../../assets/images/services-cms-Dev-projects-img-4.png";
import projectsimg5 from "../../assets/images/services-cms-Dev-projects-img-5.png";
import projectsimg6 from "../../assets/images/services-cms-Dev-projects-img-6.png";

import avgPerformanceImg from "../../assets/images/premier-design-studio-img.webp";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";

const offerListData = [
  {
    title: "Content Strategy & Planning",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
  {
    title: "Reliable web development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "140%",
    // icon: brandicon,
    name: "Branding",
    description: "We design digital products used by millions of people.",
  },
  {
    id: 2,
    percentage: "160%",
    // icon: uiuxdesignicon,
    name: "UX/UI Design",
    description: "We design digital products used by millions of people.",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Website Creation",
    description:
      "Built from scratch to align with your business model, branding, and vision.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Website Maintenance",
    description:
      "We handle the updates, patches, and monitoring so your site never misses a beat.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Website Revamp",
    description:
      "We redesign outdated websites to modern, fast, and user-focused platforms.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Performance Optimization",
    description:
      "We optimize loading speed, eliminate clutter, and enhance user experience for real results.",
  },
];

const CustomWebDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Custom Web Development"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Custom Web Development Company In New York That Builds With Purpose`}
        secDescription={`Experience powerful frontend and backend web development from the best web experts in New York; we specialize in creating customized websites made with a purpose. Each of our projects is a result of your vision and our efforts, with keen attention to detail and a strategic approach to capture your targeted audience, we leave no space for failure. `}
        secSubSecTitle={`Designed, Delivered, & Optimized. We Curate Web Development Perfection.`}
        secSubSecDescription={`Our team creates clean, conversion-focused code. From custom web design and development in New York to optimized user journeys, we make sure every feature drives business. Our custom web development company offers the following services to ensure you leave behind a legacy of digital perfection, and results never stop generating. `}
        boxesData={aboutBoxesData}
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={3500}
        secTag="Why Choose Us?"
        secTitle="Your Vision, Expertly Engineered"
        secDescription={`Our websites are more than just a representation platform for your business; we ensure your website generates results and revenue. As a leading custom web development company in New York, we create platforms tailored to your market and business.`}
        listdata={[
          {
            title: "Integrated Development Team",
            description:
              "Our frontend and backend web development New York teams work together from start to finish to create a worthy website.",
          },
          {
            title: "Built With Your Audience in Mind",
            description:
              "We align every project with your industry's trends, customer expectations, and your specific business goals.",
          },
        ]}
      />

      <ProjectSec
        secTag="Projects"
        secTitle="Get inspired by our finest work"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      <OurOfferSec
        secTitle="What We Offer"
        secDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
        listdata={offerListData}
      />

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTitle="Our Average Performance Stats for Digital Marketing"
        secDescription="We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps."
        listData={avgPerformanceData}
      />

      <OurTeamSec />

      <TestimonialSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default CustomWebDevelopment;

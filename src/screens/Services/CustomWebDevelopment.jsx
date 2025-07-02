import React from "react";

import bannerBG from "../../assets/images/services-customWebDev-banner-bg.webp";

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
import webcreationimg from "../../assets/images/services--customWebDev-web-creation-img.webp";

import projectsimg1 from "../../assets/images/services-customWebDev-projects-img-1.webp";
import projectsimg2 from "../../assets/images/services-customWebDev-projects-img-2.webp";
import projectsimg3 from "../../assets/images/services-customWebDev-projects-img-3.webp";
import projectsimg4 from "../../assets/images/services-customWebDev-projects-img-4.webp";
import projectsimg5 from "../../assets/images/services-customWebDev-projects-img-5.webp";
import projectsimg6 from "../../assets/images/services-customWebDev-projects-img-6.webp";

import avgPerformanceImg from "../../assets/images/services-customWebDev-avg-img.webp";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";
import ServicesBlogSec from "../../components/ServicesBlogSec";
import ReactHelmet from "../../components/ReactHelmet";

const offerListData = [
  {
    title: "Business Websites",
    description:
      "Professional and high-performing in generating leads and reinforcing trust.",
  },
  {
    title: "Personal Websites",
    description:
      "Modern online hubs to showcase personal brands, thought leadership, and credibility.",
  },
  {
    title: "E-Commerce Websites",
    description:
      "Custom stores with secure checkouts and flexible inventory handling.",
  },
  {
    title: "Blogs Website",
    description:
      "Easy to manage and beautifully designed for writers, influencers, and media brands.",
  },
  {
    title: "Booking Websites",
    description:
      "Smooth and secure systems that handle appointments and payments on autopilot.",
  },
  {
    title: "Portfolio Websites",
    description:
      "Interactive galleries that position creatives and professionals at the top of their game.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "100%",
    // icon: brandicon,
    name: "Boost in Conversion Rates",
    description: "Businesses saw up to a 300% increase in conversions within 3 months.",
  },
  {
    id: 2,
    percentage: "50%",
    // icon: uiuxdesignicon,
    name: "Drop in Bounce Rate ",
    description: "Custom UX design reduced bounce rate by 50% through optimization",
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
    <>
      <ReactHelmet
        title="NY Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/custom-web-development"
      />
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
        secTag="Why Choose Us"
        secTitle="Your Vision, Expertly Engineered"
        secDescription={`Your websites are more than just a representation platform for your business; we ensure your website generates results and revenue. As a leading custom web development company in New York, we create platforms tailored to your market and business.`}
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
        secTag="Our Portfolio"
        secTitle="A Look At Our Custom Web Development"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      <OurOfferSec
        secTitle="Custom Solutions for Specialized Needs"
        secDescription={`No two businesses are alike; every business has a unique audience that requires different platforms. That’s why we offer custom web application development tailored for your businesses in New York and all across the US, ready to stand out. Every website we make for you reflects your unique goals, tools, and audience. Here are the types of websites that we happily make for you:`}
        listdata={offerListData}
      />

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTag="Results"
        secTitle="What Success Looks Like Online"
        secDescription="Looking for the growth hack that businesses use to hack sustainable growth? We have got it! With our custom web development services in New York, we have scaled many companies. Take a look at the average of our statistics:"
        listData={avgPerformanceData}
      />

      {/* <OurTeamSec secTitle="Meet The Brains Behind Your Success" /> */}

      <TestimonialSec
        secTag="Testimonial"
        secTitle="What The World Says About Our Custom Web Development"
      />
      <ServicesBlogSec
        categorySlug="custom-website-development"
        itemsPerPage={3}
        pagination
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

export default CustomWebDevelopment;

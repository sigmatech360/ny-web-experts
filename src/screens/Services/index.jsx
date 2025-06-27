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
import webcreationimg from "../../assets/images/web-creation-img.webp";

import projectsimg1 from "../../assets/images/servicePage-projects-img-1.webp";
import projectsimg2 from "../../assets/images/servicePage-projects-img-2.webp";
import projectsimg3 from "../../assets/images/servicePage-projects-img-3.webp";
import projectsimg4 from "../../assets/images/servicePage-projects-img-4.webp";
import projectsimg5 from "../../assets/images/servicePage-projects-img-5.webp";
import projectsimg6 from "../../assets/images/servicePage-projects-img-6.webp";
import ReactHelmet from "../../components/ReactHelmet";

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Responsive Designs",
    description: `Your website will adapt perfectly across all devices, ensuring better SEO and a higher ranking.`,
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Intuitive Interfaces",
    description: `We prioritize UX and UI design that’s easy to navigate so visitors can easily find what they are looking for, be it a product or a service.`,
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "SEO-Friendly Development",
    description: `Our websites are built with SEO friendly web design practices to help your business rank higher and reach a broader audience.`,
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Scalable Custom Solutions",
    description: `From startups to enterprises, we deliver custom website design that perfectly aligns with your brand message.`,
  },
];

const Services = () => {
  return (
    <>
      <ReactHelmet
        title="NY Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/services"
      />
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Web Design & Development"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Website Design Services For Online Growth`}
        secDescription={`Create and scale custom, high-impact website design solutions that immerse users and offer a smooth experience across every interaction. Our expert design and website development services in New York help businesses to strengthen their digital presence through trending, user-focused design and innovation.`}
        secSubSecTitle={`Feature-Rich Website Design For Performance And Engagement`}
        secSubSecDescription={`A website is built to facilitate user engagement. Our design and website development services in New York help create scalable digital platforms with intuitive UI/UX and performant functionalities for accessible online interaction. For further efficiency, we leverage threat resistance, tested site architectures, continuous maintenance, and custom JavaScript or CMS solutions, depending on the needs.`}
        boxesData={aboutBoxesData}
        btnText="Book A Call"
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={500}
        projectsCountText={"Projects Successfully Completed"}
        secTag="Why Choose Us"
        secTitle="Your Partner For High-Ranking Website Design & Development Services"
        secDescription={`Websites are the face of your business; they should be as intriguing as your business itself. We combine creativity with code to deliver highly responsive designs.`}
        secDescription2="Functionality-focused development is key to a high-performance website. With effective website development services in New York, you can check off all design and functionality metrics in your website development plan."
        listdata={[
          {
            title: "Trending Website Design & Development",
            description:
              "Up-to-date with the latest website design trends to develop responsive websites.",
          },
          {
            title: "Equipped With The Latest technology",
            description:
              "Equipped with modern features like AI chatbots, personalization, and microinteractions to make your website smarter and engaging.",
          },
        ]}
      />

      <ProjectSec
        secTag="Projects"
        secTitle="Explore Our Featured Work"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      {/* <OurTeamSec /> */}

      <TestimonialSec />
      <GetStarted />
    </DefaultLayout>
    </>
  );
};

export default Services;

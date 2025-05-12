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

import projectsimg1 from "../../assets/images/projects-img-1.webp";
import projectsimg2 from "../../assets/images/projects-img-2.webp";
import projectsimg3 from "../../assets/images/projects-img-3.webp";
import projectsimg4 from "../../assets/images/projects-img-4.webp";
import projectsimg5 from "../../assets/images/projects-img-5.webp";
import projectsimg6 from "../../assets/images/projects-img-6.webp";

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Startups",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Analytics",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Workflow",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
  },
];

const Services = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Web Development"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`An Outstanding Strategy, Design, And Development Across All Platforms`}
        secDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
        secSubSecTitle={`We Fuel The Growth Of Purpose Driven Brands Through Strategy Design Empowerment, And Market Adoption.`}
        secSubSecDescription={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`}
        boxesData={aboutBoxesData}
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={3500}
        secTag="Web creation"
        secTitle="High-end web development company"
        secDescription={`Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.`}
        listdata={[
          {
            title: "Top cloud expertise",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
          },
          {
            title: "Reliable web development",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.",
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

      <OurTeamSec />

      <TestimonialSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default Services;

import React from "react";

import bannerBG from "../../assets/images/services-seo-banner-bg.png";

import startupicon from "../../assets/images/services-smm-abt-icon1.png";
import developmenticon from "../../assets/images/services-smm-abt-icon2.png";
import analyticsicon from "../../assets/images/services-smm-abt-icon3.png";
import comittedicon from "../../assets/images/services-smm-abt-icon4.png";

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

import avgPerformanceImg from "../../assets/images/services-seo-avg-img.png";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";

const offerListData = [
  {
    title: "Technical SEO Audits & Fixes",
    description:
      "We identify and resolve critical site issues like crawl errors, broken links, and speed problems that impact visibility.",
  },
  {
    title: "On-Page Optimization",
    description:
      "We enhance meta tags, headings, image alt text, and content structure to improve keyword relevance and user experience.",
  },
  {
    title: "Keyword Research & Strategy",
    description:
      "We target high-value keywords your audience is already searching for, aligning them with your content and conversion goals.",
  },
  {
    title: "Local SEO",
    description:
      "We optimize your listings, Google Business Profile, and local keywords to dominate maps and neighborhood searches.",
  },
  {
    title: "SEO Analytics",
    description:
      "We track every ranking change, traffic spike, and conversion metric using powerful tools and transparent reporting.",
  },
  {
    title: "Link Building & Outreach",
    description:
      "We build authoritative backlinks through ethical outreach, guest posting, and PR strategies to boost site authority.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "250%",
    // icon: brandicon,
    name: "Increase in lead-gen",
    description: "250% increase in local keyword rankings in 90 days",
  },
  {
    id: 2,
    percentage: "60%",
    // icon: uiuxdesignicon,
    name: "Increase in social media engagement",
    description: "60% drop in bounce rate after on-page SEO overhaul",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Audience Targeting",
    description:
      "We research your audience’s behavior, intent, and language to match content with what your customers are actually searching for.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Regular SEO Audits",
    description:
      "We continuously audit and refine your site to eliminate performance issues and stay ahead of Google’s algorithm changes.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Schema Markup Integration",
    description:
      "We implement structured data to improve search visibility and increase your chances of appearing in rich results and featured snippets.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Content Optimization",
    description:
      "We optimize your on-site content to meet search intent, using keyword strategy, internal linking, and metadata refinement.",
  },
];

const SEO = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Search Engine Optimization"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Stand Out Online with New York’s SEO Powerhouse`}
        secDescription={`As a trusted search engine optimization agency in New York, we build long-term rankings that improve your visibility, bring trust, rank you high, and drive business. Our SEO services combine on-page precision, off-page strategy, and local expertise to dominate the search results.`}
        secSubSecTitle={`SEO Features That Make Us Unique`}
        secSubSecDescription={`We don’t use the generic SEO checklist to work on your Search Engine Result Page (SERP) position. Our approach combines a critically evaluated deep strategy with technical execution, designed to align with user behavior, Google and other search engines’ algorithms, and your unique goals.`}
        boxesData={aboutBoxesData}
      />

      <OurOfferSec
        secTitle="Our SEO Solutions Include:"
        secDescription={`Our solutions cover every corner of Search Engine Optimization Marketing in New York, from technical boosts and optimization to strategic content building for on-page perfection. Following is the list of services that we offer as a part of our SEO.`}
        listdata={offerListData}
      />

      {/* <WebCreationSec
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
      /> */}

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTitle="Measurable Results That Get You Recognized"
        secDescription="We focus on SEO services that deliver clear outcomes. Whether it’s higher traffic, better rankings, or leads, our work turns visibility into value. Our clients are witnesses to the following results:"
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

      <OurTeamSec secTitle="The Team That Feeds On Results" />

      <TestimonialSec secTitle="High Rankings Bring Happy Clients!" />
      <GetStarted
        secTitle="Got An Idea? Let’s Discuss!"
        secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
        btnText="Book A Call!"
      />
    </DefaultLayout>
  );
};

export default SEO;

import React from "react";

import bannerBG from "../../assets/images/services-logoDesign-banner-bg.webp";

import startupicon from "../../assets/images/services-logoDesign-abt-icon1.webp";
import developmenticon from "../../assets/images/services-logoDesign-abt-icon2.webp";
import analyticsicon from "../../assets/images/services-logoDesign-abt-icon3.webp";
import comittedicon from "../../assets/images/services-logoDesign-abt-icon4.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";
import OutsourcingStrategySec from "../../components/OutsourcingStrategySec";

import WebCreationSec from "../../components/WebCreationSec";
import webcreationimg from "../../assets/images/services-logoDesign-web-creation-img.webp";

import projectsimg1 from "../../assets/images/services-logoDesign-projects-img-1.webp";
import projectsimg2 from "../../assets/images/services-logoDesign-projects-img-2.webp";
import projectsimg3 from "../../assets/images/services-logoDesign-projects-img-3.webp";
import projectsimg4 from "../../assets/images/services-logoDesign-projects-img-4.webp";
import projectsimg5 from "../../assets/images/services-logoDesign-projects-img-5.webp";
import projectsimg6 from "../../assets/images/services-logoDesign-projects-img-6.webp";

import avgPerformanceImg from "../../assets/images/services-logoDesign-avg-img.webp";

import servicesLogoDesigngetstartedimg from "../../assets/images/servicesLogoDesign-get-started-img.webp";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";
import ServicesBlogSec from "../../components/ServicesBlogSec";
import ReactHelmet from "../../components/ReactHelmet";

const offerListData = [
  {
    title: "Abstract Logos",
    description:
      "Visual metaphors and artistic shapes that express complex ideas creatively are ideal for brands looking to stand out through symbolism and emotion rather than literal visuals.",
  },
  {
    title: "WordMark Logos",
    description:
      "Typographic designs built from your brand name. Clean, readable, and practical, especially when your business name is your strongest branding asset.",
  },
  {
    title: "Combination Logos",
    description:
      "The perfect mix of icon and text. Versatile and flexible, combination marks work across industries and scale beautifully across all types of marketing material.",
  },
  {
    title: "Pictorial Mark Logos",
    description:
      "These are image-based logos, like Apple’s or Twitter’s. Ideal for creating fast recognition through a memorable symbol or simplified version of your service.",
  },
  {
    title: "Emblems",
    description:
      "Traditional and impactful, emblem logos combine text within a badge or seal. They evoke authority, history, and a premium look, especially for institutions or legacy brands.",
  },
  {
    title: "Monogram Logos",
    description:
      "Stylized initials or letter-based logos that pack punch into simplicity. Monograms are perfect for brands wanting elegant minimalism with professional flair.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "45%",
    // icon: brandicon,
    name: "Increase in Brand Recall",
    description: "Logo redesign boosted brand recall by 45% within 60 days.",
  },
  {
    id: 2,
    percentage: "60%",
    // icon: uiuxdesignicon,
    name: "Growth in Social Engagement",
    description: "Logo upgrade led to 60% growth in social media engagement.",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "Brand Personality",
    description:
      "We translate your mission and values into a logo that reflects who you are and what you stand for.",
  },
  {
    id: 2,
    icon: developmenticon,
    name: "Typography",
    description:
      "Fonts matter. We select or create fonts that visually align with your brand’s tone.",
  },
  {
    id: 3,
    icon: analyticsicon,
    name: "Colour Psychology",
    description:
      "We use color theory to build emotional connections and ensure your brand communicates the right mood and energy.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "Animated Logo",
    description:
      "Add movement to your logo for dynamic brand presence across video, digital, and social media platforms.",
  },
];

const LogoDesign = () => {
  return (
    <>
      <ReactHelmet
        title="Logo Design | NY Web Experts – Build a Brand That Stands Out"
        description="Custom Logo Design that captures your brand’s identity. NY Web Experts create unique, memorable logos. Start your visual branding journey today!"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/logo-design"
      />
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Logo Design" page="Services" />

      <OutsourcingStrategySec
        secTitle={`Sleek Logo Designs Custom Made For You!`}
        secDescription={`We create custom logo designs for New York that speak to your brand's identity, values, and vision. Our logo design services combine creative concepts with deep brand thinking, made for unique businesses and their unique wants. Each design is crafted to establish trust, boost recognition, and stand the test of time across digital and print platforms.`}
        secSubSecTitle={`Logo Design Services in New York That Capture Brand Identity Perfectly`}
        secSubSecDescription={`Your logo is the face of your business. Our logos are built on creative strategy, brand psychology, and market trends. We blend innovation with clarity to ensure your brand is noticed, remembered, and admired. Every element is carefully chosen to express your message and connect with your audience instantly.`}
        boxesData={aboutBoxesData}
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={3500}
        secTag="Why Choose Us"
        secTitle="Memorable Logo Designs With Impactful Meanings"
        secDescription={`Our logo design company in New York is your strategic brand partner. We balance aesthetics and purpose in our logos, helping you connect, communicate, and convert through just a logo. Combining creativity with business thinking, we ensure your logo is recognizable and ready to create a memorable impression.`}
        listdata={[
          {
            title: "Eye-catching designs that resonate",
            description:
              "Each logo in our portfolio is more than just design; it’s part of a bigger brand story. Our logos help businesses stand out, connect with their audience, and grow with confidence.",
          },
          {
            title: "Customized for your requirements",
            description:
              "From concept to creation, our logo designs are crafted with strategy. We turn raw ideas into brand visuals that resonate, last, and lead to recognition.",
          },
        ]}
      />

      <ProjectSec
        secTag="Projects"
        secTitle="Our Most Loved Logo Designs"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      <OurOfferSec
        secTitle="Pick The Right Logo For Your Brand."
        secDescription={`We provide multiple logo types to suit your business identity, target market, and long-term brand vision. Whether you want a professional logo design or a custom logo design for your blog account, we’ll make it for you.`}
        listdata={offerListData}
      />

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTitle="Logo Designs That Drive Results, Not Just Decor"
        secDescription="We go beyond creating visuals. Our business logo designs deliver stories with measurable results for growing businesses and personal brands. Discover the impact a single logo can make:"
        listData={avgPerformanceData}
      />

      {/* <OurTeamSec secTitle="Meet Our Creative Heads" /> */}

      <TestimonialSec
        secTag="Testimonials"
        secTitle="Our Logo Designs Leave An Impact!"
      />
      <ServicesBlogSec
        categorySlug="logo-designing"
        itemsPerPage={3}
        pagination
      />
      <GetStarted
        bgImage={servicesLogoDesigngetstartedimg}
        secTitle="Got An Idea? Let’s Discuss!"
        secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
        btnText="Book A Call!"
      />
    </DefaultLayout>
    </>
  );
};

export default LogoDesign;

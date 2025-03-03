import React from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";

const About = () => {
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="About" page="About" />
      <TestimonialSec />
      <BlogSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default About;

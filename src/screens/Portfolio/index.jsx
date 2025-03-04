import React from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import ContactUsSec from "../../components/ContactUsSec";

const Portfolio = () => {
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Portfolio" page="Portfolio" />

      <ContactUsSec />

      <BlogSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default Portfolio;

import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";
import TestimonialSec from "../../components/TestimonialSec";
import ReactHelmet from "../../components/ReactHelmet";

const Testimonials = () => {
  return (
    <>
      <ReactHelmet
        title="NY Web Experts"
        description={`description`}
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/testimonials"
      />
      <DefaultLayout>
        <InnerBanner
          bannerBG={bannerBG}
          title="Testimonials"
          page="Testimonials"
        />

        {/* <ContactUsSec variant="light" /> */}
        <TestimonialSec />

        <GetCustomLogo />
        <GetStarted />
      </DefaultLayout>
    </>
  );
};

export default Testimonials;

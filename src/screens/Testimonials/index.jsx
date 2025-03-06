import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";
import TestimonialSec from "../../components/TestimonialSec";

const Testimonials = () => {
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Testimonials" page="Testimonials" />

      {/* <ContactUsSec variant="light" /> */}
      <TestimonialSec />

      <GetCustomLogo />
      <GetStarted  />
    </DefaultLayout>
  );
};

export default Testimonials;

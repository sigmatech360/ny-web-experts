import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";
import ContactUsSec from "../../components/ContactUsSec";

const ContactUs = () => {
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Contact Us" page="Contact Us" />

      <ContactUsSec variant="light" />

      <GetCustomLogo />
      <GetStarted  />
    </DefaultLayout>
  );
};

export default ContactUs;

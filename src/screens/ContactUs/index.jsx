import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";
import ContactUsSec from "../../components/ContactUsSec";
import ReactHelmet from "../../components/ReactHelmet";

const ContactUs = () => {
  return (
    <>
      <ReactHelmet
        title="Contact Us | NY Web Experts - Get a Free Consultation Today"
        description="Contact us at NY Web Experts to start your digital project. Get expert advice, fast responses, and a free consultation. Let’s bring your vision to life!"
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/contact-us"
      />
      <DefaultLayout>
        <InnerBanner bannerBG={bannerBG} title="Contact Us" page="Contact Us" />

        <ContactUsSec variant="light" />

        <GetCustomLogo />
        <GetStarted btnLink="/pricing" />
      </DefaultLayout>
    </>
  );
};

export default ContactUs;

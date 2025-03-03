import React from "react";

import bannerBG from "../../assets/images/about-banner-bg.webp";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import WebCreationSec from "../../components/WebCreationSec";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";

const WebDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Web Development"
        page="Services"
      />

      <WebCreationSec />
      <ProjectSec />

      <OurTeamSec />

      <TestimonialSec />
      <GetStarted />
    </DefaultLayout>
  );
};

export default WebDevelopment;

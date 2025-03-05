import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";

const Blogs = () => {
  return (
    <DefaultLayout>
      <InnerBanner bannerBG={bannerBG} title="Blogs" page="Blogs" />
    
      <BlogSec itemsPerPage={6} pagination />
      <GetCustomLogo />
      <GetStarted  />
    </DefaultLayout>
  );
};

export default Blogs;

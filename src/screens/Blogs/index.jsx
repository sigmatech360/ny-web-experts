import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import bannerBG from "../../assets/images/about-banner-bg.webp";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import GetCustomLogo from "../../components/GetCustomLogo";

import blogimg1 from "../../assets/images/blog-img-1.webp";
import blogimg2 from "../../assets/images/blog-img-2.webp";
import blogimg3 from "../../assets/images/blog-img-3.webp";
import ReactHelmet from "../../components/ReactHelmet";

const blogCardsData = [
  {
    id: 1,
    image: blogimg1,
    name: "Why a Professional Website Design Is Crucial for Your Business",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 2,
    image: blogimg2,
    name: "How to Choose the Right Website Design Company in New York",
    description:
      "Looking for a website design company in New York? Learn what to consider when hiring experts to build your online presence correctly.",
  },
  {
    id: 3,
    image: blogimg3,
    name: "Custom Website Design vs. Templates: What’s Best for You?",
    description:
      "Explore the pros and cons of custom website design and templates, and find out which solution fits your brand, goals, and budget.",
  },
  {
    id: 4,
    image: blogimg1,
    name: "Top Benefits of Responsive Web Design in 2025",
    description:
      "With mobile users rising, responsive web design ensures your site looks great on any device. Learn why it's essential for modern businesses.",
  },
  {
    id: 5,
    image: blogimg2,
    name: "Ten Ways of Lying about Your Relationship",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 6,
    image: blogimg3,
    name: "Ten Ways of Lying about Your Relationship",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 7,
    image: blogimg1,
    name: "Ten Ways of Lying about Your Relationship",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 8,
    image: blogimg2,
    name: "Ten Ways of Lying about Your Relationship",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
  {
    id: 9,
    image: blogimg3,
    name: "Ten Ways of Lying about Your Relationship",
    description:
      "A strong website design builds trust, improves user experience, and boosts conversions. Discover how the right design sets your business apart.",
  },
];

const Blogs = () => {
  return (
    <>
      <ReactHelmet
        title="Insights & Updates - Expert Web Development Blog"
        description="Stay informed with in-depth articles on web and app development trends, best practices, and industry insights. Explore our expert blog for valuable knowledge."
        keywords="web development, custom website, react development, logo design, digital marketing, social media marketing, web design"
        url="https://nywebexperts.com/blog"
      />
      <DefaultLayout>
        <InnerBanner bannerBG={bannerBG} title="Blogs" page="Blogs" />

        <BlogSec
          // blogCardsData={blogCardsData}
          itemsPerPage={6}
          pagination
        />
        <GetCustomLogo />
        <GetStarted />
      </DefaultLayout>
    </>
  );
};

export default Blogs;

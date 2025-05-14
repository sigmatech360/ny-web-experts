import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import premierdesignstudioimg from "../../assets/images/premier-design-studio-img.webp";
import designanddevimg from "../../assets/images/design-and-dev-img.webp";
import ContentWithIcon from "../../components/ContentWithIcon";
import { TbChecks } from "react-icons/tb";
import ServicesCard from "../../components/ServicesCard";

import PricePlanCard from "../../components/PricePlanCard";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import ProjectSec from "../../components/ProjectSec";
import ContactUsSec from "../../components/ContactUsSec";

import {
  premierDesignStudioIcon,
  servicesInfoSec,
  ourServicesData,
  ourBenefitsContentIconData,
  pricingPlan,
} from "../../data";
import PurpleBGSec from "../../components/PurpleBGSec";
import GetCustomLogo from "../../components/GetCustomLogo";

import MainBanner from "../../components/MainBanner";

import WebCreationSec from "../../components/WebCreationSec";
import webcreationimg from "../../assets/images/web-creation-img.webp";

import projectsimg1 from "../../assets/images/projects-img-1.webp";
import projectsimg2 from "../../assets/images/projects-img-2.webp";
import projectsimg3 from "../../assets/images/projects-img-3.webp";
import projectsimg4 from "../../assets/images/projects-img-4.webp";
import projectsimg5 from "../../assets/images/projects-img-5.webp";
import projectsimg6 from "../../assets/images/projects-img-6.webp";

import blogimg1 from "../../assets/images/blog-img-1.webp";
import blogimg2 from "../../assets/images/blog-img-2.webp";
import blogimg3 from "../../assets/images/blog-img-3.webp";

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
  // {
  //   id: 4,
  //   image: blogimg1,
  //   name: "Top Benefits of Responsive Web Design in 2025",
  //   description:
  //     "With mobile users rising, responsive web design ensures your site looks great on any device. Learn why it's essential for modern businesses.",
  // },
  // {
  //   id: 5,
  //   image: blogimg2,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 6,
  //   image: blogimg3,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 7,
  //   image: blogimg1,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 8,
  //   image: blogimg2,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
  // {
  //   id: 9,
  //   image: blogimg3,
  //   name: "Ten Ways of Lying about Your Relationship",
  //   description:
  //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
  // },
];

const Home = () => {
  return (
    <DefaultLayout>
      <MainBanner />

      <section className="premier-design-studio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-offset="0"
                >
                  A premier New York-based design studio
                </h1>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img
                  src={premierdesignstudioimg}
                  alt="A premier New York-based design studio"
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Sharp Strategies And Relentless Executions. We Deliver
                  Success.
                </h2>
                <p data-aos="fade-up" data-aos-duration="2000">
                  We blend our expertise in creative website design and
                  development with critically planned digital marketing services
                  in New York to solve real business problems. From
                  digital-first designs to performance marketing, we’re wired to
                  solve complex problems with clarity and creativity. At New
                  York Web Experts, we go above and beyond the average
                  expectations. Our goal? Consistent results.
                </p>
                <div
                  className="row mt-4"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  {premierDesignStudioIcon.map((item, index) => (
                    <div className="col-md-6 mb-md-0 mb-3" key={index}>
                      <ContentWithIcon
                        icon={item.icon}
                        name={item.name}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GetCustomLogo className="mb-5" />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={2000}
        projectsCountText={"Projects Of Digital Success"}
        secTag="Web creation"
        secTitle="Branding & Development Backed With Expertise"
        secDescription={`With years of experience in digital design, development, and branding, we know how to make your brand shine and stand out! Our strategies are built around the behaviour of your targeted audience, insights from industry trends, and the expertise of our polished teams, who know how to get each detail right. Every decision we make is backed by concrete learnings from past experiences.`}
        listdata={[
          {
            title: "Years of Experience",
            description:
              "10+ years in online marketing in New York, custom web design and development services, and more.",
          },
          {
            title: "Projects Completed",
            description:
              "500+ successful websites, 300+ social media advertising campaigns, 1000+ Logo Designs and more.",
          },
        ]}
      />

      <section className="services-info-sec">
        <div className="container">
          <div className="row">
            {servicesInfoSec.map((item, index) => (
              <div
                className="col-lg-4 mb-4"
                key={index}
                data-aos="fade-up"
                data-aos-duration="2000"
              >
                <ContentWithIcon
                  variant="row"
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="our-services-sec clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 mb-4">
              <div className="sec-head mb-4">
                <p
                  className="sec-tag"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Services
                </p>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Digital Solutions That Work For Results
                </h2>
              </div>
            </div>
            {ourServicesData.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <ServicesCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                  link={item.link}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectSec
        secTag="Portfolio "
        secTitle="A Sneak-Peak Into Our Expertise"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      <section className="our-benefits clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="web-creation-content">
                <p
                  className="sec-tag mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Our Specialty
                </p>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Specialized to Stand Out Online
                </h2>
                <p
                  className="poppins pe-xl-5 me-xl-5 pe-0   me-0"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  Our strategies aren’t just another person in the crowd; we
                  make custom marketing solutions that are built to connect. At
                  New York Web Experts, every project is built with strategic
                  depth, creative precision, and performance in mind. From
                  trend-driven design to razor-sharp messaging, we personalize
                  everything for your brand, your audience, and what actually
                  works today.
                </p>
                <div
                  className="d-flex flex-wrap gap-3"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Trusted By 300+ Brands</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Critically Researched Strategies</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="our_benefits-icons">
                <div className="row">
                  {ourBenefitsContentIconData.map((item, index) => (
                    <div
                      className="col-md-6 mb-4"
                      data-aos="fade-up"
                      data-aos-duration="3000"
                      key={index}
                    >
                      <ContentWithIcon
                        icon={item.icon}
                        name={item.name}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSec secTitle="When Our Clients Win, We Win" />

      <PurpleBGSec
        secClass="pricing-plan-sec"
        clipVariant="reverse"
        tag="Pricing Plan"
        title="Flexible Pricing Plans For All Business Types"
      >
        {pricingPlan.map((item, index) => (
          <div className="col-lg-4 mb-4" key={index}>
            <PricePlanCard
              name={item.name}
              price={item.price}
              description={item.description}
              list={item.list}
            />
          </div>
        ))}
      </PurpleBGSec>

      <section className="premier-design-studio design_and_development_all-platforms">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  Design and development across all platforms
                </h1>
                <p
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  We fuel the growth of purpose driven brands through strategy
                  activation, design empowerment, and market adoption.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img
                  src={designanddevimg}
                  alt="Design and development across all platforms"
                  className="img-fluid"
                  data-aos="fade-right"
                  data-aos-duration="2000"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Strategic Web and Design Solutions That Set You Apart
                </h2>
                <p data-aos="fade-up" data-aos-duration="3000">
                  Our team of extraordinary designers, developers, and
                  strategists ensures that your website stands out with a
                  beautiful design and a powerful backend for a smooth journey!
                </p>
                <div
                  className="row mt-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  {premierDesignStudioIcon.map((item, index) => (
                    <div className="col-md-6 mb-md-0 mb-3" key={index}>
                      <ContentWithIcon
                        icon={item.icon}
                        name={item.name}
                        description={item.description}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactUsSec secTitle="Let’s Discuss Your Project!" />
      <BlogSec
        secTitle="Latest Trends & Insights, All From The Blog"
        blogCardsData={blogCardsData}
        itemsPerPage={3}
      />
      <GetStarted
        secTitle="Got An Idea? Let’s Discuss!"
        secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
        btnText="Book A Call!"
      />
    </DefaultLayout>
  );
};

export default Home;

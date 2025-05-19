import bannerBG from "../../assets/images/services-mobileAppDev-banner-bg.png";

import startupicon from "../../assets/images/services-mobileAppDev-abt-icon1.png";
import developmenticon from "../../assets/images/services-mobileAppDev-abt-icon2.png";
import analyticsicon from "../../assets/images/services-mobileAppDev-abt-icon3.png";
import comittedicon from "../../assets/images/services-mobileAppDev-abt-icon4.png";

import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import ProjectSec from "../../components/ProjectSec";
import TestimonialSec from "../../components/TestimonialSec";
import GetStarted from "../../components/GetStarted";
import OurTeamSec from "../../components/OurTeamSec";
import OutsourcingStrategySec from "../../components/OutsourcingStrategySec";

import WebCreationSec from "../../components/WebCreationSec";
import webcreationimg from "../../assets/images/services-mobileAppDev-web-creation-img.png";

import projectsimg1 from "../../assets/images/services-mobileAppDev-projects-img-1.png";
import projectsimg2 from "../../assets/images/services-mobileAppDev-projects-img-2.png";
import projectsimg3 from "../../assets/images/services-mobileAppDev-projects-img-3.png";
import projectsimg4 from "../../assets/images/services-mobileAppDev-projects-img-4.png";
import projectsimg5 from "../../assets/images/services-mobileAppDev-projects-img-5.png";
import projectsimg6 from "../../assets/images/services-mobileAppDev-projects-img-6.png";

import avgPerformanceImg from "../../assets/images/services-mobileAppDev-avg-img.png";

import AvgPerformanceSec from "../../components/AvgPerformanceSec";
import OurOfferSec from "../../components/OurOfferSec";

import servicesMobileAppDevgetstartedimg from "../../assets/images/servicesMobileAppDev-get-started-img.png";

const offerListData = [
  {
    title: "UI/UX Design & Wireframing",
    description:
      "We build smart interfaces and stunning visuals that guide users intuitively through your app from the first screen onward.",
  },
  {
    title: "App Store & Play Store",
    description:
      "Launch with confidence. We manage your app’s App Store and Play Store listing, ensuring compliance and visibility from day one.",
  },
  {
    title: "iOS & Android Native Apps",
    description:
      "From iOS mobile app development to Android, our apps are built for speed, reliability, and user engagement on any platform.",
  },
  {
    title: "Cross-Platform Apps",
    description:
      "Want one codebase for multiple devices? We build responsive cross-platform apps that save time, cut costs, and maintain system feature consistency.",
  },
  {
    title: "Maintenance & Version",
    description:
      "Post-launch, we update your app with bug fixes, new OS versions, considering user needs, and ensuring continued reliability.",
  },
  {
    title: "Performance Optimization",
    description:
      "We constantly monitor and refine speed, responsiveness, and battery usage to give users the best mobile experience possible.",
  },
];

const avgPerformanceData = [
  {
    id: 1,
    percentage: "75%",
    // icon: brandicon,
    name: "Increase in lead-gen",
    description: "75% of users were retained after 30 days.",
  },
  {
    id: 2,
    percentage: "40%",
    // icon: uiuxdesignicon,
    name: "Increase in social media engagement",
    description: "40% improvement in app store ratings post-redesign.",
  },
];

export const aboutBoxesData = [
  {
    id: 1,
    icon: startupicon,
    name: "UI/UX Design",
    description:
      "From layout to animations, we craft UI/UX experiences that are human-first, responsive, and engineered to boost engagement.",
  },
  {
    id: 2,
    icon: analyticsicon,
    name: "App Store Deployment",
    description:
      "Skip the frustration. We guide you through app submissions, ensuring you're visible, compliant, and searchable from day one.",
  },
  {
    id: 3,
    icon: developmenticon,
    name: "iOS & Android Development",
    description:
      "We create apps specifically tailored for each platform’s coding language, performance requirements, and user behavior patterns.",
  },
  {
    id: 4,
    icon: comittedicon,
    name: "API Integrations",
    description:
      "Power your app with seamless third-party and custom API connections that extend functionality and streamline workflows.",
  },
];

const MobileAppDevelopment = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bannerBG={bannerBG}
        title="Mobile App Development"
        page="Services"
      />

      <OutsourcingStrategySec
        secTitle={`Mobile App Development Services For Enterprise-Level Brand Performance`}
        secDescription={`We develop mobile apps that balance design, functionality, and reliability. As a leading mobile app development company in New York, we offer fast, secure, and optimized Android and iOS solutions. Our mobile app developers ensure your idea is transformed into an app that users love and businesses depend on.`}
        secSubSecTitle={`Multifunctional Mobile Apps Built For Every Platform`}
        secSubSecDescription={`Our mobile app development services deliver smooth user experiences across devices. From wireframes to backend APIs, we craft mobile apps with the user and market in mind. Expect performance, speed, and user retention in your apps built by expert mobile app developers of New York.`}
        boxesData={aboutBoxesData}
      />

      <WebCreationSec
        image={webcreationimg}
        projectsCount={3500}
        secTag="Why Choose Us?"
        secTitle="Smart Mobile Apps Development Backed by Real Support"
        secDescription={`Our mobile app development services in New York are designed around your goals. From the first wireframe to launch day and beyond, we offer transparent communication, expert guidance, post-launch support, and flexible packages.`}
        listdata={[
          {
            title: "24/7 Customer Support",
            description:
              "You’ll never feel stuck. Our developers and support team are available any time you need help or guidance.",
          },
          {
            title: "Customizable Plans",
            description:
              "Only pay for what you need. Scale features, updates, and backend support based on your goals and mobile app development cost.",
          },
        ]}
      />

      <ProjectSec
        secTag="Projects"
        secTitle="View The Best Of Our Mobile Apps"
        projectsData={[
          { imageList: [projectsimg1, projectsimg2] },
          { imageList: [projectsimg3, projectsimg4] },
          { imageList: [projectsimg5, projectsimg6] },
        ]}
      />

      <OurOfferSec
        secTitle="What You Can Expect From Our Mobile App Development Services"
        secDescription={`From ideation to App Store launch, our services are built to deliver stable, beautiful apps that grow with you. Made for both iOS and Android, or even cross-platform, we’ve got you covered. Discover the features we offer with our mobile app development services in New York.`}
        listdata={offerListData}
      />

      <AvgPerformanceSec
        className="services__avg-sec"
        image={avgPerformanceImg}
        secTag="Result"
        secTitle="Mobile Apps That Go Beyond Downloads"
        secDescription="Our mobile app development work leads to real results, and each app’s success is measured in user retention, engagement, and conversions. Our mobile applications bring results similar to the following:"
        listData={avgPerformanceData}
      />

      <OurTeamSec secTitle="Meet The Minds Behind" />

      <TestimonialSec
        secTag="Testimonials"
        secTitle="Word-of-Mouth for Our Mobile Applications"
      />
      <GetStarted
        bgImage={servicesMobileAppDevgetstartedimg}
        secTitle="Got An Idea? Let’s Discuss!"
        secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
        btnText="Book A Call!"
      />
    </DefaultLayout>
  );
};

export default MobileAppDevelopment;

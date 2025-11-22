import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import herobannerimg from "../../assets/images/services/domainregisteration/herobanner-inner-img.webp";
import herobanner from "../../assets/images/services/domainregisteration/herobanner.webp";
import aboutimg from "../../assets/images/services/domainregisteration/aboutimg.webp";
import privacy1 from "../../assets/images/services/domainregisteration/privacy-1.webp";
import privacy2 from "../../assets/images/services/domainregisteration/privacy-2.webp";
import privacy3 from "../../assets/images/services/domainregisteration/privacy-3.webp";
import com from "../../assets/images/services/domainregisteration/com.svg";
import dns from "../../assets/images/services/domainregisteration/dns.svg";
import controlpanel from "../../assets/images/services/domainregisteration/control-panel.svg";
import security from "../../assets/images/services/domainregisteration/security.svg";
import FindDomain from "../../components/FindDomain";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import FrontendServices from "../../components/FrontendServices";
import DomainChooseCards from "../../components/DomainChooseCards";
import RegisterationPrivacy from "../../components/RegisterationPrivacy";
import HostingBoxes from "../../components/HostingBoxes";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";
import ReactHelmet from "../../components/ReactHelmet";

const DomainRegisteration = () => {
  const frontendservices = [
    {
      img: com,
      title: "Web Hosting: ",
      para: "Reliable hosting plans that keep your website secure, fast, and always online.",
    },
    {
      img: dns,
      title: "Website Design:",
      para: "Get stunning website designs that reflect your brand and attract more visitors.",
    },
    {
      img: security,
      title: "Custom Development:",
      para: "Build powerful and user-friendly web solutions tailored to your business needs.",
    },
  ];

  return (
    <>
      <ReactHelmet
        title="Domain Registration Services in New York | Buy Domain Name"
        description="Register your domain name in New York with trusted domain providers. Get a secure and manageable fresh domain or even transfer your website to a different domain easily."
        keywords="domain name registration new york, domain registration services new york, buy domain name new york, domain providers in new york, register a domain new york"
        url="https://nywebexperts.com/domain-registeration"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner domain-registeration-herobanner"
          formClass="service-form"
          bgImage={herobanner}
          servicesbannerimg={herobannerimg}
          title="Discover the Best Domain Providers in New York and Register Instantly"
          description="Pick the domain name you want for your brand, and the rest is our part. Our domain registration services in New York help you buy, register, and manage domain registration with ease so that your online presence can stand out and build instant trust within your audience."
          cta1="Get Started Today"
          cta2="hehe"
        />

        {/* <FindDomain /> */}

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner expert-domain-registeration"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="Experts in Smooth Domain Registration"
          description="New York Web Experts is one of the leading names in domain providers in New York. We help growing businesses and individuals register domain names that match their brand vibes. We start with finding the right domain name, then stay with you till we ensure you get secure ownership. We make the registration process simple and reliable."
          image={aboutimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Explore New York Web Experts"
          aboutbtnlink="/contact-us"
        />

        <FrontendServices
          ServiceSecClass="domain-registeration-services"
          shortHead="Your Next Steps"
          mainHead="Complete Your Web Experience"
          description="After you register a domain, explore our full range of services to build, host, and grow your online presence effectively."
          CardCol="col-lg-4 col-md-6"
          btnText="Send Us a Message"
          btnLink="/contact-us"
          services={frontendservices}
        />

        <DomainChooseCards />

        <RegisterationPrivacy />

        <HostingBoxes />

        <ContactUsSec secTag="Contact Us" secTitle="Let Us Reach You!" />

        <BlogSec
          blogminihead="Blogs & Articles"
          secTitle="Your Place for Latest News and Insights"
          itemsPerPage={3}
        />

        <GetStarted
          secTitle="Start Selling Online Today"
          secDescription="Let’s create an e-commerce website that grows your brand, simplifies your management, and increases sales across every channel."
          btnText="Chat With Us"
        />
      </DefaultLayout>
    </>
  );
};

export default DomainRegisteration;

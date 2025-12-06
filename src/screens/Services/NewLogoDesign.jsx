import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import ServicesBanner from "../../components/ServicesBanner";
import ReactHelmet from "../../components/ReactHelmet";
import herobanner from "../../assets/images/services/logodesign/herobanner.webp";
import herobannerinnerimg from "../../assets/images/services/logodesign/herobanner-inner-img.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import aboutimg from "../../assets/images/services/logodesign/aboutimg.webp";
import industry1 from "../../assets/images/services/logodesign/industry1.webp";
import industry2 from "../../assets/images/services/logodesign/industry2.webp";
import industry3 from "../../assets/images/services/logodesign/industry3.webp";
import industry4 from "../../assets/images/services/logodesign/industry4.webp";
import industry5 from "../../assets/images/services/logodesign/industry5.webp";
import chooseimg from "../../assets/images/services/logodesign/chooseimg.webp";
import LogoDesignServices from "../../components/LogoDesignServices";
import ExpertTalk from "../../components/ExpertTalk";
import Industryslider from "../../components/Industryslider";
import LogoDesignPortfolio from "../../components/LogoDesignPortfolio";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ContactUsSec from "../../components/ContactUsSec";
import BlogSec from "../../components/BlogSec";
import GetStarted from "../../components/GetStarted";

const NewLogoDesign = () => {

    const industries = [
    {
      title: "Website Design",
      // link: "/ecommerce-development",
      description:
        "We create high-performing websites that blend clean visuals with smooth functionality. Every layout supports your brand identity and guides users toward clear actions that help you grow.",
      image: industry1,
    },
    {
      title: "Landing Page Design",
      //link: "/healthcare-development",
      description:
        "Our landing pages are built for conversion. We design strategic layouts with messaging, visuals, and placement that guide customer decisions and turn interest into action without confusion.",
      image: industry2,
    },
    {
      title: "Product Packaging Design",
      //link: "/real-estate-development",
      description:
        "We design packaging that tells your story from the shelf to the doorstep. Colors, materials, and layouts work together to offer a premium unboxing experience that builds loyalty.",
      image: industry3,
    },
    {
      title: "Creative Ads Design",
      //link: "/real-estate-development",
      description:
        "Our ad creatives combine storytelling with visual impact. Every design is made to stand out in crowded feeds, deliver the right message, and attract your ideal audience through smart branding.",
      image: industry4,
    },
  
  ];



  return (
    <>
      <ReactHelmet
        title="Custom Logo Design Services for New York Brands"
        description="Get a standout logo designed with strategy, precision, and style. We craft visual identities that grow your brand and leave a lasting impression across digital and print."
        keywords="logo design new york, logo design company​ new york, logo design agency new york, logo design services new york, ecommerce logo design new york, custom logo design​ new york, best logo designs​ new york, affordable logo design new york"
        url="https://nywebexperts.com/logo-design"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner wordpress-banner logodesign-herobanner"
          formClass="service-form"
          bgImage={herobanner}
          servicesbannerimg={herobannerinnerimg}
          title="Brand Strategies That Talk Smart, Look Good, And Get Heard"
          description="A strong logo is more than a pretty shape. It is your identity, your first impression, and your biggest trust signal in a noisy digital world. We design logos that look stunning, feel intentional, and tell your brand story without overthinking it."
          cta1="Start My Logo Design"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection logodesign-about-sec"
          miniheadclass="shorttop-head"
          minihead="About Us"
          secTitle1="Smart Design Thinking"
          description="We design logos built around meaning, not randomness. Every design reflects what makes your brand unforgettable. Each logo is made with strategy, clarity, and creative intelligence that keeps your identity recognizable across platforms."
          image={aboutimg}
          AboutListItems={[
            "Smart design choices that reflect real brand personality",
             "Creative direction that stays timeless in changing trends", 
             "Consistent identity that feels unified in every touchpoint",
          ]}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Learn More About Us"
          aboutbtnlink="/about"
        />

        <LogoDesignServices />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection logodesign-about-sec"
          miniheadclass="shorttop-head"
          secTitle1="Your Logo Deserves"
          secTitle2="Meaning, Memory, and Impact"
          description="A great logo is not just graphics. It is the beginning of your brand story. One of our clients in New York started with a weak identity. After redesigning their logo, they saw a rise in recognition, engagement, and trust. A solid visual sparked the confidence they needed to grow."
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Build My Logo"
          aboutbtnlink="/contact-us"
        />

        <ExpertTalk
          mainHeading="Want Your Logo Design to Represent Your Brand at a Glance? "
          paragraph="Your logo becomes your identity, your memory, and your brand’s first handshake."
          buttonText="Talk to a Creative"
        />


        <Industryslider 
          secClass="webdesign-industry-slider"
          headCol="col-lg-10"
          minihead="More of Our Services"
          mainhead="Designing More Than Logos"
          description="We help brands show up consistently online and offline. Our creative team designs everything needed to shape a full visual identity that connects instantly and looks polished everywhere."
          industries={industries}
        />


        <LogoDesignPortfolio/>


           {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Flexible Logo Design Packages"
          secPara="Choose from our logo design plans customized for new brands, growing businesses, and even large-scale identities. Each package offers clarity, value, and expert design from start to finish."
          tabsData={dynamictabsData}
        /> */}


        <ContactUsSec secTitle="Talk to the Real Experts, Americans Trust!" />

        <BlogSec
          blogminihead="Blogs"
          secTitle="Get All the Latest Tech-Related Insights From the Experts"
          itemsPerPage={3}
        />

        <GetStarted
          secTitle="Got An Idea? Let’s Discuss!"
          secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
          btnText="Book A Call!"
        />

      </DefaultLayout>
    </>
  );
};

export default NewLogoDesign;

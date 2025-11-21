import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";
import bannerBG from "../../assets/images/locationpages/app-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/app-development-buffalo/chooseimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Lightbox from "yet-another-react-lightbox";
import pixleperfectimg1 from "../../assets/images/locationpages/app-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/app-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/app-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/app-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/app-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/app-development-buffalo/portfolio-6.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import LocationSupport from "../../components/LocationSupport";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import aboutbannerbg from "../../assets/images/locationpages/app-development-buffalo/gooddesignbg.webp";
import LocationContact from "../../components/LocationContact";
import GetStarted from "../../components/GetStarted";
import LocationFaqs from "../../components/LocationFaqs";
import TabsPricing from "../../components/TabsPricing";
import { dynamictabsData } from "../../data";
import ServicesBanner from "../../components/ServicesBanner";
import ReactHelmet from "../../components/ReactHelmet";

const AppDevelopmentBuffalo = () => {
  const webDesignPortfolioData = [
    {
      id: 1,
      image: pixleperfectimg1,
    },
    {
      id: 2,
      image: pixleperfectimg2,
    },
    {
      id: 3,
      image: pixleperfectimg3,
    },
    {
      id: 4,
      image: pixleperfectimg4,
    },
    {
      id: 5,
      image: pixleperfectimg5,
    },
    {
      id: 6,
      image: pixleperfectimg6,
    },
  ];

  const faqsData = [
    {
      header: " How long does it take to develop a mobile app in Buffalo, NY?",
      content:
        "The duration depends on the project's complexity, but ideally, a medium-sized app takes between 8 and 16 weeks from design to deployment. For larger apps or ERP solutions, we create a detailed roadmap by breaking the project into sprints. This way, development stays transparent, and you can see your app come to life with every implementation phase clearly demonstrated. ",
    },
    {
      header: "What platforms do you specialize in for app development?",
      content:
        "We offer both iOS and Android app development in Buffalo, NY, along with cross-platform solutions built for speed, scalability, and consistent user experience across devices.",
    },
    {
      header: "Do you offer post-launch app support and maintenance?",
      content:
        "Yes, we believe app maintenance is as vital as good app development, as it keeps the platform fast and reliable! We offer ongoing technical support, updates, and optimization services to ensure your app stays fast, secure, and compatible with the latest operating systems.",
    },
    {
      header:
        "Can you integrate my app with existing business systems or APIs?",
      content:
        "Absolutely, whether it’s CRM, ERP, or custom APIs, our custom mobile app development services in Buffalo, NY,, ensure smooth integration with your existing ecosystem, without any downtime.",
    },
    {
      header:
        "What makes California Web Coders different from other app development companies in Los Angeles?",
      content:
        "We don’t just build apps; we build growth engines. Every decision is made to maximize engagement, retention, and conversions. That’s what makes us more than developers; we’re your strategic tech partners.",
    },
    {
      header: "Do you help with app uploading and publishing on app stores?",
      content:
        "Yes, publishing the app on the App Store and Google Play is part of our process. We handle the entire submission, optimization, and approval steps to ensure your app meets all platform guidelines and goes live smoothly without delays.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "Satisfaction Guaranteed, 100%" },
    { image: support2, title: "Round-the-Clock Support" },
    { image: support3, title: "Your App, You Own It!" },
    { image: support4, title: "54% Increase in Sales" },
    { image: support5, title: "Build for Growth" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (index, imageArray) => {
    const imageList = imageArray.map((item) => ({
      src: item.image,
    }));
    setImages(imageList);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <ReactHelmet
        title="App Development Buffalo, NY"
        description="The leading design and development company, NY Web Experts offers App Development in Buffalo, NY, creating stunning iOS and Android apps that engage users and drive results."
        keywords="mobile app development company Buffalo NY, custom mobile app development Buffalo NY, mobile app development agency Buffalo NY, mobile app development cost Buffalo NY, custom mobile app development services Buffalo NY, iOS app development Buffalo NY, Android app development Buffalo NY"
        url="https://nywebexperts.com/app-development-buffalo"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Deploy Mobile Apps in Buffalo, NY, Built to Defy Ordinary!"
          description="At NY Web Experts, we turn ideas into digital experiences that wow users and grow businesses. From New York to the world, our mobile app development in Buffalo, NY, is engineered for performance, designed for delight, and optimized to turn every tap into traction."
          cta1="Develop Powerful Apps"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Choose Us?"
          choosemainhead="Because Average Apps Don’t Stand a Chance"
          choosemainpara="Smart, scalable, and stunning, this is what happens when strategy meets creativity. At NY Web Experts, our custom mobile app development in Buffalo, NY, has powered everything from eCommerce startups to enterprise workflows; designed with flair, built for performance, and optimized for growth."
          miniheadclass="shorttop-head"
          secTitle1="We Do Both:"
          secTitle2="Native and Cross-Platform"
          description="We create human-centered enterprise software that has the polished, snappy feel of the best consumer apps."
          descriptiontwo="Other build apps, we build apps and experiences that fit every device and every audience. Whatever you need, a native app engineered for peak performance or a cross-platform solution crafted for universal reach, our team ensures your product feels seamless, looks stunning, and performs flawlessly everywhere it goes."
          chooselistitem1="Increase conversions by 60%"
          chooselistitem2="Your Business in the Palm of Your Customers"
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Click Here to Choose the Best"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="Apps So Good, They Market Themselves"
          secDescription="Scroll through and see our goldmine of custom mobile app development services in Buffalo, NY, that is filled with high-converting apps and has powered everything from eCommerce startups to enterprise workflows; designed with flair, built for performance, and optimized for growth."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Packed with Power and Performance in Pricing That Makes Sense!"
          secPara="Think of it this way: a brilliant app is an investment that keeps giving. A poor one? It drains resources, frustrates users, and kills conversions. At NY Web Experts, our mobile app development cost in Buffalo, NY, is shaped around value, not vanity. "
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="app-florida-herobanner reimage-banner"
          bgImage={aboutbannerbg}
          title="Engagement isn’t Luck, It’s Our Code!"
          description="Did you know that businesses with well-designed mobile apps see up to a 62% increase in customer engagement within their first six months? That’s not luck, that’s a strategy we master like it’s at the tip of our fingers! "
          descriptiontwo="At NY Web Experts, we build apps that sure do look pretty on a phone, but they also do the hard work, just like a beauty with brains. They sell, convert, and create brand loyalty that keeps users coming back. Need iOS app development in Buffalo, NY, or Android development to reign on the Play Store, or a cross-platform solution if you don’t want the hassle of handling two apps? We ensure every tap leads to growth and every download drives results."
          cta1="Develop My App"
          cta2="hehe"
        />

        <LocationSupport
          minihead="What Makes Us the Best"
          mainheadSpan="We’re the brains behind"
          mainhead="Buffalo’s Best App"
          mainPara="Get the app that delivers results, outlasting trends and outpacing competitors"
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="A Mobile App can Increase Sales by 54%! Let’s do it!"
          secPara="Have a question? Want to show us your project? Or want to turn downloads into dollars, fill out the form, and our team will get back to you promptly."
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="All Your Mobile App-Related Querries, Answer Here!"
          secPara="Scroll through our FAQs to get all the answers. And if you can’t find your answer here, simply fill out the form and ask your question directly; we’re sure you’ll get your answers and your growth there!"
          faqs={faqsData}
        />

        <GetStarted
          secTitle="Got An Idea? Let’s Discuss"
          secDescription="You’ve got business goals, and we have the best team to turn them into reality. Let’s build your business into a digital beast that gets clicks, leads, and revenue."
          btnText="Book A Call"
        />

        {isOpen && images.length > 0 && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images}
            index={currentIndex}
          />
        )}
      </DefaultLayout>
    </>
  );
};

export default AppDevelopmentBuffalo;

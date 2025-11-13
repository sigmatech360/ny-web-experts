import React, { useState } from "react";
import DefaultLayout from "../../components/DefaultLayout";
import bannerBG from "../../assets/images/locationpages/wordpress-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/wordpress-development-buffalo/chooseimg.webp";
import WordPressPerformanceSection from "../../components/WordPressPerformanceSection";
import Lightbox from "yet-another-react-lightbox";
import pixleperfectimg1 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/wordpress-development-buffalo/portfolio-6.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import LocationSupport from "../../components/LocationSupport";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import aboutbannerbg from "../../assets/images/locationpages/wordpress-development-buffalo/gooddesignbg.webp";
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
      header: "Is there a free consultation available?",
      content:
        "Absolutely, schedule a complimentary consultation for expert advice on our WordPress development services Buffalo, NY,  and discuss your goals to get an actionable plan for your project.",
    },
    {
      header: "Can I upgrade my plan later?",
      content:
        "Yes, you can upgrade or customize your package anytime as your business scales.",
    },
    {
      header: "Do you handle ongoing maintenance?",
      content:
        "Of course, what’s a WordPress development service in Buffalo, NY, without web maintenance? We provide continuous updates, monthly/weekly backups, and security monitoring for every site we develop.",
    },
    {
      header: "What industries do you work with?",
      content:
        "Whatever industry you’re in. From real estate and healthcare to e-commerce and hospitality, we’ve worked with businesses across Buffalo’s most competitive industries. To explore more, swipe through our WordPress development service in Buffalo, NY.",
    },
    {
      header: "How soon can you deliver my website?",
      content:
        "It depends on the project's complexity; however, most standard builds go live within 4-6 weeks.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "100% Satisfaction" },
    { image: support2, title: "Round-the-Clock Customer Support" },
    { image: support3, title: "Your App, You Own It!" },
    { image: support4, title: "Stunning and affordable" },
    { image: support5, title: "Build for Your Business" },
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
      <DefaultLayout>
        <ReactHelmet
          title=" WordPress Development Buffalo, NY | NY Web Experts - Get a Free Consultation Today"
          description="Build, scale, and grow with expert WordPress Development in Buffalo, NY; custom, high-performing websites by NY Web Experts, optimized for AEO, GEO, and SEO for powerful growth and increased web ranking"
          keywords="WordPress development Buffalo ny, custom WordPress development Buffalo ny, WordPress development services Buffalo ny, top wordpress development agencies Buffalo ny, wordpress website development in Buffalo ny, wordpress development company Buffalo , wordpress development services Buffalo ny"
          url="https://nywebexperts.com/wordpress-development-buffalo"
        />

        <ServicesBanner
          secClass="location-hero-banner"
          formClass="service-form"
          bgImage={bannerBG}
          title="Scale Your Business with WordPress Development in Buffalo, NY"
          description="Your business deserves performance, power, purpose, and a platform that lets the world see what you do best. At NY Web Experts, we develop websites that showcase your work to the world through our WordPress Development in Buffalo, NY process and help you:"
          bulletpoints={[
          "Gain more customers",
          "Beat your competitors at every turn",
          "Take your brand to the top",
        ]}
        descriptionthree="Open your digital office with NY Web Experts today!"
          cta1="Scale with WordPress"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Why Choose Us"
          choosemainhead="New Yorkers' Go-To Choice for WordPress Development Services in Buffalo, NY"
          choosemainpara="We’re not just another agency; we’re Buffalo’s WordPress specialists who understand how digital presence = business growth. With over 10 years of combined experience, our developers and designers strike a balance between creativity and strategy to deliver custom WordPress development that Buffalo, NY businesses rely on."
          choosesecondpara="Our approach is design-driven and performance-focused. Every site we build is optimized for speed, security, and SEO to help you dominate search results and capture your audience’s attention."
          miniheadclass="shorttop-head"
          secTitle1="Websites that"
          secTitle2="Work and Win"
          description="From wireframes to launch and beyond, we focus on creating experiences that users can easily navigate and interact with. Whether it’s a small business site or a large enterprise platform, we tailor each build to your unique goals and objectives."
          chooseListItems={[
            "Conversion-Focused Layouts Built for Measurable Results",
            "SEO-Ready Structure to Boost Visibility in Buffalo and Beyond",
            "Ongoing Support and Optimization After Launch",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Let’s go Online"
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="See the Impact: Businesses Empowered by Our WordPress Expertise"
          secDescription="Swipe through our portfolio and see a diverse range of industries, retail, real estate, e-commerce, corporate, and more, each built on advanced WordPress development services in Buffalo, NY, that entrepreneurs trust."
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />

        <TabsPricing
          minihead="Pricing Plans"
          mainhead="Smart Pricing for Real Results"
          secPara="We believe quality digital solutions should be accessible to everyone. Thus, our transparent pricing plan ensures startups, enterprises, and every other business get the best WordPress website development service in Buffalo, NY"
          tabsData={dynamictabsData}
        />

        <ServicesBanner
          secClass="app-florida-herobanner"
          bgImage={aboutbannerbg}
          title="Reimagine What WordPress Can Do for You"
          description="Most websites exist; Yours should perform. At NY Web Experts, our top WordPress development team in Buffalo, NY, transforms websites into business engines; tools that generate leads, convert users, and evolve with market trends."
          descriptiontwo="We don’t just drag-and-drop pages; we engineer an entire world. A world where your brand rules everything with engaging UI, optimized content, and fast performance, helping you reign with authority."
          cta1=" Talk to Us"
          cta2="hehe"
        />

        <LocationSupport
          minihead="Your Satisfaction is Our Priority"
          mainheadSpan="Smart, Scalable, and Always"
          mainhead="on Top"
          mainPara="Rated as the top WordPress development agency in Buffalo, NY, our promise goes beyond delivering a beautiful site; we guarantee satisfaction, transparency, and long-term results."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Contact Us"
          mainhead="Let’s Go Beyond “Good Enough” with NY Web Experts"
          secPara="Big ideas deserve websites that keep up. Whether you’re ready to launch something new, fix what’s broken, or have outgrown that old “good enough,” our WordPress development team in Buffalo, NY, is here to make it happen with strategy, skill, and just the right amount of obsession."
          btntxt="Let’s Connect"
        />

        <LocationFaqs
          minihead="Frequently Asked Questions"
          mainhead="Have Questions? We have all the Answers"
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

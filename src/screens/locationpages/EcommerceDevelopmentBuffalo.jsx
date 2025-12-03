import React, { useState } from 'react'
import ReactHelmet from '../../components/ReactHelmet'
import DefaultLayout from '../../components/DefaultLayout'
import ServicesBanner from '../../components/ServicesBanner'
import WordPressPerformanceSection from '../../components/WordPressPerformanceSection'
import TabsPricing from '../../components/TabsPricing'
import { dynamictabsData } from '../../data'
import pixleperfectimg1 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-1.webp";
import pixleperfectimg2 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-2.webp";
import pixleperfectimg3 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-3.webp";
import pixleperfectimg4 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-4.webp";
import pixleperfectimg5 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-5.webp";
import pixleperfectimg6 from "../../assets/images/locationpages/ecommerce-development-buffalo/portfolio-6.webp";
import PixelPerfectSec from "../../components/PixelPerfectSec";
import LocationSupport from "../../components/LocationSupport";
import support1 from "../../assets/images/locationpages/app-development-buffalo/guarrantee.svg";
import support2 from "../../assets/images/locationpages/app-development-buffalo/support.svg";
import support3 from "../../assets/images/locationpages/app-development-buffalo/ownership.svg";
import support4 from "../../assets/images/locationpages/app-development-buffalo/money.svg";
import support5 from "../../assets/images/locationpages/app-development-buffalo/Pentool.svg";
import aboutbannerbg from "../../assets/images/locationpages/ecommerce-development-buffalo/gooddesignbg.webp";
import bannerBG from "../../assets/images/locationpages/ecommerce-development-buffalo/herobanner.webp";
import chooseimg from "../../assets/images/locationpages/ecommerce-development-buffalo/chooseimg.webp";
import eloria from "../../assets/images/locationpages/ecommerce-development-buffalo/eloria.webp";
import LocationContact from '../../components/LocationContact'
import LocationFaqs from '../../components/LocationFaqs'
import GetStarted from '../../components/GetStarted'
import Lightbox from 'yet-another-react-lightbox'
import { Link } from 'react-router-dom'
import FormModal from '../../components/FormModal'




const EcommerceDevelopmentBuffalo = () => {

    const [showModal, setShowModal] = useState(false);

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
      header: "Is there a free trial available?",
      content:
        "We offer a free discovery call where our e-commerce website development team in Buffalo, NY, walks you through the best structure for your online store.",
    },
    {
      header: "Can I upgrade my plan later?",
      content:
        "Absolutely, as your store grows, you can shift to a higher plan supported by our e-commerce website developers in Buffalo, NY.",
    },
    {
      header: "What kind of information can I track?",
      content:
        "There are a whole lot of things you can track and tweak. At the base, you can track visitors, performance, ranking, and much more, and you can use this information to tweak your store, helping you increase sales.",
    },
    {
      header: "How long does it take to build an e-commerce website?",
      content:
        "Timelines vary by project size, but our e-commerce website development services in Buffalo, NY, typically complete most stores within a few weeks to a couple of months. However, if it's a custom project, it will take more time.",
    },
    {
      header: "Do you offer ongoing support after the website is launched?",
      content:
        "Yes, we stay with you after launch to handle updates, improvements, technical support, and anything your store needs to keep performing smoothly.",
    },
    {
      header: "Will my e-commerce website be mobile-friendly?",
      content:
        "Absolutely, every store we build is fully responsive, optimized for mobile shoppers, and designed to deliver a smooth experience on any device.",
    },
  ];

  const supportCardsData = [
    { image: support1, title: "100% Satisfaction" },
    { image: support2, title: "Round-the-Clock Customer Support" },
    { image: support3, title: "Your Web, You Own It!" },
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
        title="E-commerce website development in Buffalo, NY"
        description="Work with NY Web Experts, the leading e-commerce website development in Buffalo, NY, for businesses wanting high-performing stores, smooth user experiences, modern design, and reliable long-term growth online"
        keywords="e-commerce website development services Buffalo NY, e commerce website development Buffalo NY, e-commerce website development company Buffalo NY, e commerce website developer Buffalo NY, e-commerce website development agency Buffalo NY"
        url="https://nywebexperts.com/wordpress-development-buffalo"
      />

      <DefaultLayout>
        <ServicesBanner
          secClass="location-hero-banner"
          formClass="service-form"
          bgImage={bannerBG}
          title="10x Your Sales with Our E-commerce Website Development"
          description="In the vast world of URLs filled with websites that don’t work, be the one that outsells its competitors! Your customers want simple choices, quick pages, and a shopping experience that makes them feel good! That is exactly what we build. NY Web Experts creates high-performing online stores engineered for growth, clarity, and long-term success. "
          descriptionthree="Partner with an expert e-commerce website development company in Buffalo, NY, and scale your revenue the smart way."
          cta1="Develop Your Salesfront"
          cta2="hehe"
        />

        <WordPressPerformanceSection
          reverse
          wordpresssecclass="WordPressPerformanceSection location-choose-banner"
          chooseminihead="Built to Convert"
          choosemainhead="Kind of Website that Sells Like Crazy"
          choosemainpara="Our e-commerce website development agency in Buffalo, NY, creates the right type of store for your brand, built with all the right functionalities and paired with optimized structure, intuitive user flows, strong product presentation, and performance designed to turn browsing customers into reliable buyers. We built:"
          miniheadclass="shorttop-head"
          secTitle1="Whatever Your Need, We Make it and"
          secTitle2="Make it Better!"
          description="We create online stores that charm your visitors, keep them exploring, showcase your products beautifully, and turn casual scrolling into confident buying with smooth navigation, smart structure, and an experience people love returning to."
          chooseListItems={[
            "Drag-and-Drop Websites",
            "Custom Solutions",
          ]}
          image={chooseimg}
          listClass="d-none"
          TouchBtn="d-none"
          btntext="Talk to Us" 
          aboutbtnlink="/contact-us"
        />

        <PixelPerfectSec
          minihead="Portfolio"
          secTitle="A Showcase of Stores Built to Impress and Convert"
          secDescription="Swipe through our goldmine of e-commerce website development projects and browse stores so good, even we keep staring at them!"
          projectsData={webDesignPortfolioData}
          onImageClick={handleImageClick}
        />


        
        {/* <TabsPricing
          minihead="Pricing Plans"
          mainhead="Pick a Plan and Get Your Business Online"
          secPara="Choose a plan that gives your store brains, beauty, and serious selling power without confusing pricing or unnecessary complications slowing growth."
          tabsData={dynamictabsData}
        /> */}

        <ServicesBanner
          secClass="app-florida-herobanner reimage-banner ecommerce-buffalo-reimagine"
          bgImage={aboutbannerbg}
          servicesbannerimg={eloria}
          minihead="The Best in Business"
          title="The Team Behind Buffalo’s Most Reliable E-commerce Stores"
          description="When visitors come to your website, they look for the product, but they also look for authority, someone they can trust, and someone who is up to date. Thus, being pretty is not enough. Your store needs strategic product architecture, and that is is our specialty. Brands partner with us when they want e-commerce website developers in Buffalo, NY, who treat every store like a long-term revenue system, not a one-time deliverable. "
          cta1="Talk to Us"
          cta2="hehe"
        />

        <LocationSupport
          minihead="What Makes Us the Best"
          mainheadSpan="The Brains Behind Buffalo’s"
          mainhead="Best E-commerce Websites"
          mainPara="Get the web that delivers results, outlasting trends and outpacing competitors."
          supportCards={supportCardsData}
        />

        <LocationContact
          minihead="Connect With Us"
          mainhead="Bring Your Business to Millions of Shoppers Online"
          secPara="Have a question? Want to show us your project? Or want to make dollars through e-commerce website development in Buffalo, NY? Fill out the form, and our team will get back to you promptly."
          btntxt="Fill out the Form"
        />

        <LocationFaqs
          minihead="FAQs"
          mainhead="Got Questions? We’ve Got Clarity!"
          secPara="Explore everything you need to know about our e-commerce website development services in Buffalo, NY."
          faqs={faqsData}
        />

        <section className="started-new-project">
            <div className="container">
                <div className="newproject-bg">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="newproject-starttxt">
                                        <h2 className='mainhead text-white'>Build a Store Worth Talking About</h2>
                                        <p>Never settle for something generic when it’s about your brand. Work with NY Web Experts and deploy an e-commerce store that is actually worthy of representing your business online.</p>
                                        <button  className='ny-btn' onClick={() => setShowModal(true)}>Start Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <FormModal show={showModal} handleClose={() => setShowModal(false)} />
        </section>

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
  )
}

export default EcommerceDevelopmentBuffalo
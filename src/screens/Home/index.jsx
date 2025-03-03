import React from "react";
import DefaultLayout from "../../components/DefaultLayout";

import bnnerimg from "../../assets/images/bnner-img.png";
import premierdesignstudioimg from "../../assets/images/premier-design-studio-img.png";


import projectsimg1 from "../../assets/images/projects-img-1.png";
import projectsimg2 from "../../assets/images/projects-img-2.png";
import projectsimg3 from "../../assets/images/projects-img-3.png";
import projectsimg4 from "../../assets/images/projects-img-4.png";
import projectsimg5 from "../../assets/images/projects-img-5.png";
import projectsimg6 from "../../assets/images/projects-img-6.png";

import designanddevimg from "../../assets/images/design-and-dev-img.png";

import ContentWithIcon from "../../components/ContentWithIcon";
import { HiOutlinePhone } from "react-icons/hi";
import { TbChecks } from "react-icons/tb";
import ServicesCard from "../../components/ServicesCard";


import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = {
  lat: 34.0522, // Los Angeles latitude
  lng: -118.2437, // Los Angeles longitude
};

import {
  premierDesignStudioIcon,
  servicesInfoSec,
  ourServicesData,
  ourBenefitsContentIconData,
  pricingPlan,
} from "../../data";
import PricePlanCard from "../../components/PricePlanCard";
import GetStarted from "../../components/GetStarted";
import BlogSec from "../../components/BlogSec";
import TestimonialSec from "../../components/TestimonialSec";
import WebCreationSec from "../../components/WebCreationSec";

const Home = () => {
  return (
    <DefaultLayout>
      <section className="main-banner clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="main-banner-content">
                <h2>Design & Branding Studio in New York</h2>
                <p className="poppins">
                  At Edgar 360 Images, we specialize in helping real estate
                  agents stand out with high-quality visuals that capture every
                  property's best features. Our services include professional
                  photography, immersive 360° videos, virtual staging, and more.
                  Operated by active police officers, we offer a personalized,
                  hands-on experience for each client.
                </p>
                <button className="ny-btn">Explore Our Services</button>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-3">
              <div className="main-banner-img">
                <img src={bnnerimg} alt="Banner Image" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="premier-design-studio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1 className="text-center">
                  A premier New York-based design studio
                </h1>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img
                  src={premierdesignstudioimg}
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2>
                  Websites and branding that set the groundwork for successful
                  marketing
                </h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <div className="row mt-4">
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

      <section className="get-custom-logo bg-gradiant mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-3 mb-lg-0">
              <h4 className="get-custom-logo-title">
                Get Custom Logo from our Best Logo Design Agency in USA
              </h4>
            </div>
            <div className="col-lg-8">
              <div className="get-custom-logo-content d-flex">
                <div className="get-custom-logo-item">
                  <div className="get-custom-logo-item-icon">
                    <HiOutlinePhone />
                  </div>
                  <div className="get-custom-logo-item-content">
                    <p>Call Us</p>
                    <a href="tel:(713) 347-2269">(713) 347-2269</a>
                  </div>
                </div>
                <div className="get-custom-logo-item">
                  <div className="get-custom-logo-item-icon">
                    <HiOutlinePhone />
                  </div>
                  <div className="get-custom-logo-item-content">
                    <p>Start</p>
                    <a href="javascript:;">Live Chat</a>
                  </div>
                </div>
                <div className="get-custom-logo-item">
                  <div className="get-custom-logo-item-icon">
                    <HiOutlinePhone />
                  </div>
                  <div className="get-custom-logo-item-content">
                    <p>Start</p>
                    <a href="mailto:support@nywebexperts.com">
                      support@nywebexperts.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WebCreationSec />
      

      <section className="services-info-sec">
        <div className="container">
          <div className="row">
            {servicesInfoSec.map((item, index) => (
              <div className="col-lg-4 mb-4" key={index}>
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
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="sec-head mb-4">
                <p className="sec-tag">Our Services</p>
                <h2>Services We Offer</h2>
              </div>
            </div>
            {ourServicesData.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <ServicesCard
                  image={item.image}
                  name={item.name}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="sec-head mb-4">
                <p className="sec-tag">Projects</p>
                <h2>Get inspired by our finest work</h2>
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="projects-item d-flex flex-column gap-4">
                <img
                  src={projectsimg1}
                  className="img-fluid"
                  alt="project image 1"
                />
                <img
                  src={projectsimg2}
                  className="img-fluid"
                  alt="project image 2"
                />
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="projects-item d-flex flex-column gap-4">
                <img
                  src={projectsimg3}
                  className="img-fluid"
                  alt="project image 3"
                />
                <img
                  src={projectsimg4}
                  className="img-fluid"
                  alt="project image 4"
                />
              </div>
            </div>
            <div className="col-md-4 mb-md-0 mb-3">
              <div className="projects-item d-flex flex-column gap-4">
                <img
                  src={projectsimg5}
                  className="img-fluid"
                  alt="project image 5"
                />
                <img
                  src={projectsimg6}
                  className="img-fluid"
                  alt="project image 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-benefits clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-5">
              <div className="web-creation-content">
                <p className="sec-tag mb-4">Our Benefits</p>
                <h2>Why You Should Choose us.</h2>
                <p className="poppins pe-xl-5 me-xl-5 pe-0   me-0">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Top cloud expertise</h5>
                      {/* <p></p> */}
                    </div>
                  </div>
                  <div className={`content-with-icon-item flex-row`}>
                    <div className="content-with-icon-icon">
                      <TbChecks />
                    </div>
                    <div className="content-with-icon-content">
                      <h5>Reliable web development</h5>
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
                    <div className="col-md-6 mb-4" key={index}>
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

      <TestimonialSec />

      <section className="pricing-plan-sec clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <div className="sec-head">
                <p className="sec-tag">Pricing Plan</p>
                <h2>Your Partner For Software Innovation</h2>
              </div>
            </div>

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
          </div>
        </div>
      </section>

      <section className="premier-design-studio design_and_development_all-platforms">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 mb-5">
              <div className="premier-design-studio-title">
                <h1 className="text-center">
                  Design and development across all platforms
                </h1>
                <p className="text-center">
                  We fuel the growth of purpose driven brands through strategy
                  activation, design empowerment, and market adoption.
                </p>
              </div>
            </div>
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="premier-design-studio-img">
                <img src={designanddevimg} alt="" className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sec-content">
                <h2>
                  We’re design-focused across every product that people love to
                  use
                </h2>
                <p>
                  We create human-centered enterprise software that has the
                  polished, snappy feel of the best consumer apps.
                </p>
                <div className="row mt-4">
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

      <section className="contact-us-sec clipedShaped-sec bg-gradiant">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-lg-0 mb-4">
              <div className="web-creation-content mb-5">
                <p className="sec-tag mb-4">Contact Us</p>
                <h2>Drop us a Line.</h2>
              </div>
              <div className="contact-us-form pe-xl-5 me-xl-5 pe-0 me-0">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Full name"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <select class="form-select form-control">
                      <option selected>Select Service</option>
                      <option value="1">Service 1</option>
                      <option value="2">Service 2</option>
                      <option value="3">Service 3</option>
                    </select>
                  </div>
                  <div className="col-lg-12 mb-3  4">
                    <textarea
                      class="form-control"
                      rows="5"
                      placeholder="Write message"
                      style={{ resize: "none" }}
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button className="ny-btn">Send a Message</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-us-map-content">
                <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={defaultCenter}
                    zoom={12}
                  >
                    <Marker position={defaultCenter} />
                  </GoogleMap>
                </LoadScript>
                <div className="contact-us-map-content-text">
                  <h1>Call us anytime: (713) 347-2269</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BlogSec />

      <GetStarted />
      
    </DefaultLayout>
  );
};

export default Home;

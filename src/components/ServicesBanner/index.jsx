import React, { useState } from "react";
import { Link } from "react-router-dom";

import FormModal from "../FormModal";
import { useInView } from "react-intersection-observer";

const ServicesBanner = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


   const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
      username: "",
      email: "",
      phone: "",
      subject: "",
      service: "",
      data_message: "",
    });
  
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = async (e) => {
      // e.preventDefault();
      e.preventDefault();
      setLoading(true);
  
      try {
        const response = await fetch(`${apiUrl}/submit-query`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        console.log(result);
        // toast.success("Form Submitted Successfully");
  
        if (result.status) {
          toast.success(result.message);
          setFormData({
            username: "",
            email: "",
            phone: "",
            subject: "",
            service: "",
            data_message: "",
          });
        } else {
          const messages = result.message;
          Object.keys(messages).forEach((field) => {
            messages[field].forEach((msg) => {
              toast.error(msg);
            });
          });
        }
      } catch (error) {
        console.log(`Error submitting form:`, error);
        toast.error("Submission failed. Please try again.");
      } finally {
        setLoading(false);
      }
    };


  return (
    <>
      <section
        className={`services-banner-sec ${props.secClass}`}
        // style={{ backgroundImage: `url(${props.bgImage})` }}
        // ref={ref}
      >
        {props.bgImage && (
          <img
            src={props.bgImage}
            alt="Services Banner Img"
            className="services-banner-sec-bgImg"
            fetchPriority="high"
            width="1920"
            height="1080"
          />
        )}
        <div className="container">
          <div className="row align-items-center flex-lg-row">
            <div className={props.leftColClass || `col-lg-6`}>
              <div className="services-banner__content">
                <h1
                  // data-aos="fade-right"
                  // data-aos-delay={100}
                  dangerouslySetInnerHTML={{ __html: props.title }}
                ></h1>
                <p
                  // data-aos="fade-right"
                  // data-aos-delay={300}
                  dangerouslySetInnerHTML={{ __html: props.description }}
                ></p>
                {props.descriptiontwo && <p>{props.descriptiontwo}</p>}
                {props.bulletpoints && props.bulletpoints.length > 0 && (
                  <ul className="locatio-banner-bulletpoints">
                    {props.bulletpoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

                {props.descriptionthree && <p>{props.descriptionthree}</p>}
                <div
                  className="main-banner__content-btns"
                  // data-aos="fade-right"
                  // data-aos-delay={500}
                >
                  {props.cta1 && props.cta2 ? (
                    <>
                      <Link
                        to={props.cta1Link || "/contact-us"}
                        className="ny-btn"
                      >
                        {props.cta1}
                      </Link>
                      <Link
                        to={props.cta2Link || "/portfolio"}
                        className="theme-btn theme-btn-hover d-none"
                      >
                        {props.cta2}
                      </Link>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => setShowModal(true)}
                        className="theme-btn theme-btn__yellow"
                      >
                        Let's Get Started
                      </button>
                      <Link
                        to={"/contact-us"}
                        className="theme-btn theme-btn-hover"
                      >
                        Discuss Your Project
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className={props.rightColClass || `col-lg-6`}>
              {props.servicesbannerimg && (
                <div
                  className="services-banner__img"
                  // data-aos="fade-left"
                  // data-aos-delay={200}
                >
                  <img
                    src={props.servicesbannerimg}
                    className="img-fluid"
                    alt={props.title}
                    fetchPriority="high"
                    width={"336"}
                    height={"277"}
                  />
                </div>
              )}

                 <div className={`contactForm ${props.formClass}`}>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                   <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Company Organization"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                   <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Website"
                      className="form-control"
                      name="username"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-6 mb-3">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mb-3">
                    <label htmlFor="serviceSelect" className="visually-hidden">
                      Select Services
                    </label>
                    <select
                      id="serviceSelect"
                      className="form-select form-control"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>
                        Services
                      </option>
                      <option value="web-design-development">
                        Web Design and Development
                      </option>
                      <option value="logo-design">Logo Design</option>
                      <option value="cms-development">CMS Development</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="social-media-marketing">
                        Social Media Marketing
                      </option>
                      <option value="seo">SEO</option>
                      <option value="custom-development">
                        Custom Development
                      </option>
                      <option value="mobile-app-development">
                        Mobile App Development
                      </option>
                    </select>
                  </div>
                    <div className="col-lg-12 mb-3">
                    <input
                      type="text"
                      placeholder="How Did You Hear About TWS?"
                      className="form-control"
                      name="subject"
                      required
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      className="form-control"
                      placeholder="Tell Us About Your Buisness"
                      name="data_message"
                      value={formData.data_message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  <div className="col-md-12 mt-4">
                    <button
                      type="submit"
                      className={`ny-btn ${
                        loading ? "btn-loading" : "btn-loaded"
                      }`}
                      disabled={loading}
                    >
                     {props.btntxt || "send a message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* <FormModal show={showModal} handleClose={() => setShowModal(false)} /> */}
    </>
  );
};

export default ServicesBanner;

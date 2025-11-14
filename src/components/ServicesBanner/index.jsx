import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useInView } from "react-intersection-observer";
import fantasycheck from "../../assets/images/services/ecommercedevelopment/doublecheck.svg"

const ServicesBanner = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    website: "",
    email: "",
    phone: "",
    service: "",
    about_cwc: "",
    business: "",
  });

  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/let-connect`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      const result = response.data;

      if (result.status) {
        toast.success(result.message);
        setFormData({
          first_name: "",
          last_name: "",
          company: "",
          website: "",
          email: "",
          phone: "",
          service: "",
          about_cwc: "",
          business: "",
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={`services-banner-sec ${props.secClass}`}>
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
                <h1 dangerouslySetInnerHTML={{ __html: props.title }}></h1>
                <p dangerouslySetInnerHTML={{ __html: props.description }}></p>
                {props.descriptiontwo && <p>{props.descriptiontwo}</p>}
                {props.bulletpoints?.length > 0 && (
                  <ul className="locatio-banner-bulletpoints">
                    {props.bulletpoints.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}
                {props.fantasypoints?.length > 0 && (
                  <ul className="locatio-banner-bulletpoints fantasy-bullet-points">
                    {props.fantasypoints.map((point, index) => (
                      <li key={index}><img src={fantasycheck} alt="img" /> {point}</li>
                    ))}
                  </ul>
                )}
                {props.descriptionthree && <p>{props.descriptionthree}</p>}
                <div className={`main-banner__content-btns ${props.btnboxClass}`}>
                  {props.cta1 && props.cta2 ? (
                    <>
                      <Link to={props.cta1Link || "/contact-us"} className="ny-btn">
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
                      <Link to={"/contact-us"} className="theme-btn theme-btn-hover">
                        Discuss Your Project
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className={props.rightColClass || `col-lg-6`}>
              {props.servicesbannerimg && (
                <div className="services-banner__img">
                  <img
                    src={props.servicesbannerimg}
                    className="img-fluid"
                    alt={props.title}
                    fetchPriority="high"
                    width="336"
                    height="277"
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
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="form-control"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        placeholder="Company Organization"
                        className="form-control"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 mb-3">
                      <input
                        type="text"
                        placeholder="Website"
                        className="form-control"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
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
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <select
                        id="serviceSelect"
                        className="form-select form-control"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                      <option value="">Select Services</option>
                      <option value="logo design">Logo Design</option>
                      <option value="website design">Web Design</option>
                      <option value="cms development">CMS Development</option>
                      <option value="digital marketing">Digital Marketing</option>
                      <option value="custom web development">Custom Web Development</option>
                      <option value="mobile app development">Mobile App Development</option>
                      </select>
                    </div>
                    <div className="col-lg-12 mb-3">
                      <input
                        type="text"
                        placeholder="How Did You Hear About TWS?"
                        className="form-control"
                        name="about_cwc"
                        value={formData.about_cwc}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-12 mb-3">
                      <textarea
                        className="form-control"
                        placeholder="Tell Us About Your Business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        rows={3}
                      />
                    </div>
                    <div className="col-md-12 mt-4">
                      <button
                        type="submit"
                        className={`ny-btn ${loading ? "btn-loading" : "btn-loaded"}`}
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : props.btntxt || "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesBanner;
